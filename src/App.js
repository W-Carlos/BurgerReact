import React, {useState} from 'react'

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
  const [order, setOrder] = useState();
  const [name, setName] = useState();

  function addNewOrder(){
    setOrders([{id: Math.random(), order, name: name}])
    console.log(name) 
  }

  function changeInputOrder(event){
    setOrder(event.target.value)
  }

  function changeInputName(event){
    setName(event.target.value)
  }

  return (
    <Container>
      <Image src={Burger} alt='logo-imagem'/>
      <ContainerItem>
        <H1>Faça seu pedido</H1>

        <InputLabel>Pedido</InputLabel>
        <Input onChange={changeInputOrder} placeholder="Digite seu pedido"></Input>

        <InputLabel>Nome</InputLabel>
        <Input onChange={changeInputName} placeholder="Digite seu nome"></Input>

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