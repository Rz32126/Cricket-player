import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar'
import Player from './components/Player/Player'
import CartContainer from './components/CartContainer/CartContainer'
import AvailablePlayer from './components/AvailablePlayer/AvailablePlayer'

function App() {
 

  return (
    <>
       <Navbar></Navbar>
       <Header></Header>
      <div className="flex justify-between mt-4 mx-4">
        <Player></Player>
        <CartContainer></CartContainer>
      </div>
      <AvailablePlayer></AvailablePlayer>

    </>
  )
}

export default App
