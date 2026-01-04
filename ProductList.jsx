jsx
// src/components/ProductList.jsx
import React, { useState, useMemo } from 'react';
import products from '../data/products.js';
import ProductCard from './ProductCard.jsx';

const ProductList = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('name');

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (category !== 'All') {
      result = result.filter(p => p.category === category);
    }

    if (query) {
      result = result.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Sort logic
    if (sort === 'price-low-high') {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-high-low') {
      result.sort((a, b) => b.price - a.price);
    } else {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [query, category, sort]);

  return (
    <div>
      <h1>Plant Shop</h1>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Tropical">Tropical</option>
        <option value="Succulent">Succulent</option>
        <option value="Fern">Fern</option>
        <option value="Cactus">Cactus</option>
        <option value="Vine">Vine</option>
      </select>
      <select value={sort} onChange={e => setSort(e.target.value)}>
        <option value="name">Name</option>
        <option value="price-low-high">Price: Low to High</option>
        <option value="price-high-low">Price: High to Low</option>
      </select>

      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
