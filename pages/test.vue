<template>
  <div></div>
</template>

<script>
  import URL from '~/plugins/url'
  export default {
    created() {
      // console.log(URL);
      this.$admin_base([
        this.$get(URL.getArticleType)
      ], [
        function(res) {
          console.log(res.data);
        }
      ])
      this.$admin_base([
        this.$get(URL.getWebInfo)
      ], [
        function(res) {
          console.log(res.data);
        }
      ])
      // this.$admin_base([
      //   this.$get(URL.getArticleList)
      // ], [
      //   function(res) {
      //     console.log(res.data);
      //   }
      // ])
      // this.$admin_base([
      //   this.$get(URL.getArticle, null)
      // ], [
      //   (res) => {
      //      console.log(res.data);
      //   }
      // ]);
    }
  }
</script>

<style>
</style>
