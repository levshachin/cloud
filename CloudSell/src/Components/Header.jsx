
import { useState } from 'react'
import icon from './icon.png'
export default function Header({onSearch}){
    // const [open,setOpen] = useState(true)
    const [search, setSearch] = useState('')
    const a = document.querySelector('dialog')
    const showModal = () => {
        a.showModal();
    }
    const handleSearch = (e) => {
        const value = e.target.value;
        setSearch(value);
        onSearch(value);
      };
    
    return(
        <header>
            <img src={icon} alt="" className='icon'/>
            <input type='text' className='falseinput' value={search} onChange={handleSearch} placeholder="Поиск серверов..."/>
            <button onClick={showModal} className='signin'>Войти</button>
        </header>
    )
}