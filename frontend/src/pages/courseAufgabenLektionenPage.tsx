import {useLocation, useParams} from "react-router";
import {useEffect, useState} from "react";
import Markdown from "react-markdown";
import CourseAccordion from "../components/courseAccordion.tsx";
import AccordionContent from "../components/AccordionContent.tsx";
import {kursAufgabe} from "./courseDetailView.tsx";
import {Link} from "react-router-dom";
import axios from "axios";

export default function CourseAufgabenLektionenPage() {
    const {state} = useLocation();
    const {kursid, dayid, themeid} = useParams();
    const [currentState, setCurrentState] = useState(state);


    useEffect(() => {
        console.log("state: " + state)
        console.log("kursid:" + kursid + "dayid:" + dayid + "themeid" + themeid)
        axios.get("/api/kurse/" + kursid + "/days/" + dayid + "/themen/" + themeid)
            .then(res => {
             setCurrentState(res.data);
            })
            .catch(err => {console.log(err)})
    }, []);

    return (
        <div>

            <div className={"themepage-container"}>
                <h1>{currentState.name}</h1>
                <div className={"lektion"}>
                    <h1 style={{color: '#EB6D00FF'}}>Lektion</h1>
                    <Markdown>{currentState.lektion?.content}</Markdown>

                    <Link className={"form-group"}
                          to={"/kurse/" + kursid + "/days/" + dayid + "/themen/" + themeid + "/lektion/create"}>
                        <button type="button">Lektion Erstellen</button>
                    </Link>
                </div>
                <div className={"tasks"}>
                    <h1 style={{color: '#f2a200'}}>Aufgaben</h1>
                    {currentState.aufgaben.map((kursAufgabe: kursAufgabe, index: number) => (
                        <CourseAccordion key={index} title={kursAufgabe.description}
                                         content={<AccordionContent content={kursAufgabe.description}
                                                                    themeid={themeid + ""}
                                                                    answer={kursAufgabe.answer}/>}/>

                    ))}
                    <Link className={"form-group"}
                          to={"/kurse/" + kursid + "/days/" + dayid + "/themen/" + themeid + "/task/create"}>
                        <button type="button">Aufgabe Erstellen</button>
                    </Link>

                </div>
            </div>
            <Link className={"form-group"} to={"/kurse/" + kursid + "/days/" + dayid}>
                <button type="button">zurück</button>
            </Link>
        </div>
    );
}
