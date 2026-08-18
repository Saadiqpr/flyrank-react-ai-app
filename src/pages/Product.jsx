import { useParams } from 'react-router-dom'
import { useStore } from '../context/StoreContext'

export default function Product() {
  const { id } = useParams()
  const { state, dispatch } = useStore()
  const product = state.products.find((p) => p.id === id)

  if (!product) return <section style={{ padding: 24 }}><h2>Product not found</h2></section>

  return (
    <section style={{ padding: 24 }}>
      <h1>{product.name}</h1>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}>Add to cart</button>
    </section>
  )
}
