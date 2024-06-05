import {useLocation, useParams} from "react-router";
import {useEffect} from "react";
import Markdown from "react-markdown";
import CourseAccordion from "../components/courseAccordion.tsx";
import AccordionContent from "../components/AccordionContent.tsx";
import {kursAufgabe} from "./courseDetailView.tsx";
import {Link} from "react-router-dom";

export default function CourseAufgabenLektionenPage() {
    const {state} = useLocation();
    const {kursid, dayid, themeid} = useParams();

    useEffect(() => {
        console.log(state)
    }, []);

    return (
        <div>

        <div className={"themepage-container"}>
            <h1>{state.name}</h1>
            <div className={"lektion"}>
                <h1 style={{ color: '#EB6D00FF' }}>Lektion</h1>
                <Markdown>{state.lektion?.content}</Markdown>

                <Link className={"form-group"} to={"/kurse/" + kursid + "/days/" + dayid + "/themen/" + themeid + "/lektion/create"}>
                    <button type="button">Lektion Erstellen</button>
                </Link>
            </div>
            <div className={"tasks"}>
                <h1 style={{ color:'#f2a200' }}>Aufgaben</h1>
                {state.aufgaben.map((kursAufgabe: kursAufgabe, index: number) => (
                    <CourseAccordion key={index} title={kursAufgabe.description} content={<AccordionContent content={kursAufgabe.description} themeid={themeid + ""} answer={kursAufgabe.answer}/>}/>

                ))}
                <Link className={"form-group"} to={"/kurse/" + kursid + "/days/" + dayid + "/themen/" + themeid + "/task/create"}>
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
