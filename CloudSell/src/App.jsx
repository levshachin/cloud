import { useEffect, useState } from 'react'
import './App.css'
import CardModule from './Components/CardModule'

function App() {
  const [serverList, setServerList] = useState([])
  useEffect(()=>{
    async function serverL() {
      const serv = await fetch('https://api.cloudsell.ru/servers/list')
      const s = await serv.json()
      setServerList(s)
    }
    serverL()
  }, [])
  console.log(serverList)
  return (
    <div className='main'>
      {serverList.map((s)=> {return <CardModule key={s.id} serverName={s.name} serverPrice={parseInt(s.price)}/>})}
    </div>
  );
}

export default App
