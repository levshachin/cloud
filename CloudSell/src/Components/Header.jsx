import icon from './icon.png'
export default function Header(){
    return(
        <header>
            <img src={icon} alt="" className='icon'/>
            <input type="text" className="falseinput"/>
            <div></div>
        </header>
    )
}