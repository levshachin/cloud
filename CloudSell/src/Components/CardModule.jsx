import { useState } from 'react';
import Button from './Button';
import cardicon from './cardicon.png';
import reverse from './reverse.png';
export default function CardModule({serverFeature, ...props}){
    const [Reverse, setReverse] = useState(false) 
    console.log(Reverse)
    const handleReverseClick = () => {
        setReverse(prevState => !prevState);
    };
    const hz = ['Cores', 'GHz', 'Mb', '', 'Mb', '', 'Mbps']
    return (
        <div className="card">
            {Reverse ? (
                <>
                    <div className='reversedCard'>
                        {serverFeature.map((f,i)=>{return <p key={i}>{f} {hz[i]}</p>})}
                    
                    
                    </div>
                    
                    <img
                        src={reverse}
                        alt="Реверс"
                        width="40px"
                        className="reverse"
                        onClick={handleReverseClick}
                    />
                </>
            ) : (
                <>
                    <img src={cardicon} alt="Нету" width="50" height="50" />
                    <p>{props.serverName}</p>
                    <p>{props.serverPrice} руб</p>
                    <Button />

                    <img
                        src={reverse}
                        alt="Реверс"
                        width="40px"
                        className="reverse"
                        onClick={handleReverseClick}
                    />
                </>
            )}
        </div>
    )
}