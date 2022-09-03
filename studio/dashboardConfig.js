export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '631353161693a91687058e6c',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-1-studio-xumzzmxr',
                  apiId: '972c4ca5-3545-4bc8-8a64-997921d2def0'
                },
                {
                  buildHookId: '6313531767cd5716f10f8004',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-1-web-cn1kxrf6',
                  apiId: '5af411ea-ce2a-48ce-93cb-69d192b39f46'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cartoonistarif/sanity-kitchen-sink1',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-1-web-cn1kxrf6.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
