import React from 'react'
import './ItemCount.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const ItemCount = ({stock, setCount, count}) => {

    const onAdd = () => {
        setCount(count + 1)
    }
    const onRemove = () => {
        setCount(count - 1)
    }    
    const handleClick = ()=> {
        alert(`Agregaste ${count} productos al carrito de compras` )
      }
    return (
    <>
    <div className="cardContador">
    
        <div class="card-body">
            <div className="contador btn-group " role="group" aria-label="Basic outlined example">           
                
                <button className="btn btn-outline-primary" disabled = {count <= 1} onClick={onRemove}> - </button>
                <button className="btn btn-outline-primary">{count}</button>
                <button className="btn btn-outline-primary" disabled = {count >= stock} onClick={onAdd}> + </button>  
                <div>
                    <Link to={'./cart'} onClick={handleClick} >
                        <button className="btn2 btn2-outline-primary">Agregar al carrito</button>
                    </Link> 
                </div>
            
            </div> 
        </div>
    </div>
        
    </>
  )
}

export default ItemCount