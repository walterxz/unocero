import Nav from '@components/Nav/nav'
import Header from '@components/Header/header'
import ProfileCard from '@components/ProfileCard/profileCard'
import Footer from '@components/Footer/footer'
import Projects from '@components/Projects/projects'
import Technologies from '@components/Technologies/technologies'
import Story from '@components/Story/story'
import Image from 'next/image'

import { Container, ContainerImage } from './styles'

const LayoutCV = () => {
  return (
    <>
      <ContainerImage>
        <Image
          src="/img/wallpaper.jpg"
          alt="wallpaper"
          layout="fill"
          objectFit="cover"
          quality={80}
        />
      </ContainerImage>
      <Container>
        <Nav />
        <Header />
        <ProfileCard />
        <Technologies />
        <Projects />
        <Story />
        <Footer />
      </Container>
    </>
  )
}

export default LayoutCV
