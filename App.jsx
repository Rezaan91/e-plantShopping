
import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

export default function App() {
  return (
    <main className="hero">
      <section className="hero__content">
        <h1 className="hero__title">Paradise Nursery</h1>
        <p className="hero__subtitle">Bringing lush, living greens to your home and office</p>
        <Link to="/products" className="hero__cta">Get Started</Link>
      </section>
    </main>
  )
}
