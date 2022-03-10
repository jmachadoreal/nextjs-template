import type { NextSeoProps } from 'next-seo'

import Env from '@util/Env'

const seo: NextSeoProps = {
  titleTemplate: `%s | ${Env.public('SITE_NAME')}`,
  additionalMetaTags: [
    {
      property: 'author',
      content: 'João Pedro Machado (@eujoaopedromachado)'
    },
    {
      property: 'theme-color',
      content: '#000000'
    },
    {
      property: 'apple-mobile-web-app-capable',
      content: 'yes'
    },
    {
      property: 'apple-mobile-web-app-status-bar-style',
      content: 'black-translucent'
    }
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/icons/favicon.png'
    },
    {
      rel: 'manifest',
      href: '/manifest.json'
    }
  ]
}

export default seo
