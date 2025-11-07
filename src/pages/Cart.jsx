import Header from '../components/Header'
import { useSelector } from 'react-redux'
import { selectItemsArr, selectCount, selectTotal } from '../features/cart/cartSlice'
import CartItem from '../components/CartItem'
import { Link } from 'react-router-dom'

export default function Cart(){
  const items = useSelector(selectItemsArr)
  const count = useSelector(selectCount)
  const total = useSelector(selectTotal)

  return (
    <>
      <Header/>
      <div className="wrap">
        <h2>Shopping Cart</h2>
        <p>Total plants: <strong>{count}</strong></p>
        <p>Total cost: <strong>${total.toFixed(2)}</strong></p>

        <div className="grid">
          {items.map(it => <CartItem key={it.id} item={it}/>)}
        </div>

        <div style={{marginTop:16, display:'flex', gap:10}}>
          <button className="btn" onClick={()=>alert('Coming Soon')}>Checkout</button>
          <Link to="/products" className="btn">Continue Shopping</Link>
        </div>
      </div>
    </>
  )
}
