import React from 'react'

import Burger from './assets/burger.png'
import Trash from './assets/trash.png'

import { 
  Container, 
  Image, 
  ContainerItem, 
  H1, 
  InputLabel, 
  Input, 
  Button,
  Order,
  Div,
  P
} from './styles'

const App = () => {

  const orders = [
    {id: Math.random(), order: "Cachorro-quente, Hamburguer, Coca-cola", clienteName: "Carlos"},
    {id: Math.random(), order: "Pizza", clienteName: "Maria"}
  ]

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

        <ul>
          {orders.map((order) => (
            <Order key={order.id}>
              <Div>
                <p>{order.order}</p>
                <P>{order.clienteName}</P>
              </Div>
              <div>
                <img src={Trash} alt="deletar"/>
              </div>
            </Order>
          ))}
          
        </ul>

      </ContainerItem>
    </Container>
  )
}

export default App