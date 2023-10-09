import Navbar from "./components/navbar"
import Hero from "./components/hero"
import data from "./components/data"
import CardComponent from "./components/card"
import './App.css'

function App() {

  const cards = data.map(item => {
    return (
      <CardComponent
        key={item.id}
        item ={item}
      />
    );
  });


  return (
    <>
      <Navbar/>
      <Hero/>
      <section className="cards-list">
        {cards}
      </section>

    </>
  )
}

export default App