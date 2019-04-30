<template>
    <main class="page">
        <slot name="top"/>

        <div class="content default">
            <h1>sds</h1>
            <div class="categories">

            </div>
            <div class="tags">

            </div>
        </div>
        <Content/>
        <slot name="bottom"/>
    </main>
</template>

<script>
import { resolvePage, outboundRE, endingSlashRE } from "../util";

export default {
    props: ["sidebarItems"],

    computed: {
        lastUpdated() {
            return this.$page.lastUpdated;
        },

        lastUpdatedText() {
            if (typeof this.$themeLocaleConfig.lastUpdated === "string") {
                return this.$themeLocaleConfig.lastUpdated;
            }
            if (typeof this.$site.themeConfig.lastUpdated === "string") {
                return this.$site.themeConfig.lastUpdated;
            }
            return "Last Updated";
        },
        categories(){
            return this.categories._metaMap
        },
        tags(){
            return this.tags._metaMap
        }
    },

    methods: {

    }
};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl';

.page {
    padding-bottom: 2rem;
    display: block;
}

.page-edit {
    @extend $wrapper;
    padding-top: 1rem;
    padding-bottom: 1rem;
    overflow: auto;

    .edit-link {
        display: inline-block;

        a {
            color: lighten($textColor, 25%);
            margin-right: 0.25rem;
        }
    }

    .last-updated {
        float: right;
        font-size: 0.9em;

        .prefix {
            font-weight: 500;
            color: lighten($textColor, 25%);
        }

        .time {
            font-weight: 400;
            color: #aaa;
        }
    }
}

.page-nav {
    @extend $wrapper;
    padding-top: 1rem;
    padding-bottom: 0;

    .inner {
        min-height: 2rem;
        margin-top: 0;
        border-top: 1px solid $borderColor;
        padding-top: 1rem;
        overflow: auto; // clear float
    }

    .next {
        float: right;
    }
}

@media (max-width: $MQMobile) {
    .page-edit {
        .edit-link {
            margin-bottom: 0.5rem;
        }

        .last-updated {
            font-size: 0.8em;
            float: none;
            text-align: left;
        }
    }
}
</style>
