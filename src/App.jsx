import { useState, useEffect } from 'react';
import './App.css';
import Product from './components/Product';

function App() {
 const [products, setProducts] = useState([]);
 const [total, setTotal] = useState(0);

  useEffect(()=>{
     fetch("https://fakestoreapi.com/products")
     .then(res=> res.json())
     .then(data=> setProducts(data))
  },[])

  useEffect(()=>{
    setTotal(products.reduce((sum, product)=> sum + product.price, 0).toFixed(2))
  },[products])

  const handleDelete = id =>{
    const filtered = products.filter(p=> p.id != id);
    setProducts(filtered)
  }

  return (
    <>
      <h2>Products {products.length}</h2>
      <h5>Total: {total}</h5>
      <div className="d-flex p-4">
         <Product products={products} onDel={handleDelete}/>
      </div>
    </>
  )
}

export default App
