<template>
    <div>
        <nuxt />
        <div v-show="show" @click="scrollTop" class="back-top-btn"></div>
    </div>
</template>
<script>
import URL from '~/plugins/url';
export default {
    name: 'default02',

    components: {},

    head() {
        return {
            title: this.$store.state.webInfo.website_name,
            link: [
                {
                    rel: 'shortcut icon',
                    // type: 'image/x-icon',
                    href: this.$store.state.webInfo.website_icon
                }
            ]
        };
    },

    created() {
        let that = this;
        this.$admin_base(
            [this.$get(URL.getWebInfo)],
            [
                function(res) {
                    that.$store.commit('SET_WEBINFO', res.data);
                }
            ]
        );
    },

    mounted() {
        let height =  window.screen.height - 200;
        document.title = height
        window.addEventListener('scroll', () => {
            if (document.documentElement.scrollTop) {
                this.show = document.documentElement.scrollTop > height ? true : false;
            } else if (document.body.scrollTop) {
                this.show = document.body.scrollTop > height ? true : false;
            } 
        });
        window.scroll();
    },

    data() {
        return {
            show: false
        };
    },

    computed: {},

    methods: {
        scrollTop() {
            this.show = false;
            window.scroll(0, 0);
        }
    }
};
</script>

<style></style>
