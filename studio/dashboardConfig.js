export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5f6bbab49e294b3fc875ca74',
                  title: 'Sanity Studio',
                  name: 'cigna-landing-studio',
                  apiId: '60740a35-db30-4fee-8c0d-1bdbb8b03af5'
                },
                {
                  buildHookId: '5f6bbab4ec0e6c46c19cccf5',
                  title: 'Landing pages Website',
                  name: 'cigna-landing',
                  apiId: '8598b170-e645-4e97-95c6-273618a7d0a6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pschramm/cigna-landing',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://cigna-landing.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
