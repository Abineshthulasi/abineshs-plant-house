import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCount } from '../features/cart/cartSlice'

export default function Header(){
  const count = useSelector(selectCount)
  const { pathname } = useLocation()
  return (
    <header className="hdr">
      <Link to="/products" className="brand">Abinesh’s Plant House</Link>
      <nav>
        {pathname !== '/products' && <Link to="/products">Products</Link>}
        {pathname !== '/cart' && <Link to="/cart">Cart</Link>}
      </nav>
      <Link to="/cart">🛒 <span className="badge">{count}</span></Link>
    </header>
  )
}
