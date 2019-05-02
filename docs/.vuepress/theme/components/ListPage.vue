<template>
    <main class="page">
        <slot name="top" />

        <div class="content default">
            <h1>{{title}}</h1>
            <div
                class="categories"
                v-if="isCategory"
            >
                <Category @categoryItem='categoryData' />
            </div>
            <div
                class="tags"
                v-if="isTag"
            >
                <Tags @tagsItem='tagData' />
            </div>
            <div
                class="list"
                v-if="isCategory"
            >
                <el-card
                    v-for='(item, index) in list'
                    :key='index'
                    class="mb10"
                >
                    <article>
                        <header>
                            <h2 class="m0">
                                <router-link :to="item.path">
                                    {{ item.title }}
                                </router-link>
                            </h2>
                        </header>

                        <div>
                            <span>
                                <i class="el-icon-menu"></i>
                                <span class="category">
                                    {{item.frontmatter.categories[0]}}
                                </span>
                            </span>

                            <span>
                                <i class="el-icon-menu"></i>
                                <span
                                    v-for='(tag, i) in item.frontmatter.tags '
                                    :key='i'
                                    class="tag"
                                >
                                    {{tag}}
                                </span>
                            </span>
                            <span
                                :id="item.path"
                                class="leancloud-visitors"
                                data-flag-title="Your Article Title"
                            >
                                <em class="post-meta-item-text">阅读量</em>
                                <i class="leancloud-visitors-count">0</i>；
                            </span>
                            <span style="float:right;width:120px">
                                <i class="el-icon-menu"></i>
                                <span class="category">
                                    {{item.frontmatter.date || '2019/05/55'}}
                                </span>
                            </span>

                        </div>
                    </article>
                </el-card>
            </div>
            <div
                class="list"
                v-if="isTag"
            >
                <ul>
                    <li v-for='(item, index) in list' :key='index'>
                         <article

                    >
                        <header>
                            <h2 class="mb5 dashedBox">
                                <router-link :to="item.path">
                                    {{ item.title }}
                                </router-link>
                            </h2>
                        </header>

                    </article>

                    </li>
                </ul>
                <!-- <div class="tagList">
                    <article
                        v-for='(item, index) in list'
                        :key='index'
                    >
                        <header>
                            <h2 class="mb5 dashedBox">
                                <router-link :to="item.path">
                                    {{ item.title }}
                                </router-link>
                            </h2>
                        </header>

                    </article>
                </div> -->
            </div>
        </div>
        <Content />
        <div v-show="false">
            <Valine />
        </div>
        <slot name="bottom" />
    </main>
</template>

<script>
import { resolvePage, outboundRE, endingSlashRE } from '../util'
import Category from '@theme/components/Category.vue'
import Tags from '@theme/components/Tags.vue'
import Valine from '@theme/components/Valine.vue'

export default {
    props: ['sidebarItems'],
    data() {
        return {
            title: '文章列表',
            list: []
        }
    },
    created() {
        this.initList()
    },
    components: {
        Tags,
        Category,
        Valine
    },
    watch: {
        $route(to, from) {
            if (to.path !== from.path) {
                this.initList()
            }
        }
    },
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
        tags() {
            return this.$tags._metaMap
        },
        isTag() {
            return this.$frontmatter.isTag
        },
        isCategory() {
            return this.$frontmatter.isCategory
        }
    },

    methods: {
        initList() {
            if (this.isCategory) {
                let arr = []
                for (const key in this.categories) {
                    if (this.categories.hasOwnProperty(key)) {
                        const { posts } = this.categories[key]
                        arr = arr.concat(posts)
                    }
                }
                console.log(arr)

                this.list = arr
            } else {
                this.list = []
            }
        },
        categoryData(type, data) {
            if (type === 'all') {
                this.initList()
            } else {
                this.title = type + '文章列表'
                this.list = data.posts
            }
        },
        tagData(type, data) {
            this.title = type + '文章列表'
            this.list = data.posts
        }
    }
}
</script>

<style lang="stylus">
.page {
    padding-bottom: 2rem;
    display: block;
}

.mb10 {
    margin-bottom: 10px;
}

.tag {
    padding: 3px 5px;
    margin-bottom: 5px;
    border: 1px solid #000;
}

.list {
    padding: 20px 0;
}
.tagList{
    border-left 1px solid #ccc
}
.category {
    padding: 3px 5px;
    margin-bottom: 5px;
    margin-right: 10px;
    border: 1px solid #000;
}

.m0 {
    margin: 0;
}

.mb5 {
    margin-bottom: 5px;
}

.dashedBox {
    border: 2px dashed #ccc;
    border-radius: 4px;
}
</style>
