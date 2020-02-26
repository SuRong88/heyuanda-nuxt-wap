<template>
    <div class="case-page case-index">
        <v-nav :show="show"></v-nav>
        <main>
            <div class="case-banner case-banner00 flex flex-center">
                <h2 class="banner-title">{{ bannerTitle }}</h2>
            </div>
            <div class="content">
                <ul class="case-nav flex">
                    <li @click="navSwitch(0, 'all')" class="case-nav-item" :class="{ 'is-actived': navIndex == 0 }">全部</li>
                    <li @click="navSwitch(1, 'type01')" class="case-nav-item" :class="{ 'is-actived': navIndex == 1 }">聚客易</li>
                    <li @click="navSwitch(2, 'type02')" class="case-nav-item" :class="{ 'is-actived': navIndex == 2 }">通信</li>
                    <li @click="navSwitch(3, 'type03')" class="case-nav-item" :class="{ 'is-actived': navIndex == 3 }">医疗</li>
                    <li @click="navSwitch(4, 'type04')" class="case-nav-item" :class="{ 'is-actived': navIndex == 4 }">新农业</li>
                </ul>
                <ul class="list-box">
                    <li v-if="idx < 6 || showAll" v-for="(item, idx) in showlist" :key="idx" class="list-item">
                        <div class="item-img"><img class="img" :src="item.imgPath" alt="" /></div>
                        <div class="item-desc-box">
                            <h4 class="item-tit">{{ item.title }}</h4>
                            <p class="item-desc">{{ item.desc }}</p>
                        </div>
                        <nuxt-link tag="button" :to="item.link" class="item-btn">
                            查看详情
                            <img class="arrow-icon" src="@/assets/images/solution/list/arrow-icon.png" alt="" />
                        </nuxt-link>
                    </li>
                </ul>
                <button v-if="!showAll && showlist.length > 6" @click="loadMore" class="loadmore-btn">加载更多</button>
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
    created() {
        let seoKey = this.$route.path;
        this.$admin_base(
            [
                this.$get(URL.getSEOInfo, {
                    // name: 'solutions6',
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
        switch (this.$route.query.type) {
            case 'all':
                this.navIndex = 0;
                this.showlist = this.list;
                break;
            case 'type01':
                this.navIndex = 1;
                this.showlist = this.list.slice(0, 6);
                break;
            case 'type02':
                this.navIndex = 2;
                this.showlist = this.list.slice(6, 10);
                break;
            case 'type03':
                this.navIndex = 3;
                this.showlist = this.list.slice(10, 11);
                break;
            case 'type04':
                this.navIndex = 4;
                this.showlist = this.list.slice(11, 12);
                break;
            default:
                this.navIndex = 0;
                this.showlist = this.list;
                break;
        }
    },
    mounted() {},
    data() {
        return {
            SEOInfo: {},
            showAll: false,
            show: false,
            bannerTitle: '成功案例',
            navIndex: 0,
            showlist: [],
            list: [
                {
                    imgPath: require('@/assets/images/case/list/img01.jpg'),
                    title: '市场精准调研',
                    desc: '该市场调研公司，过往依赖线下招募志愿者填写问卷的方式进行市场调研。传统调研方式成本较高、覆…',
                    link: '/cases/case01'
                },
                {
                    imgPath: require('@/assets/images/case/list/img02.jpg'),
                    title: '广告精准投放',
                    desc: '该广告公司，过往使用流量平台自身标签库进行人群筛选，同行业基于同一套规则争抢客户，导致获客…',
                    link: '/cases/case02'
                },
                {
                    imgPath: require('@/assets/images/case/list/img03.jpg'),
                    title: 'APP/小程序监测',
                    desc: '该互联网应用监测公司，通过SDK或深入调研的模式采集样本，进行互联网应用（小程序、app等）活…',
                    link: '/cases/case03'
                },
                {
                    imgPath: require('@/assets/images/case/list/img04.jpg'),
                    title: '广告素材及营销漏斗监测',
                    desc: '某广告监测平台，过往通过虚拟机或SDK获得广告素材，存在素材收集不全，广告曝光、点击、转化数…',
                    link: '/cases/case04'
                },
                {
                    imgPath: require('@/assets/images/case/list/img05.jpg'),
                    title: '淘宝电商数据监测应用',
                    desc: '某淘宝茶叶天猫旗舰店产品市场分析与营销，只能通过平台获取自身产品的浏览量、点击量等常规行为…',
                    link: '/cases/case05'
                },
                {
                    imgPath: require('@/assets/images/case/list/img06.jpg'),
                    title: '自媒体KOL监测',
                    desc: '广告主通过自媒体KOL进行广告投放、市场营销。随着流量越来越贵，广告主投入成本越来越高；此外…',
                    link: '/cases/case06'
                },
                {
                    imgPath: require('@/assets/images/case/list/img07.jpg'),
                    title: '佛山大数据分析平台',
                    desc: '进入DT时代，传统经分系统架构已无法满足拓展数字化服务、数字经济转型以及大数据变现战略布局…',
                    link: '/cases/case07'
                },
                {
                    imgPath: require('@/assets/images/case/list/img08.jpg'),
                    title: '动态应用防护项目',
                    desc: '我司为某省运营商电子渠道前端WEB应用提供了一套RAS动态应用防护系统， 以“动态令牌”、“动态…',
                    link: '/cases/case08'
                },
                {
                    imgPath: require('@/assets/images/case/list/img09.jpg'),
                    title: '性能容量管控平台',
                    desc: '随着业务的快速发展，业务支撑系统规模的不断扩大，承载业务种类繁杂，业务量巨大。为了确保…',
                    link: '/cases/case09'
                },
                {
                    imgPath: require('@/assets/images/case/list/img10.jpg'),
                    title: '数据库备份项目',
                    desc: '我司为某省运营商提供的数据库备份集中管理系统是一套专业的数据库数据备份及恢复系统，实现了客…',
                    link: '/cases/case10'
                },
                {
                    imgPath: require('@/assets/images/case/list/img14.jpg'),
                    title: '医院危急机上报系统',
                    desc: '本项目整合LIS、惠乔检系统，HIS系统共同完成所有功能模块。 ',
                    link: '/cases/case14'
                },
                {
                    imgPath: require('@/assets/images/case/list/img15.jpg'),
                    title: '广东移动区块链项目',
                    desc: '通过对食品安全溯源的应用，建立一个农产品安全生产可追溯的信息系统。提取农产品的生产、加工、…',
                    link: '/cases/case15'
                }
            ]
        };
    },
    methods: {
        loadMore() {
            this.showAll = true;
        },
        navSwitch(index, type) {
            this.navIndex = index;
            this.$router.push({
                query: {
                    type: type
                }
            });
            switch (this.navIndex) {
                case 0:
                    this.showlist = this.list;
                    break;
                case 1:
                    this.showlist = this.list.slice(0, 6);
                    break;
                case 2:
                    this.showlist = this.list.slice(6, 10);
                    break;
                case 3:
                    this.showlist = this.list.slice(10, 11);
                    break;
                case 4:
                    this.showlist = this.list.slice(11, 12);
                    break;
                default:
                    this.showlist = this.list;
                    break;
            }
        }
    }
};
</script>

<style></style>
