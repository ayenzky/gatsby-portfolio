import React from 'react'
import Link from 'gatsby-link'

import {
  Container,
  Content,
  Columns,
  Column,
  Hero,
  HeroHeader,
  Notification,
  HeroBody,
  Title,
  Button
} from 'bloomer'
import hero from '../static/img/hero.jpg'

import './header.css'

export default () => (
<Hero isSize='medium' isFullHeight='true'>
<Content className='front_end'>FRONT-END DEVLOPER</Content>
<HeroBody>
    <Container>
    <Columns>
      <Column isSize='{desktop:"1/2", mobile: "12"}' isOffset='1/2'>
          <Content hasTextAlign='right' hasTextColor='white'>
              <h2 id='hero_title'>Allen Edward Cartagenas</h2>
              <h1 id='hero_subtxt'>I am a front-end web developer who likes to focus on client-side UI/UX development for all devices using web technologies (HTML, CSS & JavaScript).</h1>
              <Content className='btn_primary'>
              <Link to='#'>CONTACT</Link>
              </Content>

          </Content>
      </Column>
   </Columns>

    </Container>
</HeroBody>
<Content className='web_designer'>WEB DESIGNER</Content>
</Hero>
)
