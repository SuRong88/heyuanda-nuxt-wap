<template>
  <div class="v-footer">
    <div class="footer-logo-box">
      <img class="footer-logo" :src="webInfo.website_logo_ph_bottom" alt />
    </div>
    <div class="copyright">
      <a href="http://www.beian.miit.gov.cn" target="_blank">
        {{webInfo.website_name}}
        <br />
        {{webInfo.website_copyright}}
        <br />
        {{webInfo.website_icp_numb}}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    webInfo() {
      return this.$store.state.webInfo;
    }
  }
};
</script>

<style lang="less" scoped>
.v-footer {
  // padding: 1.7rem 3rem 1.2rem;
  padding: 1.7rem 2.95rem 1.2rem;
  background: #222222;
}

.footer-logo-box {
  width: 18rem;
  margin: 0 auto;
  margin-bottom: 1.3rem;

  .footer-logo {
    width: 100%;
  }
}

.copyright {
  font-size: 1.2rem;
  color: rgba(99, 99, 99, 1);
  text-align: center;
  line-height: 1.6rem;
}
</style>
