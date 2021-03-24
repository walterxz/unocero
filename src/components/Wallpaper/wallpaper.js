import { Container } from "./styles";
import Image from "next/image";

const Card = () => {
  return (
    <Container>
      <Image
        src="/img/wallpaper.jpg"
        alt="Picture of the author"
        layout="fill"
        objectFit='cover'
      />
    </Container>
  );
};

export default Card;
