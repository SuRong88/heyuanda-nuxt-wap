<template>
    <div class="solution-page solution-page05">
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
                    <p class="con-txt">针对大数据平台提供高效、稳定、快速的备份恢复解决方案。</p>
                    <ul class="con-ul">
                        <li class="con-li">
                            <img class="li-icon" src="@/assets/images/solution/protect/icon01.png" alt="" />
                            <p class="li-tit">Hbase列存储</p>
                            <p class="li-txt">数据文件入列存储，最后落盘HDFS文件系统</p>
                        </li>
                        <li class="con-li">
                            <img class="li-icon" src="@/assets/images/solution/protect/icon02.png" alt="" />
                            <p class="li-tit">HIVE数据仓库</p>
                            <p class="li-txt">包含表结构与数据文件， 最终 落盘HDFS文件系统</p>
                        </li>
                        <li class="con-li">
                            <img class="li-icon" src="@/assets/images/solution/protect/icon03.png" alt="" />
                            <p class="li-tit">HDFS文件系统</p>
                            <p class="li-txt">
                                Hbase、HIVEs 及其它大数据平台的数据最终
                                <br />
                                落盘的位置
                            </p>
                        </li>
                    </ul>
                </section>
                <section class="sec02">
                    <h2 class="con-tit">方案内容</h2>
                    <p class="con-txt">
                        和元达大数据平台数据保护解决方案能够有效的针对对大数据平台上PB级的数据进行稳定的数据备份及快速的数据恢复，有效解决传统备份对大数据恢复的速度瓶颈。
                    </p>
                    <img class="con-img img01" src="@/assets/images/solution/protect/img03.png" alt="" />
                    <p class="con-img-tit">大数据平台备份架构图</p>
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
                    // name: 'solutions4',
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
            bannerTitle: '大数据平台数据保护解决方案'
        };
    }
};
</script>

<style></style>
