import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [item,setItems] = useState(items)
  const[category,setCategory] = useState([])

  const filtered = (category)=>{
    if(category === 'all'){
      return  setItems(items)
      
    }
    const newone = item.filter((it)=>it.category === category)
    setItems(newone)
  }
  return <main>
    <section className="menu section">
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>

      </div>
      <Categories item={item} filtered={filtered}/><br /><br />
      <Menu item={item}/>
    </section>
  </main>
}

export default App;
