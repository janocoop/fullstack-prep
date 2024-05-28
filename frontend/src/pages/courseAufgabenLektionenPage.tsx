import {Link} from "react-router-dom";
import {useLocation, useParams} from "react-router";
import {useEffect, useState} from "react";
import axios from "axios";
import Markdown from "react-markdown";
import CourseAccordion from "../components/courseAccordion.tsx";
import AccordionContent from "../components/AccordionContent.tsx";

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
        <div className={"themepage-container"}>
            <h1>{currentState?.name}</h1>
            <div className={"lektion"}>
                <h1 style={{ color: '#EB6D00FF' }}>Lektion</h1>
                <Markdown>{currentState?.lektion.content}</Markdown>

                <a className={"form-group"} href={"/kurse/" + kursid + "/days/" + dayid + "/themen/" + themeid + "/lektion/create"}>
                    <button type="button">Lektion Erstellen</button>
                </a>
            </div>
            <div className={"tasks"}>
                <h1 style={{ color:'#f2a200' }}>Aufgaben</h1>
                {currentState?.aufgaben.map((kursAufgabe, index) => (
                    <CourseAccordion title={kursAufgabe.title} content={<AccordionContent content={kursAufgabe.description}/>}/>

                ))}
                <a className={"form-group"} href={"/kurse/" + kursid + "/days/" + dayid + "/themen/" + themeid + "/task/create"}>
                    <button type="button">Aufgabe Erstellen</button>
                </a>

            </div>
        </div>
    );
}
