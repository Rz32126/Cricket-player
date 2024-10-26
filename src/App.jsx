import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar'
import Player from './components/Player/Player'
import CartContainer from './components/CartContainer/CartContainer'
import AvailablePlayer from './components/AvailablePlayer/AvailablePlayer'
import Footer from './components/Footer'
import CardForm from './components/CardForm'
import { useState } from 'react'


function App() {

  const [productQueue, setProductQueue] = useState([])

  const addProductQueue = product => {
    const isExist = productQueue.find(previousProduct=> previousProduct.id === product.id)
     if (!isExist) {
      setProductQueue([...productQueue,product])
     } else {
      alert('player already added')
     }


    
  }

 

  return (
    <>
       <Navbar></Navbar>
       <Header></Header>
      <div className="flex justify-between mt-4 mx-4">
        <AvailablePlayer addProductQueue={addProductQueue}></AvailablePlayer>
        <CartContainer productQueue={productQueue}></CartContainer>
      </div>
      <Player></Player>
      <CardForm></CardForm>
      <Footer></Footer>

    </>
  )
}

export default App
