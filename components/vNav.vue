<template>
    <no-ssr>
        <div class="v-nav" :class="{ withBgc: show, spread: spread }">
            <div class="nav-t flex flex-jcsb flex-ver">
                <h1 class="logo-box">
                    <nuxt-link v-if="!spread && change" :style="'background-image: url(' + webInfo.website_logo_ph + ')!important;'" to="/" class="logo">
                        {{ webInfo.website_name }}
                    </nuxt-link>
                    <nuxt-link v-else :style="'background-image: url(' + webInfo.website_logo_ph_nav + ')!important;'" to="/" class="logo">{{ webInfo.website_name }}</nuxt-link>
                </h1>
                <div @click="spread = !spread" class="icon-fold"></div>
            </div>
            <ul class="nav-b nav-menu">
                <template v-for="(item, index) in navList">
                    <!-- 无子级菜单 -->
                    <li v-if="item.children && item.children.length == 0" class="nav-item">
                        <div class="nav-item-outer flex flex-jcsb flex-ver">
                            <p @click="jumpTarget(item.value, item.type, item.open)">{{ item.name }}</p>
                        </div>
                    </li>
                    <!-- 有子级菜单 -->
                    <li v-else class="nav-item" :class="{ show: item.show }" @click="menuToggle(index)">
                        <div class="nav-item-outer flex flex-jcsb flex-ver">
                            <p>{{ item.name }}</p>
                            <img class="nav-item-icon" src="@/assets/images/nav/nav_up.png" alt="" />
                        </div>
                        <dl v-show="item.show" class="nav-item-inner sub-nav-menu">
                            <dd @click="jumpTarget(subItem.value, item.type, item.open)" v-for="(subItem, subIndex) in item.children" class="sub-nav-item flex flex-ver">
                                {{ subItem.name }}
                            </dd>
                        </dl>
                    </li>
                </template>
            </ul>
        </div>
    </no-ssr>
</template>

<script>
import URL from '~/plugins/url';
export default {
    props: {
        change: {
            type: Boolean,
            default: false
        },
        // 带背景颜色
        show: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        webInfo() {
            return this.$store.state.webInfo;
        }
    },
    created() {
        let that = this;
        this.$admin_base(
            [this.$get(URL.getNavList, { client: 2 })],
            [
                res => {
                    this.navList = res.data.header;
                    this.navList.forEach((item, index) => {
                        if (item.children.length > 0) {
                            // this.$set(item, 'show', false);可以
                            this.$set(this.navList[index], 'show', false);
                        }
                    });
                }
            ]
        );
    },
    data() {
        return {
            // 导航菜单是否展开
            spread: false,
            navList: []
        };
    },
    methods: {
        // 页面跳转
        jumpTarget(link, type, open) {
            this.spread = false;
            switch (type * 1) {
                // 外链
                case 4:
                    if (open * 1 == 1) {//原页面打开
                        window.location.href = link;
                    } else {//新页面打开
                        window.open(link);
                    }
                    break;
                    // 1：首页或栏目；2：自定义页面；3：文章；
                default:
                    if (open * 1 == 1) {
                        this.$router.push({
                            path: link
                        });
                    } else {
                        // window.open(link);
                        window.open('/wap'+link);
                    }
            }
        },
        // 子级菜单toggle
        menuToggle(index) {
            this.navList[index].show = !this.navList[index].show;
        }
    }
};
</script>

<style lang="less" scoped>
.v-nav {
    width: 100%;
    height: 5.5rem;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9999;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    &.spread {
        .nav-menu {
            transform: translateY(0%);
        }

        .sub-nav-menu {
            position: relative;
            transform: scaleY(1);
        }

        .icon-fold {
            background-image: url(../assets/images/nav/header_icon02.png) !important;
        }
    }
}

.nav-t {
    padding: 0 1.6rem;
    height: 100%;
    position: relative;
    z-index: 2;
}

.logo {
    display: block;
    width: 21rem;
    height: 2.8rem;
    text-indent: -999px;
    overflow: hidden;
    background: url(../assets/images/index/hrader_logo.png) center center/contain no-repeat;
}

.icon-fold {
    width: 3.4rem;
    height: 3.4rem;
    background: url(../assets/images/index/header_nav.png) center center/contain no-repeat;
}

// 菜单
.nav-menu {
    padding: 9rem 2.5rem 4.5rem;
    position: absolute;
    z-index: 1;
    height: 100vh;
    width: 100vw;
    overflow-y: scroll;
    left: 0;
    top: 0;
    background: #ffffff;
    transform: translateY(-100%);
    transition: transform 0.5s;

    &::-webkit-scrollbar {
        width: 0 !important;
    }

    .nav-item {
        border-top: 1px solid #eaeff6;
        font-size: 1.5rem;

        &.show {
            .nav-item-icon {
                transform: rotate(180deg);
            }
        }

        &:last-child {
            border-bottom: 1px solid #eaeff6;
        }

        .nav-item-outer {
            height: 5.5rem;
            color: #222222;
        }

        .nav-item-outer {
            color: #444;
        }
    }

    .nav-item-icon {
        width: 1.2rem;
        transition: all 0.2s;
    }

    .sub-nav-menu {
        padding: 1rem 0 1.5rem;
        // transform: scaleY(0);
        transform-origin: 50% 0;
        transition: all 1.5s;
        // position: absolute;
    }

    .sub-nav-item {
        height: 4rem;
        padding-left: 2rem;
        font-size: 1.5rem;
        color: #444444;
    }
}
</style>
