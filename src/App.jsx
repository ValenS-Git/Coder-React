import ItemListContainer from "./components/ItemListContainer"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <ItemListContainer
          text="PRONTO CATALOGO DE JUEGOS!"
        />
      </div>
    </>
  )
}

export default App
