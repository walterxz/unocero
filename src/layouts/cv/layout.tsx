import Nav from '@components/Nav/nav'
import Header from '@components/Header/header'
import ProfileCard from '@components/ProfileCard/profileCard'
import Footer from '@components/Footer/footer'
import Projects from '@components/Projects/projects'
import Wallpaper from '@components/Wallpaper/wallpaper'

import { Container } from './styles'

const LayoutCV = () => {
  return (
    <>
      <Wallpaper />
      <Container>
        <Nav />
        <Header />
        <ProfileCard />
        <Projects />
        <Footer />
      </Container>
    </>
  )
}

export default LayoutCV
