import { useEffect, useState } from 'react'
import './App.css'
import CardModule from './Components/CardModule'
import Header from './Components/Header'

function App() {
  const [serverList, setServerList] = useState([])
  useEffect(()=>{
    async function serverL() {
      const serv = await fetch('https://api.cloudsell.ru/servers/list')
      const s = await serv.json()
      console.log(s)
      setServerList(s)
    }
    serverL()
  }, [])
  console.log(serverList)
  return (
    <div className='main'>
        <div className='falseHead'></div>
        <Header/>
      {serverList.map((s)=> {return <CardModule key={s.id} serverName={s.name} serverPrice={parseInt(s.price)} serverFeature={[s.features.cores, parseInt(s.features.core_frequency).toFixed(1) , s.features.ram, s.features.ram_type, s.features.disk, s.features.disk_type, parseInt(s.features.network_speed)]}/>})}
    </div>
  );
}

export default App
