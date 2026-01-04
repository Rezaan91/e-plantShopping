
import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/CartSlice.jsx'

export default function ProductCard({ product }) {
  const dispatch = useDispatch()
  const onAdd = () => dispatch(addItem(product))
  return (
    <article style={{border:'1px solid #e5e7eb', borderRadius:12, overflow:'hidden', background:'#fff', display:'flex', flexDirection:'column'}}>
      <img src={product.image} alt={product.name} style={{aspectRatio:'4/3', objectFit:'cover', width:'100%'}} />
      <div style={{padding:'0.8rem 1rem 1rem'}}>
        <h3 style={{margin:'0 0 .25rem', fontSize:'1.05rem'}}>{product.name}</h3>
        <p style={{margin:'0 0 .75rem', color:'#475569'}}>{product.category}</p>
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <strong>R {product.price.toFixed(2)}</strong>
          <button onClick={onAdd} style={{background:'#2e7d32', color:'#fff', border:'none', padding:'.5rem .8rem', borderRadius:8, cursor:'pointer'}}>Add to cart</button>
        </div>
      </div>
    </article>
  )
}
