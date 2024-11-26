import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer/CartContainer'
import Footer from './components/Footer'
import CardForm from './components/CardForm'
import { useState } from 'react'


function App() {
  const [isActive, setIsActive] = useState({
    player: true,
    status:"active"
  },[])

  const handleIsActiveState = (status) => {
     if (status == "player"){
      setIsActive({
        player: true,
        status:"player"
      })
     }
     else {
      setIsActive({
        player: false,
        status:"selected"
      })
     }
  }
 

  const [productQueue, setProductQueue] = useState([])

  const addProductQueue = product => {
    const isExist = productQueue.find(previousProduct=> previousProduct.id === product.id)
     if (!isExist) {
      setProductQueue([...productQueue,product]);
     } else {
      alert('player already added')
     }


    
  }

 

  return (
    <>
       <Navbar></Navbar>
       <Header></Header>
      <div className="flex justify-between mt-4 mx-4">
        {/* <AvailablePlayer addProductQueue={addProductQueue}></AvailablePlayer> */}
        {/* productQueue={productQueue} */}
        <CartContainer isActive={isActive} handleIsActiveState={handleIsActiveState} addProductQueue={addProductQueue}></CartContainer>
      </div>
      <CardForm></CardForm>
      <Footer></Footer>

    </>
  )
}

export default App
