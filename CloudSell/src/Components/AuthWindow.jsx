
import { useEffect, useState } from 'react'
import close from './close.png'
export default function AuthWindow(){
    const b = document.querySelector('dialog')
    const closeModal = () => {
        b.close()
    }
    const[userdata,setUserdata] = useState({
        name: '',
        email: '',
        password: '',
        account_type: 'phisycal'
    })
    const handleSubmit = (e ) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password'),
            account_type: formData.get('account_type'),
        };
        setUserdata(data)
        console.log(userdata)
    }
    useEffect(()=>{
        async function postData() {
            const response=await fetch("https://auth.cloudsell.ru/auth/register", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(userdata),
              });
              const responseData = await response.json();

            if (response.ok) {
            console.log("Успешная регистрация:", responseData);
            } else {
            console.error("Ошибка:", responseData);  // Выводим ответ от сервера
            }            
        }
        postData();
    },[])
    return (
            
            
            <dialog>
                
                    <img src={close} alt="" width={40} className='close' onClick={closeModal}/>
               
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name"/>
                    <label htmlFor="email">Email:</label>
                    <input type="text" id='email' name="email"/>
                    <label htmlFor="password">Password:</label>
                    <input type="text" id="password" name="password"/>
                    <label htmlFor="account_type">Account Type</label>
                    <select name="account_type" id="account_type" style={{borderRadius:'1rem'}}>
                        <option value="physical">Physical</option>
                        <option value="company">Company</option>
                    </select>
                    <input type="submit" value="Войти" onClick={closeModal}/>
                </form>
            </dialog>
    )
}   