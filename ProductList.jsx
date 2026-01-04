
import React, { useMemo, useState } from 'react'
import products from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'

export default function ProductList() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [sort, setSort] = useState('name-asc')

  const categories = useMemo(() => ['all', ...Array.from(new Set(products.map(p => p.category)))], [])

  const filtered = useMemo(() => {
    let list = products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()))
    if (category !== 'all') list = list.filter(p => p.category === category)
    switch (sort) {
      case 'price-asc': list = [...list].sort((a,b)=>a.price-b.price); break
      case 'price-desc': list = [...list].sort((a,b)=>b.price-a.price); break
      case 'name-desc': list = [...list].sort((a,b)=>b.name.localeCompare(a.name)); break
      default: list = [...list].sort((a,b)=>a.name.localeCompare(b.name))
    }
    return list
  }, [query, category, sort])

  return (
    <section className="container">
      <h2 style={{margin:'1rem 0'}}>All Plants</h2>
      <div style={{display:'grid', gridTemplateColumns:'1fr 3fr', gap:'1rem'}}>
        <aside style={{border:'1px solid #e5e7eb', borderRadius:12, padding:'1rem', background:'#fff'}}>
          <label style={{display:'block', fontWeight:600}}>Search</label>
          <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search by name" style={{width:'100%', padding:'.6rem .7rem', margin:'.4rem 0 1rem', border:'1px solid #e5e7eb', borderRadius:8}} />
          <label style={{display:'block', fontWeight:600}}>Category</label>
          <select value={category} onChange={e=>setCategory(e.target.value)} style={{width:'100%', padding:'.6rem .7rem', margin:'.4rem 0 1rem', border:'1px solid #e5e7eb', borderRadius:8}}>
            {categories.map(c=> <option key={c} value={c}>{c}</option>)}
          </select>
          <label style={{display:'block', fontWeight:600}}>Sort</label>
          <select value={sort} onChange={e=>setSort(e.target.value)} style={{width:'100%', padding:'.6rem .7rem', margin:'.4rem 0', border:'1px solid #e5e7eb', borderRadius:8}}>
            <option value="name-asc">Name (A→Z)</option>
            <option value="name-desc">Name (Z→A)</option>
            <option value="price-asc">Price (low→high)</option>
            <option value="price-desc">Price (high→low)</option>
          </select>
        </aside>
        <div className="grid grid--products">
          {filtered.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  )
}
