import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './all.sass'
import {
  Container,
  Content,
  Columns,
  Column,
  Notification,
  Hero,
  HeroHeader,
  HeroBody,
  HeroFooter,
  Tabs,
  TabList,
  Tab,
  TabLink,
  Navbar,
  Nav
} from 'bloomer'
// import './index.css'

export default ({children}) => (

  <Container isFluid style={{ margin: 0 }}>
  <Header/>
   <Columns isCentered>
    <Column isSize='1/4'>
        <Notification isColor='success' hasTextAlign='centered'> isOneThird </Notification>
    </Column>
    <Column isSize='1/4'>
        <Notification isColor='danger' hasTextAlign='centered'> Third column </Notification>
    </Column>
    <Column isSize='1/4'>
        <Notification isColor='danger' hasTextAlign='centered'> Third column </Notification>
    </Column>
   </Columns>
   {children()}
  </Container>
)

// const Layout = ({ children, data }) => (

//   <div>
//   <Container>TEST</Container>
//     <Helmet
//       title={data.site.siteMetadata.title}
//       meta={[
//         { name: 'description', content: 'Sample' },
//         { name: 'keywords', content: 'sample, something' },
//       ]}
//     />
//     <Header siteTitle={data.site.siteMetadata.title} />
//     <div
//       style={{
//         margin: '0 auto',
//         maxWidth: 960,
//         padding: '0px 1.0875rem 1.45rem',
//         paddingTop: 0,
//       }}
//     >
//       {children()}
//     </div>
//   </div>
// )

// Layout.propTypes = {
//   children: PropTypes.func,
// }

// export default Layout

// export const query = graphql`
//   query SiteTitleQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
