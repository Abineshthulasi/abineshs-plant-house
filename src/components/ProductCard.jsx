import { useDispatch, useSelector } from 'react-redux'
import { addToCart, selectItemsArr } from '../features/cart/cartSlice'

export default function ProductCard({ p }){
  const dispatch = useDispatch()
  const inCart = useSelector(selectItemsArr).some(i => i.id === p.id)
  return (
    <div className="card">
      <img src={p.thumb} alt={p.name} style={{borderRadius:8}}/>
      <h3>{p.name}</h3>
      <p>${p.price} • {p.category}</p>
      <button className="btn" disabled={inCart} onClick={()=>dispatch(addToCart(p))}>
        {inCart ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  )
}
