import React, {useState, useRef, useEffect} from 'react'

import axios from 'axios'

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
   

  // Adiciona pedidos
  async function addNewOrder(){

    const {data: newOrder} = await axios.post("http://localhost:3001/firstOrder", {
      order: inputOrder.current.value, 
      clienteName: inputName.current.value
    })

    setOrders([...orders, newOrder]) 
  }

  // Chamando os usuarios quando a aplicação inicia
  useEffect(() => {

    // Recuperando usuários no Back-end
    async function fetchOrders() {
      const {data: showOrder} = await axios.get('http://localhost:3001/firstOrder')

    setOrders(showOrder)
    }

    fetchOrders()
    
  }, [])

  // Botão de deletar
  async function deleteOrder(orderId){

    await axios.delete(`http://localhost:3001/firstOrder/${orderId}`)
    const newOrders = orders.filter(order => order.id !== orderId)
    setOrders(newOrders)
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
                <P>{order.clienteName}</P>
              </Div>
              <div onClick={() => deleteOrder(order.id)}>
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