<!-- 医院危急机上报系统 -->
<template>
    <!-- 移动端减掉部分页面 为保持与pc的顺序 重新命名case14 -->
    <div class="case-page case-page14">
        <v-nav :show="show"></v-nav>
        <main>
            <div class="case-banner case-banner11 flex flex-center">
                <h2 class="banner-title">{{ bannerTitle }}</h2>
            </div>
            <div class="content">
                <section class="sec sec01">
                    <h2 class="con-tit">案例描述</h2>
                    <p class="txt">本项目整合LIS、惠乔检系统，HIS系统共同完成所有功能模块。</p>
                </section>
                <section class="sec sec02">
                    <h2 class="con-tit">客户需求</h2>
                    <p class="txt">
                        本系统可以实现：患者信息查询与展示、患者医技收费项目、开单医生信息获取与显示、上报内容筛选及录入、危急值内容上报提交、危急值内容上报撤销、统计分析功能以及临床危急值自动提醒功能临床危急值处理反馈。
                    </p>
                    <p class="txt">危急机上报分两种：检验危急值是通过调用惠乔系统接口自动推送给科室，检查危急值由检查管理系统操作发送给临床科室。</p>
                </section>
                <section class="sec sec03">
                    <h2 class="con-tit">实施目标</h2>
                    <p class="tar-txt"></p>
                    <ul class="common-list01">
                        <li class="list-item">
                            <span class="label">1</span>
                            <p class="item-txt">减少检验危急机由人工电话确认次数</p>
                        </li>
                        <li class="list-item">
                            <span class="label">2</span>
                            <p class="item-txt">提高检验/检查危急机响应速度</p>
                        </li>
                        <li class="list-item">
                            <span class="label">3</span>
                            <p class="item-txt">增加检查危急值上报途径</p>
                        </li>
                        <li class="list-item">
                            <span class="label">4</span>
                            <p class="item-txt">提高检查危急值上报效率</p>
                        </li>
                    </ul>
                </section>
                <section class="sec sec04">
                    <h2 class="con-tit">实施成效</h2>
                    <ul class="common-list02">
                        <li class="list-item">
                            <img class="item-img" src="@/assets/images/case/img27.jpg" alt="" />
                            <dl class="sec-dl">
                                <dd class="sec-dd flex flex-start">
                                    <span class="label">01</span>
                                    <p class="dd-txt">检验危急值98%以上由通过系统确认</p>
                                </dd>
                                <dd class="sec-dd flex flex-start">
                                    <span class="label">02</span>
                                    <p class="dd-txt">提高检验/检查危急机响应速度做到立即发现立即处理反馈给开单医生（护士站登录即确认）</p>
                                </dd>
                                <dd class="sec-dd flex flex-start">
                                    <span class="label">03</span>
                                    <p class="dd-txt">检查危急值直接通过系统上报给科室及开单无需再电话通知。</p>
                                </dd>
                                <dd class="sec-dd flex flex-start">
                                    <span class="label">04</span>
                                    <p class="dd-txt">检查危急值由原先电话通知改为系统上报，所有上报项目都是通过勾选即可完成操作，工作效率极大提高。</p>
                                </dd>
                            </dl>
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
                    // name: 'cases14',
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
            bannerTitle: '医院危急机上报系统'
        };
    },
    computed: {}
};
</script>

<style></style>
