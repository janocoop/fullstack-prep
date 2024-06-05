import {useState} from "react";
import axios from "axios";

interface AccordionContentProps {
    content: string;
    themeid: string;
    answer: string;
}

export default function AccordionContent(props: AccordionContentProps) {
    const [userInput, setuserinput] = useState<string>(props.answer)
    const handleSave = () => {
        axios.post(`/api/kurse/themen/${props.themeid}/task/submit/${props.content}/${userInput}`).then(console.log)
    }

if (props.answer) {
    return (
        <div>
            <div className={"content"}>
                {props.content}
            </div>
            <div className={"form-group"}>
                {props.answer}
            </div>
        </div>

    );

}
else {
    return (
        <div>
            <div className={"content"}>
                {props.content}
            </div>
            <div className={"form-group"}>
                <input type={"text"} value={userInput} onChange={(e) => {
                    setuserinput(e.target.value);
                }}/>

                <button onClick={handleSave}>
                    speichern
                </button>
            </div>
        </div>

    );
}


}