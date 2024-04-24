import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router";

export default function Kurse() {

    const [formData, setFormData] = useState({
        kursname: "",
        kursaufgabe: "",
        kurstage: ""
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
        axios.post('/api/kurse/createkurs', formData)
            .then(response => {
                console.log('Erfolgreich gesendet:', response.data);
            })
            .catch(error => {
                console.error('Fehler beim Senden:', error);
            })
    }
    return (
        <div style={{
            backgroundColor: "#f7a101",
            border: '20px solid #a84d00',
            borderRadius: '10px',
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
            <h4 style={{ fontSize: '2rem', fontWeight: 'bold',textDecoration: 'underline', top: '10px' }}>Kurs erstellen</h4>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Kursname"
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
                    }}/>
                <button type="submit"/>
            </form>

        </div>
    );
}
