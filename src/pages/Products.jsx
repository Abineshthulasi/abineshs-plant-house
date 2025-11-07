import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import { PRODUCTS, CATEGORIES } from '../data/products'

export default function Products(){
  return (
    <>
      <Header/>
      <div className="wrap">
        {CATEGORIES.map(cat=>(
          <section key={cat} className="section">
            <h2>{cat}</h2>
            <div className="grid">
              {PRODUCTS.filter(p=>p.category===cat).map(p=>(
                <ProductCard key={p.id} p={p}/>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  )
}
