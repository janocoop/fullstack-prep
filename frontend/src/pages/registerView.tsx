
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router";

export default function RegisterView() {
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
        <div style={{
            backgroundColor: "white",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '80vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
        }}>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Benutzername"
                    name="username"
                    value={formData.username}
                    style={{
                        position: 'absolute',
                        top: '750px',
                        left: '5px',
                        fontSize: '2em',
                        padding: '20px 10px',
                        backgroundColor: '#ed6e00',
                        color: 'black',
                        border: '1px solid black',
                        borderRadius: '1px',
                    }}
                    onChange={(event) => handleChange(event)}
                />
                <a style={{marginTop: '1px'}}>
                    <img
                        src="https://cdn2-assets.baam.ch/uploads/logo_image_item/file/ccc0aa1b81bf81e16c676ddb977c5881/1483613215/coop-logo-talendo.png"/>
                </a>
                <input
                    type="password"
                    placeholder="Passwort"
                    name="password"
                    value={formData.password}
                    style={{
                        position: 'absolute',
                        top: '750px',
                        right: '5px',
                        fontSize: '2em',
                        padding: '20px 10px',
                        backgroundColor: '#f7a101',
                        color: 'black',
                        border: '1px solid black',
                        borderRadius: '1px',
                    }}
                    onChange={handleChange}
                />
                <button style={{
                    position: 'absolute',
                    top: '950px',
                    left: '300px',
                    fontSize: '2em',
                    padding: '20px 20px',
                    backgroundColor: '#a84d00',
                    color: 'white',
                    border: 'black',
                    borderRadius: '20px',
                    boxShadow: "2px 3px 4px rgba(0, 0, 0, 0.1)",
                }}>Account Erstellen
                </button>
            </form>
        </div>
    );
}
