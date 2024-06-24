import axios from 'axios'
import React, { useEffect,useState } from 'react'
import './Home.css'
export default function Home() {
    const [products,setProducts]=useState("")
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        getProducts()
    },[])
    async function getProducts(){
        const response=await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/products`)
        setProducts(response.data)
        setLoading(false)
    }
    function handleAddCart(){

    }
    return (
        <div className='home-container'>
            {
                loading?(
                    <p>Loading...</p>
                ):
                (
                    <div className='product-list '>
                        {
                            products.map((product)=>(
                                <div className='product-item' key={product._id}>
                                    <h2>{product.name}</h2>
                                    <p><b>Price:</b> {product.price}</p>
                                    <p>{product.description}</p>
                                    <p>{product.category}</p>
                                    <p><b>Stock:</b>{product.stock}</p>
                                    <button onClick={handleAddCart}>Add to cart</button>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}
