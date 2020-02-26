<!-- 自媒体KOL监测 -->
<template>
    <div class="case-page case-page06">
        <v-nav :show="show"></v-nav>
        <main>
            <div class="case-banner case-banner06 flex flex-center">
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
                        广告主通过自媒体KOL进行广告投放、市场营销。随着流量越来越贵，广告主投入成本越来越高；此外，刷流量造假风盛，僵尸粉和真实粉丝情况难以辨别，广告曝光无法量化，粉丝画像无法获知，导致投放产品存在较大的盲目性。
                    </p>
                </section>
                <section class="sec sec02">
                    <h2 class="con-tit">客户需求</h2>
                    <p class="txt">避免无效广告投放，节省广告成本，提高转化收益。</p>
                </section>
                <section class="sec sec03">
                    <h2 class="con-tit">实施目标</h2>
                    <p class="tar-txt">基于运营商大数据，对粉丝真实活跃情况进行监测，还原真实粉丝数量，并对粉丝群体进行画像。</p>
                    <img class="img" src="@/assets/images/case/img13.png" alt="" />
                </section>
                <section class="sec sec04">
                    <h2 class="con-tit">实施成效</h2>
                    <ul class="common-list02">
                        <li class="list-item">
                            <img class="item-img" src="@/assets/images/case/img14.jpg" alt="" />
                            <p class="item-txt">通过粉丝画像，定位具体适合投放的产品；</p>
                        </li>
                        <li class="list-item">
                            <img class="item-img" src="@/assets/images/case/img15.jpg" alt="" />
                            <p class="item-txt">找出真实粉丝数量，结合精准投放，避免无效广告投放，节省广告成本，提高转化收益。</p>
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
                    // name: 'cases6',
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
            bannerTitle: '自媒体KOL监测'
        };
    },
    computed: {}
};
</script>

<style></style>
