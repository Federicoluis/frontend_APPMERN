import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'


const Sidebar = () => {

    const { auth } = useAuth()
  return (
    <aside className="md:w-1/3 lg:w-1/4 px-4 py-10 ">
        
        <p className="text-xl font-bold text-yellow-500 uppercase shadow-lg shadow-gray-300 rounded-lg ">Hola: {auth.nombre}</p>

        <Link
            to="crear-proyecto"
            className="w-full p-3 text-white uppercase font-bold inline-block mt-5 text-center bg-red-500 text-white font-black border-transparent border-8 rounded-3xl hover:border-gray-200 hover:bg-white hover:text-black transition duration-200 group"

        >Nuevo Proyecto<span className="w-4 h-4 inline-block border-yellow-300 border-solid border-t-[5px] border-r-[5px] transform rotate-45 group-hover:border-red-500 "></span></Link>
    </aside>
  )
}

export default Sidebar