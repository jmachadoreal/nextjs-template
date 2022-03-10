import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'

import { Box, Heading } from '@chakra-ui/react'

import seo from '@config/seo'

const Home: NextPage = () => {
  return (
    <Box>
      <NextSeo {...seo} title="Homepage" />
      <Heading>Homepage</Heading>
    </Box>
  )
}

export default Home
