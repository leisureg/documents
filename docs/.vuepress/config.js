module.exports = {
    title: '土豆丸子',
    description: '你好我的文档',

    themeConfig: {
        lastUpdated: '上次更新',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
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