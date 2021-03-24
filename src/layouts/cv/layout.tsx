import Nav from '@components/Nav/nav'
import Header from '@components/Header/header'
import ProfileCard from '@components/ProfileCard/profileCard'
import Footer from '@components/Footer/footer'
import Projects from '@components/Projects/projects'
import Image from "next/image";

import { Container,ContainerImage } from './styles'

const LayoutCV = () => {
  return (
    <>
      <ContainerImage >
      <Image
        src="/img/wallpaper.jpg"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      </ContainerImage>
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
