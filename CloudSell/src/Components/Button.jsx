import cart from './cart1.png';
export default function Button(){
    return(
        <button className="reverseButton">
            <img src={cart} alt="Нету" width='25px'/>
        </button>
    )
}