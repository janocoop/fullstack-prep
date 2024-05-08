import {useParams} from "react-router";
import {useEffect, useState} from "react";
import axios from "axios";

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
    id:number,
    kursName:string,
    kursTage:kursTag[],
}

export default function CourseDetailView() {
    const params = useParams();
    const id: string | undefined = params.kursid
    const [kurs, setkurs] = useState<kursModel>();

    useEffect(() => {
        axios.get("/api/kurse/"+id).then((res)=>{
            console.log(res.data);

            setkurs(res.data);
        })
    }, [])

    return(
        <div>
            <div>
                {kurs?.kursName}
            </div>
            <div>
                {kurs?.kursTage.map((kursTag,index)=> (
                    <span key={index}>
                        {kursTag.kursTag}
                    </span>
                ))}
            </div>
        </div>
    );
}