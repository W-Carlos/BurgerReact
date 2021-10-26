import React from 'react'
import Burger from './assets/burger.png'

import { 
  Container, 
  Image, 
  ContainerItem, 
  H1, 
  InputLabel, 
  Input, 
  Button 
} from './styles'

const App = () => {
  return (
    <Container>
      <Image src={Burger} alt='logo-imagem'/>
      <ContainerItem>
        <H1>Faça seu pedido</H1>

        <InputLabel>Pedido</InputLabel>
        <Input placeholder="Digite seu pedido"></Input>

        <InputLabel>Nome</InputLabel>
        <Input placeholder="Digite seu nome"></Input>

        <Button>Novo Pedido</Button>

      </ContainerItem>
    </Container>
  )
}

export default App