import { Link } from 'react-router-dom'

export default function Landing(){
  return (
    <section style={{
      minHeight:'80vh',
      display:'grid',
      placeItems:'center',
      background:'url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop) center/cover'
    }}>
      <div className="card" style={{textAlign:'center', background:'rgba(0,0,0,.55)'}}>
        <h1>Abinesh’s Plant House</h1>
        <p>Healthy indoor plants delivered to your door. Curated, easy-care, and beautiful.</p>
        <Link to="/products" className="btn">Get Started</Link>
      </div>
    </section>
  )
}
