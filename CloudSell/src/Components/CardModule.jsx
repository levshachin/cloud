import cardicon from './cardicon.png';
export default function CardModule(props){
    return (
        <div className="card">
            <img src={cardicon} alt="Нету" width='50' height='50'/>
            <p>{props.serverName}</p>
            <p>{props.serverPrice} руб</p>
        </div>
    )
}