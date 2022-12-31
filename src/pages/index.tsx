import React, { useState } from 'react'
import { Layout, Seo, ComingSoon } from '../layout'

const IndexPage = () => {
  return (
    <Layout location="Home">
      <Seo title="Home" />
      <main className="">
        <ComingSoon />
      </main>
    </Layout>
  )
}

export default IndexPage
