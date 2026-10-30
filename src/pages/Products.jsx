import { getProducts, deleteProduct } from '../services/productService'
import ProductList from "../components/ProductList"
import { useEffect, useState } from "react"


export default function Products(){

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(()=>{
    loadProducts()
  },[])

  async function loadProducts() {
    try {
      setLoading(true)
      setError("")

      const data = await getProducts()

      setProducts(data.products)
    } catch (error) {

      setError(error.message)

    } finally {

      setLoading(false)
    }
  }


  async function handleDelete (id) {
    try {
      await deleteProduct(id)
      setProducts(
        products.filter((product)=> product.id !== id )
      )
      
    } catch (error) {
      setError(error.message)
      
    }
  }


  async function handleEdit (product) {
    console.log("Editar:", product)
  }

  if (loading) return <p>Cargando productos...</p>

  if (error) return <p>{error}</p>


  return (
  <section>
      <section> 
        <h1> Productos </h1>

        <ProductList 
          products={products}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </section>

    </section>
  )
}
