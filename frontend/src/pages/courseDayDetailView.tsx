import {useParams} from "react-router";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {kursTag, kursThema} from "./courseDetailView.tsx";


export default function CourseDayDetailView() {
    const {kursid, dayid} = useParams();
    const [kurs, setKurs] = useState<kursTag>()

    useEffect(() => {
        axios.get("/api/kurse/"+kursid+"/days/"+dayid)
            .then((res) => {
                setKurs(res.data)
            } )
            .catch(err => console.log(err))
    })

    return (
        <div>
        <div className={"form-container"}>
            <h1>
                Themen
            </h1>

            <a href={"/kurse/"+kursid+"/days/"+dayid+"/themen/erstellen"} className={"form-group"}>
                    <button type="button">Thema Erstellen</button>
            </a>
            {kurs?.kursThemen.map((thema: kursThema, index: number) => (
                <Link to={"/kurse/" + kursid + "/days/" + dayid + "/themen/" + thema.id} key={index} state={thema}>
                    <div className={"card"}>
                    <span >
                        {thema.name}
                    </span>
                    </div>
                </Link>
            ))}


        </div>
    <Link className={"form-group"} to={"/kurse/" + kursid } state={kursid}>
        <button type="button">zurück</button>
    </Link>
    </div>
    );
}

