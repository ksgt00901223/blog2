<!--  -->
<template>
    <div
        class='main-wrapper h100'
        id='valine'
    >
        <div id="vcomments"></div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    computed: {
        data() {
            return this.$page.frontmatter
        }
    },
    mounted: function() {
        this.createValine()
    },

    methods: {
        createValine() {
            const Valine = require('valine')
            window.AV = require('leancloud-storage')
            const valine = new Valine({
                el: '#vcomments',
                appId: 'IltIMjuSA9K6aHmlHxTDrm9Q-gzGzoHsz',
                appKey: '88DR506nlVupskUmMEntp2y6',
                notify: false,
                verify: false,
                visitor: true,
                avatar: 'robohash',
                path: window.location.pathname,
                placeholder: '欢迎留言与我分享您的想法...'
            })
            this.valineRefresh = false
        }
    },
    watch: {
        $route(to, from) {
            if (to.path !== from.path) {
                setTimeout(() => {
                    //重新刷新valine
                    this.createValine()
                }, 300)
            }

            /**
             * TODO:
             * 1. 使用其他方法更新评论组件 或者使用其他较为好用的评论组件
             * 2. 添加categories and tag
             * 3. 更换其他主题
             */
        }
    }
}
</script>

<style scoped lang="stylus">
#valine {
}
</style>
