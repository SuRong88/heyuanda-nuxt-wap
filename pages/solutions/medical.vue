<template>
    <div class="solution-page solution-page07">
        <v-nav :show="show"></v-nav>
        <main>
            <div class="solution-banner flex flex-center">
                <h2 class="banner-title">{{ bannerTitle }}</h2>
            </div>
            <div class="content">
                <nuxt-link to="/solutions" tag="button" class="btn-back-list">
                    <img class="icon-img" src="@/assets/images/icons/back-icon.png" alt="" />
                    返回列表
                </nuxt-link>
                <section class="sec01">
                    <h2 class="con-tit">方案概述</h2>
                    <p class="con-txt">基于和元达大数据分析平台，通过建立信息化、标准化、智能化的决策支持应用系统，方便医疗管理机构及医疗服务机构进行卫生管理和决策指导。</p>
                    <img class="con-img img01" src="@/assets/images/rest/img01.png" alt="" />
                </section>
                <section class="sec02">
                    <h2 class="con-tit">方案内容</h2>
                    <p class="con-txt">
                        针对医疗行业大数据应用特点，采用多项创新的结构化与非结构化数据一体化处理、并行处理、SQL/MapReduce统一执行引擎、分布式容错及自动故障处理、复杂数据类型关联分析、多IP通路负载均衡、处理任务断点执行、动态扩展等技术，从服务器、网络、操作系统到软件层逐层优化，搭建高性能、高可靠、易扩展、易使用的统一管理系统。通过医疗收入、患者负担、工作负荷、工作效率、疾病监控等多个主题模块，有效的反映医疗管理机构或服务机构的整体运营、管理等情况，强化医卫管理，优化资源配置、控制不合理因素。
                    </p>
                    <div class="screen-box">
                        <h3 class="screen-tit">大数据支撑平台</h3>
                        <p class="screen-desc">大数据支撑平台包括基础设施层、数据存储层、数据处理层、应用层以及管理层。</p>
                        <ul class="nav-box flex flex-jcsb">
                            <li @click="activeIndex = 0" class="nav-i flex-1 text-l" :class="{ active: activeIndex == 0 }">基础设施层</li>
                            <li @click="activeIndex = 1" class="nav-i flex-1" :class="{ active: activeIndex == 1 }">数据存储层</li>
                            <li @click="activeIndex = 2" class="nav-i flex-1" :class="{ active: activeIndex == 2 }">数据处理层</li>
                            <li @click="activeIndex = 3" class="nav-i flex-1 text-r" :class="{ active: activeIndex == 3 }">数据应用层</li>
                        </ul>
                        <div class="screen">
                            <img class="screen-img" :src="list[activeIndex].path" alt="" />
                            <div class="txt-box">
                                <p class="tit">{{ list[activeIndex].tit }}</p>
                                <p class="txt">{{ list[activeIndex].desc }}</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="sec03">
                    <h2 class="con-tit">方案优势</h2>
                    <ul class="con-ul">
                        <li class="con-li">
                            <img class="li-icon" src="@/assets/images/rest/icon01.png" alt="" />
                            <p class="li-txt">完善的大数据支撑平台，高效整合繁杂数据源。</p>
                        </li>
                        <li class="con-li">
                            <img class="li-icon" src="@/assets/images/rest/icon02.png" alt="" />
                            <p class="li-txt">开放式医疗数据访问接口，实现数据共享。</p>
                        </li>
                        <li class="con-li">
                            <img class="li-icon" src="@/assets/images/rest/icon03.png" alt="" />
                            <p class="li-txt">丰富的主题应用模块，满足各种需求。</p>
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
                    // name: 'solutions10',
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
            bannerTitle: '医疗',
            activeIndex: 0,
            list: [
                {
                    path: require('@/assets/images/rest/medical/img01.png'),
                    tit: '基础设施层',
                    desc:
                        '基础设施层由专为大数据定制的服务器及网络构成的集群组成，是构建大数据应用的硬件平台。数据源所涉及的对象包括医疗机构、社康、门诊，以及区公卫机构，医疗机构的HIS、LIS、PACS、CIS；社康HIS、CIS、CHSS以及公卫疾控系统、传染病上传系统等数据构成总体架构最基本数据源，数据源通过医疗机构、社康、公卫等的前置机进行采集，再通过前置机内置路由网关传输到数据平台，数据源层完成了各个分散系统的数据采集及传输。'
                },
                {
                    path: require('@/assets/images/rest/medical/img02.png'),
                    tit: '数据存储层',
                    desc: '数据存储层则基于并行数据库系统以及Hadoop发行版及标准数据库实现。用来存储从每个医疗数据源收集来的海量结构化和非结构化数据。'
                },
                {
                    path: require('@/assets/images/rest/medical/img03.png'),
                    tit: '数据处理层',
                    desc:
                        '数据处理层对数据进行处理，其处理内容包含：数据清洗、数据校验、数据转换。处理对象包含标准数据及非标准数据，处理的数据结构包括非结构化数据、半结构化数据及结构化数据（如非结构化数据的简单分析--过滤和统计、基于计算模型进行结构化数据和非结构化数据的统一关联和统计处理、复杂的分析和挖掘以及复杂问题的近似模糊求解等操作）。被处理的数据最终转化成符合医疗卫生信息化标准的卫生综合数据，标准数经过ETL后存入医疗中心数据仓库，为大数据应用做数据准备。'
                },
                {
                    path: require('@/assets/images/rest/medical/img04.png'),
                    tit: '数据应用层',
                    desc:
                        '数据应用层为大数据应用平台提供类型丰富的访问接口，包括Search API、Pig、Hive QL以及专为用户设计的SJDBC（类JDBC）和UDF（用户自定义函数）接口，方便用户的使用。'
                }
            ]
        };
    }
};
</script>

<style></style>
