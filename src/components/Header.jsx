import { Link } from 'react-router-dom'
import useProyectos from '../hooks/useProyectos'
import useAuth from '../hooks/useAuth'
import Busqueda from './Busqueda'

const Header = () => {

    const { handleBuscador, cerrarSesionProyectos } = useProyectos()
    const { cerrarSesionAuth } = useAuth()

    const handleCerrarSesion = () => {
        cerrarSesionAuth()
        cerrarSesionProyectos()
        localStorage.removeItem('token')
    }
  return (
    <header className="px-4 py-5 bg-gray-800 border-b">
        <div className="md:flex md:justify-between items-center">
            <h2 className="text-4xl text-yellow-500 font-black text-center  hover:text-white group mb-3 md:mb-0">
                APP<span className=" inline-block transition-all transform  group-hover: text-white xl:group-hover:ml-4 hover:text-yellow-500">MERN</span>
            </h2>            

            <div className="flex flex-col md:flex-row items-center gap-4">
                <button
                    type='button'
                    className='border-4 border-yellow-400 text-white font-bold p-2 rounded-full align-middle transition duration-500 hover:bg-white hover:text-black uppercase'
                    onClick={handleBuscador}
                >Buscar Proyecto</button> 

                <Link
                    to="/proyectos"
                    className="text-white block p-5 font-bold hover:text-yellow-500 uppercase"
                >Proyectos</Link>

                <button 
                    type="button"
                    className="rounded-full bg-red-500 text-white font-bold px-4 py-3 hover:bg-white hover:text-black transition duration-500 uppercase"
                    onClick={handleCerrarSesion}
                >Cerrar Sesión</button>

                <Busqueda />

            </div>
        </div>

    </header>
  )
}

export default Header