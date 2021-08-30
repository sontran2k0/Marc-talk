<template>
  <div
    class="flex items-center q-pb-md q-px-lg q-pa-sm"
    :class="{ [`card-history`]: true, separate: separate }"
  >
    <img class="src q-mr-md" src="~assets/gift-desktop.png" :alt="title" />

    <div class="content">
      <h3 class="title q-mb-sm">{{ title }}</h3>
      <p class="out-dated q-mb-sm q-mr-sm inline-block">{{ outdated }}</p>
      <button-x
        class="inline-block"
        color="red"
        rounded="full"
        :outlined="true"
        size="small"
        @click.native="onClick"
        :data-giftCode="giftCode"
      >
        Sao chép mã
      </button-x>
    </div>
  </div>
</template>

<script>
import ButtonX from "src/components/Button/Button-x";

export default {
  name: "card-history",
  components: {
    ButtonX
  },
  props: {
    src: String,
    title: String,
    outdated: String,

    buttonText: String,
    separate: Boolean,
    giftCode: {
      type: String,
      default: ""
    }
  },
  methods: {
    copyToClipboard(text) {
      window.navigator.clipboard.writeText(text);
      document.execCommand("copy");
    },
    onClick: function() {
      this.$q.notify({
        message: "Đã sao chép"
      });

      this.copyToClipboard(this.giftCode);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "src/css/app.scss";

.card-history {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.5;
  }

  .src {
    flex: 1 0 30px;
    width: 30px;
    object-fit: cover;
    object-position: center;
  }

  .content {
    width: 100%;
    flex: 5;

    .title {
      @include color("black");
      font-size: 15px;
      font-weight: 500;
      // margin-bottom: spacing(2);
    }

    .out-dated {
      @include color("gray");
      font-size: 13px;
    }
  }

  &.separate {
    border-bottom: 1px solid theme-colors("black", 0.1);
  }
}
</style>
