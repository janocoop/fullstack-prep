import {ReactNode, useState} from "react";

interface AccordionProps {
    title: string;
    content: ReactNode;

}

export default function CourseAccordion(props: AccordionProps) {
    const [isActive, setIsActive] = useState(false);


    return (
        <div className="accordion">
            <div className="accordion-item">
                <div
                    className="accordion-title"
                    onClick={() => setIsActive(!isActive)}
                >
                    <div>{props.title}</div>
                    <div>{isActive ? '-' : '+'}</div>
                </div>
                {isActive && <div className="accordion-content">{props.content}</div>}
            </div>
        </div>

    );
}