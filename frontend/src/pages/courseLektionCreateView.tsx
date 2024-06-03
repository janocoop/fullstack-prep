
import {useState} from "react";
import {useParams} from "react-router";
import axios from "axios";


export default function CourseLektionCreateView() {
    const {kursid, dayid, themeid} = useParams();
    const [formData, setFormData] = useState({
        content: "",

    });


    const handleChange = (name: string, value:string) => {
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
        axios.post("/api/kurse/" + kursid + "/days/" + dayid + "/themen/" + themeid + "/lektion/create", formData)
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
    <textarea
        name="content"
        placeholder="Beschreibung"
        value={formData.content}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
    />
                </div>

                <div className="form-group">
                    <button type="submit">Speichern</button>
                </div>
            </form>
            <div className="form-group">
                <a href={"/kurse/" + kursid + "/days/" + dayid + "/themen/" + themeid}>
                    <button type="button">Themenübersicht</button>
                </a>
            </div>

        </div>
    );
}