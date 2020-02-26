<template>
    <div class="product-page">
        <v-nav :change="true"></v-nav>
        <v-sidebar></v-sidebar>
        <no-ssr>
            <swiper class="product-swiper" :options="swiperOption" ref="productSwiper">
                <!-- 正常 -->
                <swiper-slide v-for="(item, index) in list[currentIndex]" class="product-swiper-item product-swiper-item01" :class="{ active: watchMaxIndex >= index }">
                    <div class="item-inner">
                        <div class="inner-top" :class="{ 'first-screen-top': currentIndex == 0 && index == 0 }">
                            <h3 class="inner-tit">{{ item.title }}</h3>
                            <!-- 互联网基础数据平台第一屏隐藏 -->
                            <div v-if="!(currentIndex == 0 && index == 0)" class="inner-desc" v-html="item.txt"></div>
                        </div>
                        <div class="inner-bottom">
                            <!-- 互联网基础数据平台第一屏显示 -->
                            <div v-if="currentIndex == 0 && index == 0" class="platform-box">
                                <ul class="platform-ul">
                                    <li v-for="(innerItem, innerIndex) in innerList" class="platform-item" :class="{ spread: innerItem.show }">
                                        <div @click="innerItemToggle(innerIndex)" class="platform-item-outer flex flex-jcsb flex-ver">
                                            <div class="flex flex-ver">
                                                <img class="platform-item-icon" :src="innerItem.iconPath" alt="" />
                                                <p>{{ innerItem.title }}</p>
                                            </div>
                                            <img class="arrow-icon" src="@/assets/images/product/up.png" alt="" />
                                        </div>
                                        <div v-show="innerItem.show" class="platform-item-inner platform-item-txt">{{ innerItem.text }}</div>
                                    </li>
                                </ul>

                                <img class="platform-bg" src="@/assets/images/product/bg.png" alt="" />
                            </div>
                            <!-- 互联网基础数据平台第一屏隐藏 -->
                            <img v-else class="product-img" :src="item.path" alt="" />
                        </div>
                    </div>
                </swiper-slide>
                <div class="swiper-pagination" id="swiperP" slot="pagination"></div>
            </swiper>
        </no-ssr>
        <p class="copyright">{{ webInfo.website_name }}{{ webInfo.website_copyright }}{{ webInfo.website_icp_numb }}</p>
    </div>
