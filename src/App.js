import { useState, useEffect } from 'react'
import PiklerForm from './components/PiklerForm';


function App() {
  const [products, setProducts] = useState([])
  //const [orders, setOrders] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const productsFromServer = await fetchProducts()
      setProducts(productsFromServer)
    }
    getProducts()
  }, [])

  // fetch products from database
  const fetchProducts = async () => {
    const res = await fetch('http://localhost:5000/products')
    const data = await res.json()
    return data
  }

  // add form submission to database
  const addOrder = async (order) => {
    await fetch('http://localhost:5000/orders',{
      method: 'POST',
      headers:{
        'Content-type':'application/json',
      },
      body: JSON.stringify(order)
    })
  }

  return (
    <div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          MKE Timber Designs
        </p>
        <p>
          Under Construction
        </p>
      </header> */}

      <PiklerForm products={products} onAdd={addOrder}/>
    </div>
  );
}

export default App;
