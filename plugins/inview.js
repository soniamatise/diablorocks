// In main.js
import Vue from "vue";

Vue.directive("inview", {
  bind: function(el, binding) {
    function getInview(el) {
      let _this = this;
      _this.win = {
        // size of window
        width: 0,
        height: 0
      };
      _this.box = {
        //position and size of el
        top: 0,
        left: 0,
        width: 0,
        height: 0
      };
      _this.visible = {
        //percentage of el width visible in viewport, on X and Y axis
        x: 0,
        y: 0
      };
      _this.minVisible = 50; //minimum percentage for el visible in viewport
      _this.inView = false; //true if el in viewport; else false
      _this.listen = null; //for function executed on window resize and scrolling page

      //sets window size {w:width, h:height}
      let winSize = function() {
        let returnValue = {};
        if (self.innerHeight) {
          returnValue.h = self.innerHeight;
          returnValue.w = self.innerWidth;
        } else if (
          document.documentElement &&
          document.documentElement.clientHeight
        ) {
          returnValue.h = document.documentElement.clientHeight;
          returnValue.w = document.documentElement.Width;
        } else if (document.body) {
          returnValue.h = document.body.clientHeight;
          returnValue.w = document.body.clientWidth;
        }
        _this.win.width = returnValue.w;
        _this.winHeight = returnValue.h;
      };

      //sets position and size of el: {x:left, y:top, w:width, h:height}
      function posSize(el) {
        function getOffset(object, offset) {
          if (!object) return;
          offset.x += object.offsetLeft;
          offset.y += object.offsetTop;
          getOffset(object.offsetParent, offset);
        }
        function getScrolled(object, scrolled) {
          if (!object) return;
          scrolled.x += object.scrollLeft;
          scrolled.y += object.scrollTop;
          if (object.tagNa_this.toLowerCase() !== "html") {
            getScrolled(object.parentNode, scrolled);
          }
        }
        function getZoomFactor() {
          let factor = 1;
          if (document.body.getBoundingClientRect) {
            let rect = document.body.getBoundingClientRect();
            let physicalW = rect.right - rect.left;
            let logicalW = document.body.offsetWidth;
            factor = Math.round(physicalW / logicalW * 100) / 100;
          }
          return factor;
        }
        let re = { x: 0, y: 0, w: 0, h: 0 };
        if (el.getBoundingClientRect) {
          let rect = el.getBoundingClientRect();
          let x = rect.left;
          let y = rect.top;
          let w = rect.right - rect.left;
          let h = rect.bottom - rect.top;
          if (
            navigator.appName.toLowerCase() == "microsoft internet explorer"
          ) {
            x -= document.documentElement.clientLeft;
            y -= document.documentElement.clientTop;
            let zoomFactor = getZoomFactor();
            if (zoomFactor != 1) {
              x = Math.round(x / zoomFactor);
              y = Math.round(y / zoomFactor);
              w = Math.round(w / zoomFactor);
              h = Math.round(h / zoomFactor);
            }
          }
          re = {
            x: Math.round(x),
            y: Math.round(y),
            w: Math.round(w),
            h: Math.round(h)
          };
        } else {
          let offset = { x: 0, y: 0 };
          getOffset(el, offset);
          let scrolled = { x: 0, y: 0 };
          getScrolled(el.parentNode, scrolled);
          let x = offset.x - scrolled.x;
          let y = offset.y - scrolled.y;
          let w = el.offsetWidth;
          let h = el.offsetHeight;
          re = {
            x: Math.round(x),
            y: Math.round(y),
            w: Math.round(w),
            h: Math.round(h)
          };
        }
        _this.box.top = re.y;
        _this.box.left = re.x;
        _this.box.width = re.w;
        _this.box.height = re.h;
      }

      //sets the visibleX property; the visible percent of el width in viewport
      let getVisibleX = function() {
        let returnValue;
        if (_this.box.left >= 0) {
          returnValue = Math.max(
            0,
            Math.min(
              100,
              (_this.win.width - _this.box.left) * 100 / _this.box.width
            )
          );
        } else {
          returnValue = Math.max(
            0,
            Math.min(
              100,
              (_this.box.width + _this.box.left) * 100 / _this.box.width
            )
          );
        }
        _this.visible.x = returnValue.toFixed(2);
      };

      //sets the visibleY property; the visible percent of el height in viewport
      let getVisibleY = function() {
        let returnValue;
        if (_this.box.top >= 0) {
          returnValue = Math.max(
            0,
            Math.min(
              100,
              (_this.winHeight - _this.box.top) * 100 / _this.box.height
            )
          );
        } else {
          returnValue = Math.max(
            0,
            Math.min(
              100,
              (_this.box.height + _this.box.top) * 100 / _this.box.height
            )
          );
        }
        _this.visible.y = returnValue.toFixed(2);
      };

      //sets the visibleY property; the visible percent of el height in viewport
      let getInParent = function() {
        let returnValue;
        // if (_this.visible.y > 0) {
        returnValue = Math.round(
          100 - (_this.box.top + _this.box.height / 2) / _this.winHeight * 100
        );
        // } else {
        // returnValue = 0;
        // }
        _this.inParent = returnValue;
      };

      //sets the visibleY property; the visible percent of el height in viewport
      let Inview = function() {
        let returnValue;
        if (_this.visible.y > 0 && _this.visible.x > 0) {
          returnValue = true;
        } else {
          returnValue = false;
        }
        _this.inView = returnValue;
      };

      //sets the inView property - true if el is in viewport with minimum percentage; else false
      let setInView = function() {
        _this.inView =
          _this.visible.y >= _this.minVisible &&
          _this.visible.x >= _this.minVisible
            ? true
            : false;
      };

      //calls functions that set properties
      function construct() {
        winSize();
        posSize(el);
        getVisibleX();
        getVisibleY();
        getInParent();
        Inview();
        setInView();
        if (typeof _this.listen == "function") {
          _this.listen();
          // console.log(typeof listen);
        }
      }

      if (el) {
        construct();

        // when Resize browser, re-set properties
        window.addEventListener("resize", construct);

        // when scrolling page, re-set properties
        window.addEventListener("scroll", construct);

        //execute listen after 250 miliseconds if it is a function
        window.setTimeout(function() {
          if (typeof _this.listen == "function") {
            _this.listen();
          }
        }, 10);
      }
    }

    //function to be passed to "listen" property; adds data in #im1_data
    function showData() {
      // el.setAttribute("data-inparent", element.inParent);
      // el.style.transform = `translateY(${element.inParent /
      //   binding.value.increase}px)`;
    }

    let element = new getInview(el);

    // console.log(element);
    element.listen = showData;
    // console.log(window);
    // console.log(element);
  }
});
