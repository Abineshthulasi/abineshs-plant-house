import { useDispatch } from 'react-redux'
import { increment, decrement, removeItem } from '../features/cart/cartSlice'

export default function CartItem({item}){
  const d = useDispatch()
  return (
    <div className="card" style={{display:'grid',gridTemplateColumns:'80px 1fr auto',gap:12,alignItems:'center'}}>
      <img src={item.thumb} width="80" height="80" style={{objectFit:'cover',borderRadius:8}}/>
      <div>
        <h3 style={{margin:'4px 0'}}>{item.name}</h3>
        <div>${item.price} • Qty: {item.qty}</div>
        <div style={{marginTop:8, display:'flex', gap:8}}>
          <button className="btn" onClick={()=>d(increment(item.id))}>＋</button>
          <button className="btn" onClick={()=>d(decrement(item.id))}>－</button>
          <button className="btn" onClick={()=>d(removeItem(item.id))}>Delete</button>
        </div>
      </div>
      <strong>${(item.qty*item.price).toFixed(2)}</strong>
    </div>
  )
}
