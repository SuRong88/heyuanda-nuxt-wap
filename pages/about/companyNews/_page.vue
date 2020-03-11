<template>
    <div class="about-page about-company">
        <v-nav :show="show"></v-nav>
        <main>
            <div class="about-banner"></div>
            <div class="about-content">
                <div class="about-title-box">
                    <h2 class="about-title-cn">{{ titleCn }}</h2>
                    <h2 class="about-title-en">{{ titleEn }}</h2>
                </div>
                <ul class="news-box">
                    <nuxt-link
                        tag="li"
                        :to="{
                            name: 'detail-type',
                            params: {
                                type: 'company-' + item.id
                            }
                        }"
                        class="news-item"
                        v-if="list.length > 0"
                        v-for="(item, index) in list"
                        :key="index"
                    >
                        <div class="item-img-box"><img class="item-img" :src="item.cover" alt="" /></div>
                        <div class="item-brief flex flex-start">
                            <div class="date-box">
                                <span class="month-day">
                                    <!-- {{ item.create_time.slice(0, 10).slice(5, 10) || '' }} -->
                                    {{ item.create_time | dateformat('MM-DD') }}
                                </span>
                                <span class="year">
                                    <!-- {{ item.create_time.slice(0, 10).slice(0, 4) || '' }} -->
                                    {{ item.create_time | dateformat('YYYY') }}
                                </span>
                            </div>
                            <h3 class="item-tit">{{ item.name }}</h3>
                        </div>
                    </nuxt-link>
                    <div v-if="!lastPage" class="btn-more" @click="loadMore">加载更多</div>
                </ul>
            </div>
        </main>
        <v-footer></v-footer>
    </div>
</template>

<script>
import URL from '~/plugins/url';
import vNav from '@/components/vNav.vue';
import vAbout from '@/components/aboutNav.vue';
import vFooter from '@/components/vFooter.vue';
export default {
    components: {
        vNav,
        vAbout,
        vFooter
    },
    validate({ params }) {
        // Must be a number
        return /^\d+$/.test(params.page);
    },
    data() {
        return {
            SEOInfo: {},
            list: [],
            limit: 6,
            current_page: 1,
            total_page: 0,
            lastPage: true,
            // banner导航下标
            index: 'company',
            show: false,
            // banner标题
            bannerTitleCn: '精准，轻松致胜',
            bannerTitleEn: 'Accuracy, Easy Business.',
            // 正文标题
            titleCn: '公司动态',
            titleEn: 'Company news'
        };
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
        this.current_page = this.$route.params.page * 1 || 1;
        this.getList();
        this.$admin_base(
            [
                this.$get(URL.getSEOInfo, {
                    // name: 'about4',
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
    methods: {
        loadMore() {
            this.current_page++;
            this.getList();
        },
        handleCurrentChange(page) {
            let params = JSON.parse(JSON.stringify(this.$route.params));
            params.page = page;
            this.$router.push({
                params: params
            });
        },
        getList() {
            this.$admin_base(
                [
                    this.$get(URL.getArticleList, {
                        type: 1,
                        page: this.current_page,
                        rownum: this.limit
                    })
                ],
                [
                    res => {
                        console.log('公司动态');
                        console.log(res.data);
                        // this.list = res.data.list || []
                        let oldList = this.list;
                        let newList = res.data.list || [];
                        this.list = oldList.concat(newList);
                        let pagination = res.data.pagination;
                        this.limit = pagination.rownum * 1;
                        this.current_page = pagination.current * 1;
                        this.total_page = pagination.total_page * 1;
                        this.lastPage = this.current_page == this.total_page ? true : false;
                    }
                ]
            );
        }
    }
};
</script>

<style></style>
