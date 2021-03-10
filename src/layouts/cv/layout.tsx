import Nav from '@components/Nav/nav'
import Header from '@components/Header/header'
import Card from '@components/Card/card'
import Footer from '@components/Footer/footer'
import Projects from "@components/Projects/projects";

import { Container } from './styles'

const LayoutCV = () => {
  return (
    <Container>
      <Nav />
      <Header />
      <Card />
      <Projects/>
      <Footer />
    </Container>
  )
}

export default LayoutCV
