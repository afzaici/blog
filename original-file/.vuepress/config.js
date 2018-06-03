module.exports = {
    dest: 'docs',
    base:"/blog/",
    locales: {
        '/': {
            lang: 'en-US',
            title: '邓世杰的博客',
            description: 'web 前端开发工程师'
        }
    },
    head: [
        ['link', {rel: 'icon', href: `/logo.png`}],
        ['link', {rel: 'manifest', href: '/manifest.json'}],
        ['meta', {name: 'theme-color', content: '#3eaf7c'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
        ['link', {rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png`}],
        ['link', {rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c'}],
        ['meta', {name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png'}],
        ['meta', {name: 'msapplication-TileColor', content: '#000000'}]
    ],
    serviceWorker: true,
    themeConfig: {
        repo: 'name-jaiden/blog',
        editLinks: true,
        docsDir: 'original-file',
        locales: {
            '/': {
                nav: [
                    {
                        text: 'JavaScript',
                        link: '/JavaScript/',
                    },
                    {
                        text: 'Node.js',
                        link: '/Nodejs/'
                    },
                    {
                        text: 'Webpack',
                        link: '/Webpack/'
                    }
                ],
                sidebar: {
                    '/JavaScript/': genSidebarConfig('JavaScript')
                }
            }
        }
    }
}

function genSidebarConfig(title) {
    return [
        {
            title,
            collapsable: false,
            children: [
                '',
                'syntax',
                'built-in-object',
                'environment',
                'document-object-model',
                'browser-object-model',
                'design-pattern',
                'data-structure'
            ]
        }
    ]
}
