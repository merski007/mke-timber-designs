import { useState, useEffect } from 'react'
import PiklerForm from './components/PiklerForm';


function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const productsFromServer = await fetchProducts()
      setProducts(productsFromServer)
    }
    getProducts()
  }, [])

  const fetchProducts = async () => {
    const res = await fetch('http://localhost:5000/products')
    const data = await res.json()
    return data
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

      <PiklerForm products={products}/>
    </div>
  );
}

export default App;
