import React, {useState, useEffect} from 'react'

import axios from 'axios'

import ImageOrder from '../../assets/ImageOrder.png'
import Trash from '../../assets/trash.png'

import { 
  Container, 
  Image, 
  ContainerItem, 
  H1, 
  Button,
  Order,
  Div,
  P
} from './styles'

const Orders = () => {

  //const orders = []
  const [orders, setOrders] = useState([]);

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
      <Image src={ImageOrder} alt='logo-imagem'/>
      <ContainerItem>
        <H1>Pedidos</H1>

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

        <Button to="/">Voltar</Button>

      </ContainerItem>
    </Container>
  )
}

export default Orders