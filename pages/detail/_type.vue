<template>
  <div class="about-page about-detail">
    <v-nav :show="show"></v-nav>
    <div class="content clear">
      <div class="content-hd">
        <div class="date-box">
          <span class="date">
            {{detail.create_time | dateformat('YYYY年MM月DD日')}}
          </span>
          <span class="type">{{ typeTitle }}</span>
        </div>
        <h2 class="tit">
          {{detail.name}}
        </h2>
      </div>
      <div v-html="detail.body" class="content-bd edit_textBox">
      </div>
    </div>

    <v-footer></v-footer>
  </div>
</template>

<script>
  import URL from '~/plugins/url';
  import vNav from '@/components/vNav.vue';
  import vFooter from '@/components/vFooter.vue';
  export default {
    components: {
      vNav,
      vFooter
    },
    head() {
      return {
        title: this.detail.seo_title,
        meta: [{
            hid: 'keywords',
            name: 'keywords',
            content: this.detail.seo_keyword
          },
          {
            hid: 'description',
            name: 'description',
            content: this.detail.seo_desc
          }
        ]
      }
    },
    created() {
      if (!this.$route.params.type) {
        this.$errorToast('缺少必要参数');
        return setTimeout(() => {
          return this.$router.go(-1);
        }, 2000);
        // return this.$router.go(-1)
      }
      let type = this.$route.params.type.split('-')[0];
      let id = this.$route.params.type.split('-')[1];
      this.type = type;
      this.typeTitle = type == 'company' ? '公司动态' : '行业动态';
      this.$admin_base([
        this.$get(URL.getArticleDetail, {
          id: id,
        })
      ], [
        (res) => {
          this.detail = res.data
          console.log('文章详情');
          console.log(this.detail);
        }
      ])
    },
    mounted() {},
    data() {
      return {
        // 文章详情
        detail: {},
        // 文章类型
        type: '',
        show: false,
        // 文章类型标题
        typeTitle: '标题'
      };
    },
    methods: {}
  };
</script>

<style></style>
