import { Link } from 'react-router-dom'

export default function NavBar(){
  return (
  <nav>
      <h2> React Products </h2>

      <ul>  
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/products">Productos</Link>
        </li>
      </ul>

    </nav>
  )
}
