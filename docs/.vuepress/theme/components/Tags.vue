<!--  -->
<template>
    <div
        class='Tags'
        id='Tags'
    >
        <div class="tagsPart">
            <span>标签：</span>
            <span
                v-for='(value,key, index) of tags '
                :key='key'
                class="tagsItem"
            >
                <el-button
                    type="text"
                    :style="{'color':randomColor()}"
                    @click="$emit('tagsItem',key,value)"

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

        tags() {
            return this.$tags._metaMap
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
#Tags {
}
</style>
