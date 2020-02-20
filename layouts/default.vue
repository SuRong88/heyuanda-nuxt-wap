<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
  import URL from '~/plugins/url'
  export default {
    components: {

    },

    head() {
      return {
        title: this.$store.state.webInfo.website_name,
        link: [{
          rel: 'shortcut icon',
          // type: 'image/x-icon',
          href: this.$store.state.webInfo.website_icon
        }]
      }
    },

    data() {
      return {}
    },

    created() {
      let that = this;
      this.$admin_base([
        this.$get(URL.getWebInfo)
      ], [
        function(res) {
          console.log(res.data);
          that.$store.commit('SET_WEBINFO', res.data);
        }
      ])
    },

    computed: {
    
    },

    mounted() {

    }
  }
</script>

<style>

</style>
