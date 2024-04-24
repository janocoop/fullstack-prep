type Course = {
    kursName: string,
    kursTage: string,
    kursAufgaben: string
}
interface CourseListProps {
    data: Course[]
}
export default function CourseList ({data} : CourseListProps) {
    return (
        <div className="form-container">
            {data.map((course, index) => (
                <div key={index}>
                    {course.kursName} - {course.kursTage} - {course.kursAufgaben}
                </div>
            ))}
        </div>

    )

}