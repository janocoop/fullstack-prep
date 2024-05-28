
import {useState} from "react";
import {useParams} from "react-router";
import axios from "axios";


export default function CourseTaskCreateView() {
    const {kursid, dayid, themeid} = useParams();
    const [formData, setFormData] = useState({
        title: "",
        description: ""

    });


    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
        axios.post("/api/kurse/" + kursid + "/days/" + dayid + "/themen/" + themeid + "/task/create", formData)
            .then(response => {
                console.log('Erfolgreich gesendet:', response.data);
            })
            .catch(error => {
                console.error('Fehler beim Senden:', error);
            })
    }

    return (<div>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        name="title"
                        placeholder="Titel"
                        value={formData.title}
                        onChange={handleChange}
                    />
                    <textarea name={"description"}
                              placeholder={"Beschreibung"}
                              value={formData.description}
                              onChange={handleChange}
                              style={{ marginTop: '10 px' }}
                    />

                </div>

                <div className="form-group">
                    <button type="submit">Speichern</button>
                </div>
            </form>
            <div className="form-group">
                <a href={"/kurse/"+kursid+"/days/"+dayid+"/themen/"+themeid}>
                    <button type="button">Themenübersicht</button>
                </a>
            </div>
        </div>
    );
}