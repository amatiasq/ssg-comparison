<template>
  <div>
    <custom-link>
      POTATO
    </custom-link>
  </div>
</template>

<script>
import customLink from "./components/link.vue";

export default {
  components: {
    customLink
  },
  computed: {
    css: function() {
      return this.getVueComponentCssForPage(this.page.url);
    }
  }
}
</script>