import { useEffect, useState } from 'react'
import './App.css'
import CardModule from './Components/CardModule'
import Header from './Components/Header'
import AuthWindow from './Components/AuthWindow'
import SideBar from './Components/SideBar'

function App() {
  const [serverList, setServerList] = useState([])
  const [filteredServerList, setFilteredServerList] = useState([]);
  useEffect(() => {
    const fetchServers = async () => {
      try {
        const response = await fetch('https://api.cloudsell.ru/servers/list');
        const data = await response.json();
        setServerList(data);
        setFilteredServerList(data);
      } catch (error) {
        console.error('Error fetching server list:', error);
      }
    };
    fetchServers();
  }, []);
  // console.log(filteredServerList,serverList)
  
  const filterServers = (search) => {
    const filtered = serverList.filter(server => 
      server.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredServerList(filtered);
  };
  console.log(filteredServerList)
  // if(filteredServerList.length===0){
  //   setFilteredServerList(serverList)
  //   console.log(filteredServerList)
  // }
  return (
    <div className='main'>
        <AuthWindow/>
        
        
        <SideBar/>
        <Header onSearch={filterServers}>
          
        </Header>
        <div className='mainContent'>{filteredServerList==0?<p className='error'>Сервера не найдены!</p>:filteredServerList.map((s)=> {return <CardModule key={s.id} serverName={s.name} serverPrice={parseInt(s.price)} serverFeature={[s.features.cores, parseInt(s.features.core_frequency).toFixed(1) , s.features.ram, s.features.ram_type, s.features.disk, s.features.disk_type, parseInt(s.features.network_speed)]}/>})}</div>
        
    </div>  
  );
}

export default App
