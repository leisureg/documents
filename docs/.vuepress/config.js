module.exports = {
    title: '土豆丸子',
    description: '爱吃丸子的土豆',
    locales: {
        '/': {
          lang: 'zh-CN'
        }
      },
    head: [
        ['link', { rel: 'icon', href: '/logo.ico'}]
    ],
    base: '/documents/',
    themeConfig: {
        lastUpdated: '上次更新',
        repo: 'leisureg/documents',
        editLinks: true,
        editLinkText: '编辑此页面',
        docsDir: 'docs',
        serviceWorker: {
            updatePopup: true // Boolean | Object, 默认值是 undefined.
            // 如果设置为 true, 默认的文本配置将是: 
            // updatePopup: { 
            //    message: "New content is available.", 
            //    buttonText: "Refresh" 
            // }
          },
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/css/' },
          {
            text: 'Languages',
            items: [
              { text: 'Chinese', link: '/language/chinese' },
              { text: 'Japanese', link: '/language/japanese' },
              { text: '亚洲', items: [
                { text: 'Chinese', link: '/language/chinese' },
                { text: 'Japanese', link: '/language/japanese' },
              ]},
            ]
          },
          { text: 'External', link: 'https://google.com' },
        ],
        //sidebar: 'auto'
        // sidebar: [
        //     '/',
        //     '/css/',
        //     '/about/test',
        //     ['/java/', 'java']
        //   ],
        // sidebar: [
        //     {
        //       title: 'Group 1',
        //       path: '/css/',
        //       collapsable: true,   // 是否折叠
        //       children: [
        //         '.',
        //         '/css/',
        //         '/css/css1'
        //       ]
        //     },
        //     {
        //       title: 'Group 2',
        //       children: [ /* ... */ ]
        //     }
        //   ],
        sidebar: {
            '/css/': [
              '',     /* /foo/ */
              'css1',  /* /foo/one.html */
              'css2'   /* /foo/two.html */
            ],
      
            '/java/': [
              '',      /* /bar/ */
              'java1', /* /bar/three.html */
              'java2'   /* /bar/four.html */
            ],
      
            // fallback
            '/': [
              '',        /* / */
              '/about/', /* /contact.html */
              '/about/test'    /* /about.html */
            ]
        },
        sidebarDepth: 2,
        displayAllHeaders: false,
        activeHeaderLinks: false
     }
}