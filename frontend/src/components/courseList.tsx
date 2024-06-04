import "../assets/css/courseList.css";
import {Link} from "react-router-dom";

export type Course = {
    kursName: string,
    kursTage: string,
    kursAufgaben: string,
    id: number
}

interface CourseListProps {
    data: Course[]
}

export default function CourseList({data}: CourseListProps) {
    return (
        <div className="form-container">
            {data.map((course, index) => (
                <Link to = {"/kurse/"+course.id}  state={course.id} key={index}>
                    <div className="card" key={index}>
                        <div>{course.kursName}</div>
                    </div>
                </Link>


            ))}
            <a className={"form-group"} href={"/kurse/erstellen"}>
                <button type="button">Kurs Erstellen</button>
            </a>

        </div>


    )

}