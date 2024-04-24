import { useState } from "react";
import axios from "axios";

export default function CourseCreateView() {
    const [formData, setFormData] = useState({
        kursName: "",
        kursAufgabe: "",
        kursTage: ""
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

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return (
        <div style={{
            backgroundColor: "#f7a101",
            border: '20px solid #a84d00',
            borderRadius: '10px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '80vh',
            width: '150vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
        }}>
            <h4 style={{ fontSize: '2rem', fontWeight: 'bold', textDecoration: 'underline', marginBottom: '20px' }}>Kurs erstellen</h4>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="kursName"
                    placeholder="Kursname"
                    value={formData.kursName}
                    onChange={handleChange}
                    style={{
                        fontSize: '1rem',
                        padding: '10px',
                        marginBottom: '20px',
                        backgroundColor: '#ed6e00',
                        color: 'black',
                        border: '1px solid black',
                        borderRadius: '5px',
                        width: '100%',
                        boxShadow: "2px 3px 4px rgba(0, 0, 0, 0.1)",
                    }}
                />
                <input
                    type="text"
                    name="kursTage"
                    placeholder="Kurstage"
                    value={formData.kursTage}
                    onChange={handleChange}
                    style={{
                        fontSize: '1rem',
                        padding: '10px',
                        marginBottom: '20px',
                        backgroundColor: '#ed6e00',
                        color: 'black',
                        border: '1px solid black',
                        borderRadius: '5px',
                        width: '100%',
                        boxShadow: "2px 3px 4px rgba(0, 0, 0, 0.1)",
                    }}
                />
                <textarea
                    name="kursAufgabe"
                    placeholder="Kursaufgaben"
                    value={formData.kursAufgabe}
                    onChange={handleChange}
                    style={{
                        fontSize: '1rem',
                        padding: '10px',
                        marginBottom: '50px',
                        backgroundColor: '#ed6e00',
                        color: 'black',
                        border: '1px solid black',
                        borderRadius: '5px',
                        width: '100%',
                        height: '50%',
                        boxShadow: "2px 3px 4px rgba(0, 0, 0, 0.1)",
                    }}
                />
                <button type="submit" style={{
                    backgroundColor: "#ed6e00",
                    padding: "10px",
                    borderRadius: "5px",
                    boxShadow: "2px 3px 4px rgba(0, 0, 0, 0.1)",
                    fontSize: '1rem',
                    fontWeight: 'bold',
                }}>
                    Speichern
                </button>
            </form>
        </div>
    );
}
