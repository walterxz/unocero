import React, { useState } from "react";

import { Container } from "./styles";


const Card = () => {
  return (
    <Container>
      <div>Foto</div>
      <div>
        About
        <button>Descargar CV</button>
      </div>
    </Container>
  )
}

export default Card
