<template>
    <div class="error-page">
        <v-nav :show="show"></v-nav>
        <div class="expression">o(╥﹏╥)o</div>
        <div class="error_text">404</div>
        <div class="text">页面找不到了</div>
        <v-footer></v-footer>
    </div>
</template>

<script>
import vNav from '@/components/vNav.vue';
import vFooter from '@/components/vFooter.vue';
export default {
    components: {
        vNav,
        vFooter
    },
    data() {
        return {
            show: false
        };
    }
};
</script>

<style lang="less">
.error-page {
    color: #000;
    text-align: center;
    padding-top: 100px;
    .expression {
        font-size: 60px;
    }
    .error_text {
        font-size: 60px;
        margin: 50px auto;
    }
    .text {
        font-size: 40px;
    }
    .v-nav {
        .nav-t {
            background: #ffffff;
            box-shadow: 0 1px 2px 0 rgba(222, 221, 221, 0.5);
        }
        .logo {
            background-image: url(../assets/images/nav/header_logo.png);
        }
        .icon-fold {
            background-image: url(../assets/images/nav/header_icon01.png);
        }
    }
    .v-footer {
        width: 100vw;
        position: fixed;
        left: 0;
        bottom: 0;
    }
}
</style>
