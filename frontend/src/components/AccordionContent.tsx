interface AccordionContentProps {
    content: string;

}

export default function AccordionContent(props: AccordionContentProps) {

    const handleSave = (event: Event) => {

        event.preventDefault();

    }


    return (
        <div>
            <div className={"content"}>
                {props.content}
            </div>
            <div className={"form-group"}>
                <input>

                </input>
                <button onClick={handleSave}>
                    speichern
                </button>
            </div>
        </div>

    );
}