<!-- 数据库备份项目 -->
<template>
    <div class="case-page case-page08">
        <v-nav :show="show"></v-nav>
        <main>
            <div class="case-banner case-banner09 flex flex-center">
                <h2 class="banner-title">{{ bannerTitle }}</h2>
            </div>
            <div class="content">
                <section class="sec sec01">
                    <h2 class="con-tit">案例描述</h2>
                    <p class="txt">
                        我司为某省运营商提供的数据库备份集中管理系统是一套专业的数据库数据备份及恢复系统，实现了客户数据的快速备份和恢复功能，实时监测数据库状态及备份作业运行状态，当需要进行数据恢复时可在几分钟内恢复任意大小的数据量，实现了数据恢复的高效性和稳定性。
                    </p>
                </section>
                <section class="sec sec02">
                    <h2 class="con-tit">客户需求</h2>
                    <p class="txt">
                        当前后端数据库数据备份和备份档管理无集中管理和快速恢复能力，每日全量备份给服务器磁盘空间带来很大压力，且数据恢复速度较慢，无法满足生产环境业务需求。因此，需要一套专业的数据备份、数据恢复及备份档集中化管理系统。
                    </p>
                </section>
                <section class="sec sec03">
                    <h2 class="con-tit">实施目标</h2>
                    <p class="tar-txt">我司为客户提供的数据备份集中管理系统保证信息的安全性、完整性、准确性，保障生产环境下出现数据及主机故障时能及时提供数据恢复能力。</p>
                    <ul class="common-list01">
                        <li class="list-item">
                            <span class="label">1</span>
                            <p class="item-txt">降低各种应用带来的复制数据的成本，提高保护等级；</p>
                        </li>
                        <li class="list-item">
                            <span class="label">2</span>
                            <p class="item-txt">实现复制数据管理的极致简化；</p>
                        </li>
                        <li class="list-item">
                            <span class="label">3</span>
                            <p class="item-txt">本地机房的快速恢复；</p>
                        </li>
                        <li class="list-item">
                            <span class="label">4</span>
                            <p class="item-txt">减少备份窗口；</p>
                        </li>
                        <li class="list-item">
                            <span class="label">5</span>
                            <p class="item-txt">减少备份数据的重复利用；</p>
                        </li>
                    </ul>
                </section>
                <section class="sec sec04">
                    <h2 class="con-tit">实施成效</h2>
                    <p class="effect-txt">
                        备份系统建成后共为客户接入生产业务主机约700台，接入生产业务数据库实例约1100例共接入备份原始数据量约：300TB，极大的减轻了生产主机的硬件资源压力，实现了本地数据快速备份和快速恢复的能力，成为了生产环境数据库数据强有力的保障。
                    </p>
                    <img class="img" src="@/assets/images/case/img22.png" alt="" />
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
                    // name: 'cases10',
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
            bannerTitle: '数据库备份项目'
        };
    },
    computed: {}
};
</script>

<style></style>