</template>
<script>
import URL from '~/plugins/url';
import vNav from '@/components/vNav.vue';
import vSidebar from '@/components/vSidebar.vue';
export default {
    components: {
        vNav,
        vSidebar
    },
    computed: {
        webInfo() {
            return this.$store.state.webInfo;
        }
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
        this.currentIndex = 1;
        this.$admin_base(
            [
                this.$get(URL.getSEOInfo, {
                    // name: 'products'+this.$route.params.id * 1,
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
    data() {
        let that = this;
        return {
            SEOInfo: {},
            // 当前轮播的下标(一级目录)
            currentIndex: 0,
            // 浏览过的第几屏的“最高”下标
            watchMaxIndex: -1,
            swiperOption: {
                // test
                initialSlide: 0,
                // product
                direction: 'vertical',
                pagination: {
                    el: '#swiperP',
                    clickable: true
                },

                on: {
                    init: function() {
                        setTimeout(() => {
                            that.watchMaxIndex = 0;
                        }, 500);
                    },
                    slideChangeTransitionEnd: function() {
                        that.watchMaxIndex = this.activeIndex > that.watchMaxIndex ? this.activeIndex : that.watchMaxIndex;
                    }
                }
            },
            innerList: [
                {
                    title: '小程序监测(基础数据)',
                    iconPath: require('@/assets/images/product/platform-icon01.png'),
                    text: '基于相应规则，对指定地区用户群体的小程序进行DAU、MAU统计，为用户的数据产品提供基础数据。',
                    show: true
                },
                {
                    title: 'APP监测(基础数据)',
                    iconPath: require('@/assets/images/product/platform-icon02.png'),
                    text: '基于相应规则，对指定地区用户群体的APP进行DAU、MAU统计，为用户的数据产品提供基础数据。',
                    show: false
                },
                {
                    title: '短视频监测',
                    iconPath: require('@/assets/images/product/platform-icon03.png'),
                    text: '对短视频平台上的KOL真实热度进行监测，给出粉丝人群画像。',
                    show: false
                },
                {
                    title: '广告监测',
                    iconPath: require('@/assets/images/product/platform-icon04.png'),
                    text: '基于用户的浏览轨迹，从素材页到落地页到下载或APP打开，监测线上广告投放的整个转化流程。',
                    show: false
                },
                {
                    title: '舆情监测',
                    iconPath: require('@/assets/images/product/platform-icon05.png'),
                    text: '基于强大的大数据挖掘功能，对互联网上热点话题进行监视，为用户提供舆情覆盖的准确人数和人群画像。',
                    show: false
                },
                {
                    title: '栅格人流监测',
                    iconPath: require('@/assets/images/product/platform-icon06.png'),
                    text: '基于经纬度、电子围栏进行人流统计、人群画像，并结合POI进行智能选址。',
                    show: false
                }
            ],
            list: [
                // 聚客易 G-EASY
                [
                    {
                        title: '互联网基础数据平台',
                        txt: '暂无内容',
                        path: ''
                    },
                    {
                        title: '大数据智慧交通',
                        txt:
                            '大数据刻画城市交通情况，洞察工作人群的分布和出行规律大数据智慧交通，为缓解城市交通拥堵和城市建设选址规划，提供基于数据证据的综合决策，实现交通和生活的和谐，提高城市的宜居性。',
                        path: require('@/assets/images/product/img05.png')
                    },
                    {
                        title: '大数据位置商业应用',
                        txt:
                            '为商业推广、目标客户筛选、市场运营等决策提供依据大数据位置商业应用是基于用户准实时位置相关大数据基础上，结合实际的地理区域特性，为客户提供人流特征分析、商圈特征分析、选址综合分析以及交通规律分析；让客户从更综合、更具体、更实时的分析数据中更省时省力的做出最优选择。',
                        path: require('@/assets/images/product/img06.png')
                    },
                    {
                        title: '食品安全追溯系统(区块链)',
                        txt:
                            '区块链技术打造食品安全系统，通过构建养殖场、屠宰加工、物流商、零售商四个参与方的区块链商业网络平台，实现从原料加工再到运输销售各个环节之间的可追溯性。',
                        path: require('@/assets/images/product/img07.png')
                    }
                ],
                // 大数据引擎
                [
                    {
                        title: '和元达大数据分析平台',
                        txt:
                            '基于低成本、低门槛实现信息化，聚焦应用开发、提高效率和元达大数据分析平台分为SaaS层、PaaS层 和 IaaS层，适用于不同场景的大数据应用服务，同时可根据不同需求提供对应的大数据解决方案。',
                        path: require('@/assets/images/product/img02.png')
                    },
                    {
                        title: '和元达数据生产管理平台',
                        txt:
                            '强管控、全过程、可视化和元达数据生产管理平台为企业构建知行合一的全过程业务化可视、可管、可控的指标系统，以良好的可管理性、可维护性、可扩展性的IT 管控系统来实现持续的生产数据管控。通过数据对象将元数据、数据质量和数据处理三者进行融合。',
                        path: require('@/assets/images/product/img03.png')
                    },
                    {
                        title: '智慧容量专家',
                        txt:
                            '精准、快速地为您提供系统容量解决方案以实时大数据处理、AI技术为基础，由轻量化、低侵入、松耦合的IT主动监控、应用性能管理等模块为支撑，通过数据管理、性能管控和容量评估三大产品平台，从业务容量、服务容量和IT部件容量三个维度进行综合分析评估，通过构建性能容量模型，实现智能化运维以及对系统容量的有效预测、评估与跟踪，充分挖掘大数据的价值。',
                        path: require('@/assets/images/product/img04.png')
                    },
                    {
                        title: 'DMP平台',
                        txt:
                            'DMP平台基于精准客户画像获取目标客户、最佳接触时间、最佳接触渠道等信息，运用AI及Look-alike技术进行用户量级扩展，并通过外呼、短信、 线上广告投放等多种渠道，为客户实现精准营销或者市场调研等。',
                        path: require('@/assets/images/product/img01.png')
                    }
                ],
                // 数据安全
                [
                    {
                        title: '和元达数据管理一体机TDM',
                        txt:
                            '高效可靠的备份方式、分钟级别的数据恢复，和元达数据管理一体机（TDM）搭建了备份云体系，集合了数据备份、数据容灾、数据高可用等功能的企业级数据安全保护平台，支持多租户的共享使用，以及本地和云端数据的协同，保护企业的操作系统、数据库、应用、文件、虚拟机等数据，在遭遇数据灾难时，能完整、准确、快速地还原数据，最大化降低企业的经济损失。',
                        path: require('@/assets/images/product/img08.png')
                    },
                    {
                        title: '机房统一监控管理系统TUMS',
                        txt:
                            '和元达带外监控系统（TVI Unified Monitoring System） 可基于现有网管系统进行快速部署,提供详细的机房空间管理、能耗管理以及全自动真实物理设备的资产管理，使资产做到有据可查，有数可依。和元达带外监控系统能够监测用户机房设备的物理状态，解决人工巡检不及时问题；能够自动判断硬件故障的源头，缩短故障排除时间，提高故障处理效率。并且提供了全数字KVM解决方案，能够提供统一的远程控制管理，解决传统KVM产品不能解决的鼠标重影问题。',
                        path: require('@/assets/images/product/img09.png')
                    }
                ]
            ],
            copyright: '和元达信息科技有限公司 Copyright © 2006-2015.TechViewInfo Co.Ltd.All rights reserved.粤ICP备16003606号-2'
        };
    },
    methods: {
        innerItemToggle(index) {
            console.log(index);
            let innerList = this.innerList;
            for (let i = 0; i < this.innerList.length; i++) {
                this.innerList[i].show = false;
            }
            this.innerList[index].show = true;
        }
    }
};
</script>

<style></style>
