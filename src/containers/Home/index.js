import React, {useState, useRef} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import Swal from 'sweetalert2'

import Burger from '../../assets/burger.png'

import { 
  Container, 
  Image, 
  ContainerItem, 
  H1, 
  InputLabel, 
  Input, 
  Button,
  ButtonOrder
} from './styles'

const App = () => {

  //const orders = []
  const [orders, setOrders] = useState([]);
  const inputOrder = useRef()
  const inputName = useRef()

  const history = useHistory()
   
  // Adiciona pedidos
  async function addNewOrder(){

    if(inputOrder.current.value === "" || inputName.current.value === ""){
      
      Swal.fire({
        icon: 'error',
        title: 'Por favor preencha todos os campos!'
      })
    } else {
      Swal.fire(
        'Obrigado. Seu pedido foi feito!',
        'click no botão!',
        'success'
      )
      const {data: newOrder} = await axios.post("http://localhost:3001/firstOrder", {
      order: inputOrder.current.value, 
      clienteName: inputName.current.value
      })

      inputOrder.current.value = ""
      inputName.current.value = ""

      setOrders([...orders, newOrder]) 

      //history.push("/order")
    }

  }

  async function allOrders(){
   await history.push("/order")
  }

  return (
    <Container>
      <Image src={Burger} alt='logo-imagem'/>
      <ContainerItem>
        <H1>Faça seu pedido</H1>

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder="Ex: 1 X-Tudo, 1 Coca-cola"></Input>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Ex: Pedro Silva"></Input>

        <Button onClick={addNewOrder}>Novo Pedido</Button>
        <ButtonOrder onClick={allOrders}>Todos os pedidos</ButtonOrder>

      </ContainerItem>
    </Container>
  )
}

export default App