<template>
    <ul class="about-nav flex flex-align-center">
        <nuxt-link class="about-nav-item" :class="{ 'is-actived': index == 'profile' }" to="/about/profile" tag="li">公司简介</nuxt-link>
        <nuxt-link class="about-nav-item" :class="{ 'is-actived': index == 'direction' }" to="/about/direction" tag="li">业务方向</nuxt-link>
        <nuxt-link class="about-nav-item" :class="{ 'is-actived': index == 'honor' }" to="/about/honor" tag="li">公司荣誉</nuxt-link>
        <nuxt-link class="about-nav-item" :class="{ 'is-actived': index == 'company' }" to="/about/companyNews/1" tag="li">公司动态</nuxt-link>
        <nuxt-link class="about-nav-item" :class="{ 'is-actived': index == 'industry' }" to="/about/industryNews/1" tag="li">行业动态</nuxt-link>
        <nuxt-link class="about-nav-item" :class="{ 'is-actived': index == 'cooperation' }" to="/about/cooperation" tag="li">合作伙伴</nuxt-link>
        <nuxt-link class="about-nav-item" :class="{ 'is-actived': index == 'contact' }" to="/about/contact" tag="li">联系我们</nuxt-link>
    </ul>
</template>

<script>
export default {
    props: {
        index: {
            type: String,
            default: 'profile'
        }
    }
};
</script>

<style lang="less">
.about-nav {
    width: 100%;
    left: 0;
    bottom: 0;
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
}
.about-nav-item {
    width: 170px;
    color: #ffffff;
    font-size: 16px;
    font-weight: 700;
    line-height: 60px;
    text-align: center;
    &.is-actived {
        background: #177dff;
    }
}
</style>
