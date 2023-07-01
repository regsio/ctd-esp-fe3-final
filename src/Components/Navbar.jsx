import React from 'react'
import { Link } from 'react-router-dom'
import ContextGlobal from '../contextGlobal'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <button>
        <Link to="./Routes/Home">Home</Link>
      </button>
      <button>
        <Link to="./Routes/Detail">Detail</Link>
      </button>
      <button>
        <Link to="./Routes/Favs">Favs</Link>
      </button>
      <button>
        <Link to="./Routes/Contact">Contact</Link>
      </button>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar