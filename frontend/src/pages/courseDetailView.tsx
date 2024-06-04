import {useLocation} from "react-router";

import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";

export type kursLektion = {
    id: number,
    content: string
}

export type kursAufgabe = {
    id: number,
    description: string,
    answer: string
}

export type kursThema = {
    id: number,
    name: string
    lektion: kursLektion,
    kursAufgaben: kursAufgabe[]
}

export type kursTag = {
    kursTag: string,
    id: number,
    positon: string,
    kursThemen: kursThema[]
}

export type kursModel = {
    id: number,
    kursName: string,
    kursTage: kursTag[],
}

export default function CourseDetailView() {
    const [kurs, setKurs] = useState<kursModel>()
    const {state} = useLocation();
    useEffect(() => {
        axios.get("/api/kurse").then((res: AxiosResponse<kursModel[]>) => {
            res.data.forEach((data: kursModel) => {
                if (data.id == state){
                    setKurs(data)
                }
            })
            })
    }, []);


    return (<>
            <div className={"form-container"}>
                <h1>
                    {kurs?.kursName}
                </h1>
                {kurs?.kursTage.map((kursTag: kursTag, index: number) =>  (
                    <Link to={"/kurse/" + state + "/days/" + kursTag.id} key={index} state={kursTag}>
                        <div className={"card"}>
                    <span >
                        {kursTag.kursTag}
                    </span>
                        </div>
                    </Link>
                ))}

            </div>
            <Link className={"form-group"} to={"/kurse/"}>
                <button type="button">zurück</button>
            </Link>
        </>
    );
}
