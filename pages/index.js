import { Box, Button, Code, Divider, Heading, Input, Link, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { Layout } from '../components/Layout/Layout'
import { Notes } from '../components/Notes/Notes'

export default function Home() {

  return (
    <Layout>
      <Head>
        <title>Chakra UI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading as={'h1'} size={'2xl'} mb={5}>
        Testing <Link color={'teal.500'} href={'https://chakra-ui.com/'}>chakra-ui</Link>.
      </Heading>

      <Notes />
    </Layout>
  )
}
