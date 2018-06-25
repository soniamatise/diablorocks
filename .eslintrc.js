module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ["eslint:recommended", "plugin:vue/recommended"],
  parserOptions: {
    parser: "babel-eslint"
  }, 
  plugins: ["vue"],
  rules: {
    "no-console": ["off", "allow"],
    "no-unused-vars": [
      "warn",
      {
        properties: "always"
      }
    ],
    "vue/html-indent": [
      "warn",
      "tab",
      {
        alignAttributesVertically: true
      }
    ],
    "vue/max-attributes-per-line": [
      0,
      {
        singleline: 5,
        multiline: {
          max: 5,
          allowFirstLine: false
        }
      }
    ],
    "vue/require-v-for-key": "off",
    "vue/no-confusing-v-for-v-if": "off",
    "vue/require-prop-types": "off",
    "vue/attributes-order": "off",
    "vue/html-self-closing": "off",
    "no-unused-labels": "off",
    "linebreak-style": ["warn", "unix"],
    semi: ["warn", "always"],
    camelcase: [
      "warn",
      {
        properties: "always"
      }
    ]
  },
  "globals": {
    //GSAP Globals
    "TimelineLite" : false,
    "TimelineMax" : false,
    "TweenLite" : false,
    "TweenMax" : false,
    "Back" : false,
    "Bounce" : false,
    "Circ" : false,
    "Cubic" : false,
    "Ease" : false,
    "EaseLookup" : false,
    "Elastic" : false,
    "Expo" : false,
    "Linear" : false,
    "Power0" : false,
    "Power1" : false,
    "Power2" : false,
    "Power3" : false,
    "Power4" : false,
    "Quad" : false,
    "Quart" : false,
    "Quint" : false,
    "RoughEase" : false,
    "Sine" : false,
    "SlowMo" : false,
    "SteppedEase" : false,
    "Strong" : false,
    "Draggable" : false,
    "SplitText" : false,
    "VelocityTracker" : false,
    "CSSPlugin" : false,
    "ThrowPropsPlugin" : false,
    "BezierPlugin" : false
  }
};
