import {useLocation, useParams} from "react-router";

import {Link} from "react-router-dom";

type kursLektion = {
    id: number,
    content: string
}

type kursAufgabe = {
    id: number,
    description: string,
    answer: string
}

type kursThema = {
    id: number,
    name: string
    lektion: kursLektion,
    kursAufgaben: kursAufgabe[]
}

type kursTag = {
    kursTag: string,
    id: number,
    positon: string,
    kursThemen: kursThema[]
}

type kursModel = {
    id: number,
    kursName: string,
    kursTage: kursTag[],
}

export default function CourseDetailView() {
    const params = useParams();
    const {state} = useLocation();
    const id: string | undefined = params.kursid

    return (<>
            <div className={"form-container"}>
                <h1>
                    {state.kursName}
                </h1>
                {state.kursTage.map((kursTag, index) => (
                    <Link to={"/kurse/" + id + "/days/" + kursTag.id} key={index} state={kursTag}>
                        <div className={"card"}>
                    <span >
                        {kursTag.kursTag}
                    </span>
                        </div>
                    </Link>
                ))}

            </div>
            <a className={"form-group"} href={"/kurse/"}>
                <button type="button">zurück</button>
            </a>
        </>
    );
}
