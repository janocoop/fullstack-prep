import {useState} from "react";
import axios from "axios";
import "../assets/css/courseCreateView.css";
import {Link} from "react-router-dom";

export default function CourseCreateForm() {

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
        <div className="create-course-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <input
                    type="text"
                    name="kursName"
                    placeholder="Kursname"
                    value={formData.kursName}
                    onChange={handleChange}

                />
                </div>
                <div className="form-group">
                <input
                    type="number"
                    name="kursTage"
                    placeholder="Kurstage"
                    value={formData.kursTage}
                    onChange={handleChange}

                />
                </div>

                <div className="form-group">
                <button type="submit">
                    speichern
                </button>
                </div>
                <Link className={"form-group"} to="/kurse">
                    <button type="button">Kursübersicht</button>
                </Link>

            </form>
        </div>
    )

}