import "../assets/css/loginForm.css";
import axios from "axios";
import {useNavigate} from "react-router";
import {useState} from "react";
import {Link} from "react-router-dom";
export default function LoginForm(){

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
        axios.post('/api/login', formData)
            .then(response => {
                console.log('Erfolgreich gesendet:', response.data);
                navigate('/kurse');
            })
            .catch(error => {
                console.error('Fehler beim Senden:', error);
            })}



        return(
            <div className="form-container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input onChange={handleChange} type="text" id="username" name="username" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input onChange={handleChange} type="password" id="password" name="password" required/>
                    </div>
                    <div className="form-group">
                        <button type="submit">Login</button>
                    </div>
                    <a className={"form-group"} href="/">
                        <button type="button">Ich habe keinen Account</button>
                    </a>
                </form>
            </div>
        )
}



