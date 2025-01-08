
import { useState } from 'react'
import icon from './icon.png'
export default function Header(){
    const [open,setOpen] = useState(true)
    const a = document.querySelector('dialog')
    const showModal = () => {
        a.showModal();
    }
    return(
        <header>
            <img src={icon} alt="" className='icon'/>
            <input type="text" className="falseinput"/>
            <button onClick={showModal} className='signin'>Войти</button>
        </header>
    )
}