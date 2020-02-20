<template>
    <div class="v-sidebar" :class="{ spread: spread }">
        <div class="sidebar-icon" @click="spread = !spread"></div>
        <ul class="sidebar-menu">
            <li class="sidebar-title">分类</li>
            <nuxt-link :to="item.link" class="sidebar-item" :class="{ 'sidebar-item-active': currentIndex == index }" tag="li" v-for="(item, index) in sideList" :key="index">
                {{ item.title }}
            </nuxt-link>
        </ul>
    </div>
</template>

<script>
export default {
    created() {
        this.currentIndex = this.$route.params.id * 1 - 1;
    },
    data() {
        return {
            currentIndex: 0,
            spread: false,
            sideList: [
                {
                    title: '聚客易 G-EASY',
                    link: '/products/1'
                },
                {
                    title: '大数据引擎',
                    link: '/products/2'
                },
                // {
                //     title: '大数据应用',
                //     link: '/products/3'
                // },
                {
                    title: '数据安全',
                    link: '/products/3'
                }
            ]
        };
    },
    methods: {}
};
</script>

<style lang="less" scoped>
.v-sidebar {
    width: calc(~'3.4rem + 1px');
    height: 3.4rem;
    position: fixed;
    top: 7rem;
    right: 1.6rem;
    z-index: 999;
    background-color: #001631;
    &.spread {
        .sidebar-icon {
            border-top-color: transparent;
            border-right-color: transparent;
            background: url(../assets/images/product/icon01.png) center center/2rem 2rem no-repeat;
        }
        .sidebar-menu {
            opacity: 1;
            transform: scaleY(1);
            -webkit-transition: all 0.5s;
        }
    }
}
.sidebar-icon {
    width: 3.4rem;
    height: 3.4rem;
    background: url(../assets/images/product/icon02.png) center center/2rem 2rem no-repeat;
    // background-size: 2rem 2rem;
    position: absolute;
    top: -0px;
    right: -0px;
    z-index: 999;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 0.4rem;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
}
.sidebar-menu {
    opacity: 0;
    position: absolute;
    top: 0px;
    right: -0px;
    z-index: 998;
    padding: 0 1.2rem;
    min-width: 12rem;
    font-size: 1.3rem;
    color: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 0.4rem;
    background-color: #001631;
    transform: scaleY(0);
    -webkit-transform: scaleY(0);
    transform-origin: 50% 0;
    -webkit-transform-origin: 50% 0;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
    .sidebar-title {
        line-height: 1;
        padding: 2rem 0 0.6rem;
    }
    .sidebar-item {
        line-height: 4rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        &:nth-last-child {
            border: 0;
        }
        &.sidebar-item-active {
            font-weight: 700;
        }
    }
}
</style>
