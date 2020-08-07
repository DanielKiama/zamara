import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Banner from "../components/banner"
import Services from "../components/ourServices"
import ZamaraApp from "../components/zamaraApp"
import News from "../components/news"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner/>
    <Services/>
    <ZamaraApp/>
    <News/>
  </Layout>
)

export default IndexPage
