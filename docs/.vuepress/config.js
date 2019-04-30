module.exports = {
  title: '枫仁苑',
  description: '永远不要只满足于世界的表象，要敢于探寻未知的可能。',
  // base: '/blog', // 这是部署到github相关的配置 下面会讲
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.ico' }] // 增加一个自定义的 favicon(网页标签的图标)
  ],
  plugins: [
    '@vuepress/back-to-top', // 返回顶部
    [
      '@vuepress/google-analytics',
      {
        ga: '' // UA-00000000-0 // 谷歌ga
      }
    ],
    '@vuepress/pagination', // 分页
    '@vuepress/blog',
    '@vuepress/medium-zoom',
    '@vuepress/last-updated'
  ],
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  
  themeConfig: {
    displayAllHeaders: true, // 默认值：false
    activeHeaderLinks: false, // 默认值：true
    logo:'/img/logo.gif',
    nav: [
      { text: 'Home', link: '/' ,icon:'el-icon-eleme'},
      { text: 'Article', link: '/article/',icon:'el-icon-eleme' },
      { text: 'Github', link: 'https://google.com' }
    ]
  },
  sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
  lastUpdated: '上次更新' // 文档更新时间：每个文件git最后提交的时间
}
