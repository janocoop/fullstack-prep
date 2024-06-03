import {useLocation, useParams} from "react-router";
import {useEffect, useState} from "react";
import axios from "axios";
import Markdown from "react-markdown";
import CourseAccordion from "../components/courseAccordion.tsx";
import AccordionContent from "../components/AccordionContent.tsx";
import {kursAufgabe} from "./courseDetailView.tsx";

export default function CourseAufgabenLektionenPage() {
    const {state} = useLocation();
    const [currentState, setCurrentState] = useState(state);
    const {kursid, dayid, themeid} = useParams();
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
    if (!themeid) {return <></>;}


    return (
        <div>
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
                {currentState?.kursAufgaben.map((kursAufgabe: kursAufgabe) => (
                    <CourseAccordion title={kursAufgabe.description} content={<AccordionContent content={kursAufgabe.description} themeid={themeid} answer={kursAufgabe.answer}/>}/>

                ))}
                <a className={"form-group"} href={"/kurse/" + kursid + "/days/" + dayid + "/themen/" + themeid + "/task/create"}>
                    <button type="button">Aufgabe Erstellen</button>
                </a>

            </div>
        </div>
    <a className={"form-group"} href={"/kurse/" + kursid + "/days/" + dayid}>
        <button type="button">zurück</button>
    </a>
        </div>
    );
}
