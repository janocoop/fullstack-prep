import {useLocation, useParams} from "react-router";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";


export default function CourseDayDetailView() {
    const {kursid, dayid} = useParams();
    const {state} = useLocation();
    const [currentState, setCurrentState] = useState(state);

    useEffect(() => {
        axios.get("/api/kurse/"+kursid+"/days/"+dayid)
            .then((res) => {
                setCurrentState(res.data);
            } )
            .catch(err => console.log(err))
    })

    return (
        <div className={"form-container"}>
            <h1>
                Themen
            </h1>

            <a href={"/kurse/"+kursid+"/days/"+dayid+"/themen/erstellen"} className={"form-group"}>
                    <button type="button">Thema Erstellen</button>
            </a>

            {currentState?.kursThemen.map((thema, index) => (
                <Link to={"/kurse/" + kursid + "/days/" + dayid + "/themen/" + thema.id} key={index} state={thema}>
                    <div className={"card"}>
                    <span >
                        {thema.name}
                    </span>
                    </div>
                </Link>
            ))}


        </div>

    );
}

