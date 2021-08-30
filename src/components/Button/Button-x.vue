<template>
  <button :class="className">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "button-x",
  data() {
    return {
      className: {
        btn: true,
        [`btn-${this.color}`]: true,

        rounded: this.rounded === "rounded",
        [`rounded-full`]: this.rounded === "full",

        outlined: this.outlined,

        [`btn-sm`]: this.size
      }
    };
  },
  props: {
    color: {
      type: String,
      required: true,
      default: "red"
    },
    rounded: {
      type: String,
      required: false,
      default: ""
    },
    outlined: {
      type: Boolean,
      required: false,
      default: false
    },
    size: {
      type: String,
      required: false,
      default: ""
    }
  },

  computed: {}
};
</script>

<style lang="scss" scoped>
@import "src/css/app.scss";

$colors: (
  "red": (
    "color": theme-colors("red"),
    "text": theme-colors("white")
  ),
  "gray": (
    "color": theme-colors("gray"),
    "text": theme-colors("white")
  ),
  "blue": (
    "color": theme-colors("blue"),
    "text": theme-colors("white")
  ),
  "brown": (
    "color": theme-colors("brown"),
    "text": theme-colors("white")
  ),
  "white": (
    "color": theme-colors("white"),
    "text": theme-colors("white")
  ),
  "black": (
    "color": theme-colors("black"),
    "text": theme-colors("white")
  ),
  "light": (
    "color": theme-colors("light"),
    "text": theme-colors("white")
  )
);

.btn {
  min-width: 90px;
  padding: spacing(2) spacing(4);
  font-size: 14px;
  background-color: transparent;
  border: 0;

  @each $type, $opts in $colors {
    &.btn-#{$type} {
      background-color: map-get($map: $opts, $key: "color");
      color: map-get($map: $opts, $key: "text");

      transition: all 300ms ease;

      &.outlined {
        background-color: transparent;
        color: map-get($map: $opts, $key: "color");
        border: 1px solid map-get($map: $opts, $key: "color");

        &:hover {
          background-color: map-get($map: $opts, $key: "color");
          color: map-get($map: $opts, $key: "text");
        }
      }
    }
  }

  &.rounded-full {
    border-radius: 9999px;
  }

  &.rounded {
    border-radius: 5px;
  }

  &.btn-sm {
    padding: spacing(1) spacing(3);
  }
}
</style>
