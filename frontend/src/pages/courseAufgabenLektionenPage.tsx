import {Link} from "react-router-dom";
import {useLocation, useParams} from "react-router";
import {useEffect, useState} from "react";
import axios from "axios";

export default function CourseAufgabenLektionenPage() {
    const {kursid, dayid, themeid} = useParams();
    const {state} = useLocation();
    const [currentState, setCurrentState] = useState(state);

    useEffect(() => {
        console.log(currentState)
        if (!currentState) {
            axios.get(`/api/kurse/${kursid}/days/${dayid}/themen/${themeid}`)
                .then((res) => {
                    console.log(res.data);
                    setCurrentState(res.data)
                })
                .catch(err => console.error(err));
        }
    }, [kursid, dayid, currentState]);



    return (
        <div className="form-container">
            <h1>{currentState?.name}</h1>
            {currentState?.aufgaben.map((kursAufgabe, index) => (
                <Link to={"/kurse/" + kursid + "/days/" + dayid + "/themen/" + themeid + "/task/" + kursAufgabe.id}
                      key={index} state={kursAufgabe}>
                    <div className="card">
                        <span>{kursAufgabe.description}</span>
                    </div>
                </Link>
            ))}
        </div>
    );
}
