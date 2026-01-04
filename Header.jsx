
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartCount } from '../redux/CartSlice.jsx'

export default function Header() {
  const count = useSelector(selectCartCount)
  return (
    <header style={{background:'#f5fff7', borderBottom:'1px solid #e3f2e6'}}>
      <nav className="container" style={{display:'flex', alignItems:'center', justifyContent:'space-between', height:64}}>
        <Link to="/" style={{fontWeight:800, letterSpacing:'.02em', color:'#2e7d32', textDecoration:'none'}}>Paradise Nursery</Link>
        <div style={{display:'flex', gap:'1rem'}}>
          <NavLink to="/" style={({isActive})=>({textDecoration:'none', color: isActive?'#2e7d32':'#333'})}>Home</NavLink>
          <NavLink to="/products" style={({isActive})=>({textDecoration:'none', color: isActive?'#2e7d32':'#333'})}>Products</NavLink>
          <NavLink to="/about" style={({isActive})=>({textDecoration:'none', color: isActive?'#2e7d32':'#333'})}>About</NavLink>
          <NavLink to="/cart" style={({isActive})=>({textDecoration:'none', color: isActive?'#2e7d32':'#333'})}>
            Cart{count>0 && <span aria-label="items in cart" style={{marginLeft:6, background:'#2e7d32', color:'#fff', borderRadius:999, padding:'2px 8px', fontSize:12}}>{count}</span>}
          </NavLink>
        </div>
      </nav>
    </header>
  )
}
