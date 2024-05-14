import {useState} from "react";
import axios from "axios";
import "../assets/css/courseCreateView.css";
import {useParams} from "react-router";

export default function CourseThemeCreateForm() {

    const {kursid, dayid} = useParams()
    const [formData, setFormData] = useState({
        themaName: "",
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
        axios.post('/api/kurse/'+kursid+"/days/"+dayid+"/themen/create", formData)
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
                    name="themaName"
                    placeholder="Name vom Thema"
                    value={formData.themaName}
                    onChange={handleChange}

                />
                </div>

                <div className="form-group">
                <button type="submit">
                    Speichern
                </button>

                </div>
                <a className={"form-group"} href="/kurse">
                    <button type="button">Themenübersicht</button>
                </a>
            </form>
        </div>
    )

}