import "../assets/css/courseList.css";

type Course = {
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
        <div className="cards-container">
            {data.map((course, index) => (
                <a href= {"/kurse/"+course.id}>
                    <div className="card" key={index}>
                        <div>{course.kursName}</div>
                    </div>
                </a>


            ))}

        </div>


    )

}