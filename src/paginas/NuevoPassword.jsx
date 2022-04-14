import {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import clienteAxios from '../config/clienteAxios'
import Alerta from  '../components/Alerta'



const NuevoPassword = () => {

    const [password, setPassword] = useState('')
    const [ tokenValido, setTokenValido ] = useState(false)
    const [ alerta, setAlerta] = useState({})
    const [passwordModificado, setPasswordModificado] = useState(false)

    const params = useParams();
    const { token } = params
   

    useEffect(() => {
        const comprobarToken = async () => {

            try {
                
                 await clienteAxios(`/usuarios/olvide-password/${token}`)

               setTokenValido(true)
            } catch (error) {
               setAlerta({
                msg: error.response.data.msg,
                error: true
               }) 
            }
        }
        comprobarToken()
    }, [])

    const handleSubmit = async e =>{
        e.preventDefault();

        if(password.length < 6){
            setAlerta({
                msg: 'El Password debe ser minimo de 6 caracteres',
                error: true
            })
            return
        }

        try {
            const url = `/usuarios/olvide-password/${token}`

            const { data } = await clienteAxios.post(url, { password })
            setAlerta({
                msg: data.msg,
                error: false
            })
            setPasswordModificado(true)
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
        }
    }

    const { msg } = alerta

  return (
    <>
        <h1 className='text-yellow-500 font-black text-6xl capitalize flex flex-col'>Reestablece tu contraseña y no pierdas acceso a tus <span className='text-slate-700 pt-4'> proyectos</span></h1>

        { msg && <Alerta alerta={alerta} />}

        
        { tokenValido && (//Si es valido muestra el form, si no, no
            <form 
                className='my-10 bg-white shadow rounded-lg p-10'
                onSubmit={handleSubmit}
                >
           
                <div className='my-5'>
                    <label className='uppercase text-gray-600 block text-xl font-bold' htmlFor='password'>Nueva Contraseña</label>
                    <input
                        id='password'
                        type= 'password'
                        placeholder= 'Escribe tu Nueva Contraseña' className= 'w-full mt-3 p-3 border rounded-xl bg-gray-50' 
                        value={password}     
                        onChange={e => setPassword(e.target.value)}         
                    />
                </div>           

                <input
                    type='submit'
                    value='Guardar Nueva Contraseña'
                    className= 'bg-gray-700 w-full p-3 uppercase font-bold text-yellow-500 rounded cursor-pointer hover:bg-gray-600 hover:text-white transition-colors'

                />
        </form>
        )}       

        {passwordModificado && (
           <Link
           className='block text-center my-5 text-slate-500 uppercase text-sm'
           to='/'
           >Inicia Sesión</Link> 
        )}
    </>
  )
}

export default NuevoPassword