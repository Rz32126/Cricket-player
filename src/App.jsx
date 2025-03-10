import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer/CartContainer'
import Footer from './components/Footer'
import CardForm from './components/CardForm'
import { useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


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

  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const [price, setPrice] = useState(0);

  const handleAddPrice = (pr) => {
      setPrice(price-pr)
  }

  const handleCredit = () => {
    setPrice(price+700000)
  }

  const handleDelete = (id) => {
    const restPlayer = selectedPlayers.filter((p) => p.id != id);
    setSelectedPlayers(restPlayer);
  }

  const handleSelectedPlayer = (player) => {
    const isExist = selectedPlayers.find(previousPlayer => previousPlayer.id === player.id)
    if (!isExist) {
      handleAddPrice(player.price);
      setSelectedPlayers([...selectedPlayers, player]);
    }  else {
      
      toast.error('Player already added');
     }
    
  }

  


  return (
    <> 
       <ToastContainer />
       <Navbar price={price}></Navbar>
       <Header handleCredit={handleCredit}></Header>
      <div className="mt-4">
        <CartContainer isActive={isActive} handleIsActiveState={handleIsActiveState} handleSelectedPlayer={handleSelectedPlayer}
        selectedPlayers={selectedPlayers}
        handleDelete={handleDelete}
        ></CartContainer>
      </div>
      <CardForm></CardForm>
      <Footer></Footer>

    </>
  )
}

export default App
