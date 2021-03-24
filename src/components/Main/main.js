import { Container,Button } from "./styles";
import Image from "next/image";
import Link from "next/link";

const Main = () => {
  // Declara una nueva variable de estado, la cual llamaremos “count”

  return (
    <Container>
      <Link href="/cv">
        <Button>Ver portafolio</Button>
      </Link>
      <h2>Hello World, working on the website</h2>
      <Image
        src="/img/svg/working.svg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </Container>
  );
};
export default Main;
