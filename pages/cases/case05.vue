<!-- 淘宝电商数据监测应用 -->
<template>
    <div class="case-page case-page05">
        <v-nav :show="show"></v-nav>
        <main>
            <div class="case-banner case-banner05 flex flex-center">
                <h2 class="banner-title">{{ bannerTitle }}</h2>
            </div>
            <div class="content">
                <nuxt-link to="/cases" tag="button" class="btn-back-list">
                    <img class="icon-img" src="@/assets/images/icons/back-icon.png" alt="" />
                    返回列表
                </nuxt-link>
                <section class="sec sec01">
                    <h2 class="con-tit">案例描述</h2>
                    <p class="txt">
                        某淘宝茶叶天猫旗舰店产品市场分析与营销，只能通过平台获取自身产品的浏览量、点击量等常规行为，无法获知竞品的活动、降价等商业行为带来的真实数据影响，从而错失了竞争优势。如通过常规渠道进行广告投放，无法定向触达精准用户，投入与收益难以保证。
                    </p>
                </section>
                <section class="sec sec02">
                    <h2 class="con-tit">客户需求</h2>
                    <p class="txt">掌握竞品动态，实现精准有效触达，提升竞争优势，提高广告投放收益率。</p>
                </section>
                <section class="sec sec03">
                    <h2 class="con-tit">实施目标</h2>
                    <p class="tar-txt">
                        基于运营商大数据，通过对用户的浏览行为、人群画像分析，定向筛选出浏览或购买了竞品的潜在客户。
                        通过运营商平台，以短信精准有效触达客户。通过精准人群包，以广告形式触达客户。
                    </p>
                    <img class="img" src="@/assets/images/case/img09.png" alt="" />
                </section>
                <section class="sec sec04">
                    <h2 class="con-tit">实施成效</h2>
                    <ul class="common-list02">
                        <li class="list-item">
                            <img class="item-img" src="@/assets/images/case/img10.jpg" alt="" />
                            <p class="item-txt">通过对竞品线上旗舰店的监测，锁定目标客户。</p>
                        </li>
                        <li class="list-item">
                            <img class="item-img" src="@/assets/images/case/img11.jpg" alt="" />
                            <p class="item-txt">通过短信把广告精准投放到潜在用户，提高市场占有率。</p>
                        </li>
                        <li class="list-item">
                            <img class="item-img" src="@/assets/images/case/img12.jpg" alt="" />
                            <p class="item-txt">通过对广告投放，结合对营销漏斗的监测，提升广告投放的产出。</p>
                        </li>
                    </ul>
                </section>
            </div>
        </main>
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
    layout: function(context) {
        return 'default02';
    },
    head() {
        return {
            title: this.SEOInfo.seo_title,
            meta: [
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content: this.SEOInfo.seo_keyword
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: this.SEOInfo.seo_desc
                }
            ]
        };
    },
    created() {
        let seoKey = this.$route.path;
        this.$admin_base(
            [
                this.$get(URL.getSEOInfo, {
                    // name: 'cases5',
                    name: seoKey
                })
            ],
            [
                res => {
                    console.log('seo');
                    console.log(res.data);
                    this.SEOInfo = res.data;
                }
            ]
        );
    },
    mounted() {},
    data() {
        return {
            SEOInfo: {},
            show: false,
            bannerTitle: '淘宝电商数据监测应用'
        };
    },
    computed: {}
};
</script>

<style></style>
