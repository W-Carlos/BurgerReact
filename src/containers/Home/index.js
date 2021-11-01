import React, {useState, useRef} from 'react'

import axios from 'axios'

import Burger from '../../assets/burger.png'

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

  //const orders = []
  const [orders, setOrders] = useState([]);
  const inputOrder = useRef()
  const inputName = useRef()
   

  // Adiciona pedidos
  async function addNewOrder(){

    const {data: newOrder} = await axios.post("http://localhost:3001/firstOrder", {
      order: inputOrder.current.value, 
      clienteName: inputName.current.value
    })

    setOrders([...orders, newOrder]) 
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

      </ContainerItem>
    </Container>
  )
}

export default App