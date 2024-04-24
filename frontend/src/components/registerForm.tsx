import "../assets/css/loginForm.css";
import {useNavigate} from "react-router";
import {useState} from "react";
import axios from "axios";

export default function RegisterForm() {

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
        axios.post('/api/accounts/create', formData)
            .then(response => {
                console.log('Erfolgreich gesendet:', response.data);
                navigate('/login');
            })
            .catch(error => {
                console.error('Fehler beim Senden:', error);
            })

    }

    return (


        <div className="form-container">
            <h2>Registrierung</h2>
            <form onSubmit={handleSubmit} >


                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input onChange={handleChange} type="text" id="username" name="username" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input onChange={handleChange} type="password" id="password" name="password" required/>
                </div>
                <div className="form-group">
                    <button type="submit">Registrierung</button>
                </div>
            </form>
        </div>

    )
}