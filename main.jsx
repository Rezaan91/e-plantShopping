
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import store from './redux/store.js'
import './index.css'
import App from './App.jsx'
import ProductList from './pages/ProductList.jsx'
import AboutUs from './pages/AboutUs.jsx'
import CartItem from './pages/CartItem.jsx'
import Header from './components/Header.jsx'

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)

ReactDOM.createRoot(document.getElementById('root')).render(<Root />)
