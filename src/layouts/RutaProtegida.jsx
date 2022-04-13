import { Outlet, Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import Header from  '../components/Header'
import Sidebar from  '../components/Sidebar'

const RutaProtegida = () => {
    

    const { auth, cargando } = useAuth()

    
  return (
    cargando ? <span className="flex justify-center h-3 w-3">
    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-yellow-400 opacity-75">Procesando...</span>
  </span> : (

    <>
    
        {auth._id ? 
        (
            <div className='bg-gray.100'>
                <Header />

                <div className='md:flex md:min-h-screen'>
                    <Sidebar />

                    <main className='p-10 flex-1 '>
                        <Outlet />
                    </main>
                </div>

            </div>

        ) : <Navigate to="/" />}
    </>
  )
)
}

export default RutaProtegida