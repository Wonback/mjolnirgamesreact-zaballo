import './App.css'
import ItemListContainer from './Components/ItemListContainer'
import NavBar from './Components/NavBar'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <ItemListContainer greeting={"Greeting del componente contenedor"}></ItemListContainer>
    </>
  )
}

export default App
