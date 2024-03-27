<template>
  <div>
    <ParentLayout></ParentLayout>
    <site-footer></site-footer>
  </div>
</template>

<script>
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";
import SiteFooter from "./Footer.vue";

export default {
  components: {
    ParentLayout,
    SiteFooter,
  },
};
</script>
