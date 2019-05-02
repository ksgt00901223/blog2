<!--  -->
<template>
    <div
        class='Category'
        id='Category'
    >
        <div>
            <span>
                分类：
            </span>
            <span>
                <el-button
                    type="text"
                    class="categoryItem"
                    :style="{color:randomColor()}"
                    @click="$emit('categoryItem','all',{})"
                >全部</el-button>
                <el-divider direction="vertical"></el-divider>
            </span>
            <span
                v-for='(value,key, index) of categories '
                :key='key'
                class="categoryItem"
            >
                <el-button
                    type="text"
                    :style="{'color':randomColor()}"
                    @click="$emit('categoryItem',key,value)"
                >{{key}}</el-button>
                <el-divider direction="vertical"></el-divider>
            </span>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
        return {
            icon: []
        }
    },
    components: {},
    computed: {
        lastUpdated() {
            return this.$page.lastUpdated
        },

        lastUpdatedText() {
            if (typeof this.$themeLocaleConfig.lastUpdated === 'string') {
                return this.$themeLocaleConfig.lastUpdated
            }
            if (typeof this.$site.themeConfig.lastUpdated === 'string') {
                return this.$site.themeConfig.lastUpdated
            }
            return 'Last Updated'
        },
        categories() {
            return this.$categories._metaMap
        },
        colors() {
            return this.$themeConfig.colors
        }
    },

    methods: {
        randomNum() {
            return Math.floor(Math.random() * this.colors.length)
        },
        randomColor() {
            return this.colors[this.randomNum()]
        }
    }
}
</script>

<style scoped lang="stylus">
#Category {
    .categoryItem {
        min-width: 50px;
    }
}
</style>
