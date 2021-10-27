import React, {useState, useRef} from 'react'

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

  //const orders = []
  const [orders, setOrders] = useState([]);
  const inputOrder = useRef()
  const inputName = useRef()
   

  function addNewOrder(){
    setOrders([ 
      ...orders, 
      {
        id: Math.random(), 
        order: inputOrder.current.value, 
        name: inputName.current.value
      }
    ]) 
  }

  return (
    <Container>
      <Image src={Burger} alt='logo-imagem'/>
      <ContainerItem>
        <H1>Faça seu pedido</H1>

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder="Digite seu pedido"></Input>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Digite seu nome"></Input>

        <Button onClick={addNewOrder}>Novo Pedido</Button>

        <ul>
          {orders.map((order) => (
            <Order key={order.id}>
              <Div>
                <p>{order.order}</p>
                <P>{order.name}</P>
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