
const Alerta = ({alerta}) => {
  return (
    <div className={`${alerta.error ? 'from-red-400 to-red-600' : 'from-gray-400 to-gray-800'} bg-gradient-to-br text-center p-3 rounded-xl uppercase text-yellow-500 font-bold text-sm my-10 `}>
        {alerta.msg}
    </div>
  )
}

export default Alerta