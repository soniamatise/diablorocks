<template>
<section id="IconsCaption">
	<div class="row center">
		<div class="column large-14 medium-20 small-full">
			<div class="holder" :color="caseColor" >
				<!-- <ul v-if="showingImages.length > 0">
					<li class="contentHolder" v-for="image in showingImages" :key="image.id + realRandomNumber()">
						<img id="randomize" class="img" v-bind:src="image.src" title="image.title" alt="icon">
					</li>
				</ul> -->
			</div>
		</div>
		<div class="column large-12 medium-16 small-16">
			<p><span>One language</span> Digital was leading during the entire project. The old iconography used on packaging and online were replaced by a new smooth iconset which works on and -offline. Pretty nice, aye?</p>
		</div>
	</div>
</section>
</template>

<script>
export default {
  data() {
    return {
      // showingImages: []
    };
  },
  props: ['images', 'timeout', 'limit' , 'caseColor'],
  methods: {
		//case color on mouseover
		const bgDiv = document.getElementById('holder');
		bgDiv.style.backgroundColor = this.caseColor;

    // changeImage: function() {
    //   let that = this;
    //   let newImage = that.randomNumber();
    //   let randomItem = Math.floor(Math.random() * that.$props.limit);
    //   console.log(newImage);
    //   console.log(that.$props.images[newImage]);
    //   if (that.$props.images[newImage].src) {
    //     that.showingImages.forEach(function(item) {
    //       if (item.id == randomItem) {
    //         item = {
    //           id: newImage,
    //           src: that.$props.images[newImage].src,
    //           title: that.$props.images[newImage].title
    //         };
    //       }
    //     });
    //   }
    // },

    // fillShowingImages: function() {
    //   // Initialize the images to fill (first run)
    //   this.addImage(0);
    // },

    // addImage: function(i) {
    //   i++;
    //   let that = this;
    //   let number = this.randomNumber() - 1;
    //   let tempObject = {
    //     id: number,
    //     src: that.$props.images[number].src,
    //     title: that.$props.images[number].title
    //   };
		//
    //   console.log(tempObject);
    //   that.showingImages.push(tempObject);
		//
    //   if (i < that.$props.limit) {
    //     that.addImage(i);
    //   } else {
    //     console.log(that.showingImages);
    //   }
    // },

    // randomNumber: function() {
    //   let number = Math.floor(Math.random() * this.$props.images.length);
    //   let exists = false;
    //   let i = 0;
    //   let that = this;
		//
    //   console.log('length:  ', this.showingImages.length);
    //   if (that.showingImages.length < 1) {
    //     console.log(' dus hier ');
    //     return number;
    //   } else {
    //     console.log('showingimages', this.showingImages);
    //     for (i = 0; i < that.showingImages.length; i++) {
    //       // this.showingImages.forEach(function(item) {
    //       i++;
    //       console.log('that showing images', that.showingImages);
    //       if (that.showingImages[i].id == number) {
    //         exists = true;
    //       }
    //       if (i == that.showingImages.length) {
    //         if (!exists) {
    //           return number;
    //         } else {
    //           return this.randomNumber();
    //         }
    //       }
    //       // });
    //     }
    //   }
    // },
    // realRandomNumber: function() {
    //   let number = Math.floor(Math.random() * 9999);
    //   return number;
    // }
  },
  created() {},
  mounted() {
    // let that = this;
    // setTimeout(function() {
    //   that.fillShowingImages();
    // }, 1000);
    // setInterval(function() {
    //   that.changeImage();
    // }, this.$props.timeout);
  }
};
</script>



<!-- <template>
<section id="IconsCaption">
	<div class="row center">
		<div class="column large-14 medium-20 small-full">
			<div class="holder">
				<ul v-if="showingImages.length > 0">
					<li class="contentHolder" v-for="image in showingImages" :key="image.id + realRandomNumber()">
						<img id="randomize" class="img" v-bind:src="image.src" title="image.title" alt="icon">
					</li>
				</ul>
			</div>
		</div>
		<div class="column large-12 medium-16 small-16">
			<p><span>One language</span> Digital was leading during the entire project. The old iconography used on packaging and online were replaced by a new smooth iconset which works on and -offline. Pretty nice, aye?</p>
		</div>
	</div>
</section>
</template>

<script>
export default {
  data() {
    return {
      showingImages: []
    };
  },
  props: ['images', 'timeout', 'limit' , 'caseColor'],
  methods: {
    changeImage: function() {
      let that = this;
      let newImage = that.randomNumber();
      let randomItem = Math.floor(Math.random() * that.$props.limit);
      console.log(newImage);
      console.log(that.$props.images[newImage]);
      if (that.$props.images[newImage].src) {
        that.showingImages.forEach(function(item) {
          if (item.id == randomItem) {
            item = {
              id: newImage,
              src: that.$props.images[newImage].src,
              title: that.$props.images[newImage].title
            };
          }
        });
      }
    },

    fillShowingImages: function() {
      // Initialize the images to fill (first run)
      this.addImage(0);
    },

    addImage: function(i) {
      i++;
      let that = this;
      let number = this.randomNumber() - 1;
      let tempObject = {
        id: number,
        src: that.$props.images[number].src,
        title: that.$props.images[number].title
      };

      console.log(tempObject);
      that.showingImages.push(tempObject);

      if (i < that.$props.limit) {
        that.addImage(i);
      } else {
        console.log(that.showingImages);
      }
    },

    randomNumber: function() {
      let number = Math.floor(Math.random() * this.$props.images.length);
      let exists = false;
      let i = 0;
      let that = this;

      console.log('length:  ', this.showingImages.length);
      if (that.showingImages.length < 1) {
        console.log(' dus hier ');
        return number;
      } else {
        console.log('showingimages', this.showingImages);
        for (i = 0; i < that.showingImages.length; i++) {
          // this.showingImages.forEach(function(item) {
          i++;
          console.log('that showing images', that.showingImages);
          if (that.showingImages[i].id == number) {
            exists = true;
          }
          if (i == that.showingImages.length) {
            if (!exists) {
              return number;
            } else {
              return this.randomNumber();
            }
          }
          // });
        }
      }
    },
    realRandomNumber: function() {
      let number = Math.floor(Math.random() * 9999);
      return number;
    }
  },
  created() {},
  mounted() {
    let that = this;
    setTimeout(function() {
      that.fillShowingImages();
    }, 1000);
    setInterval(function() {
      that.changeImage();
    }, this.$props.timeout);
  }
};
</script> -->
