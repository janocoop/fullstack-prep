import {useLocation, useParams} from "react-router";
import {Link} from "react-router-dom";

export default function CourseDayDetailView() {
    const {kursid, dayid} = useParams();
    const {state} = useLocation();
    return (
        <div className={"form-container"}>
            <h1>
                Themen
            </h1>

            <a href={"/kurse/"+kursid+"/days/"+dayid+"/themen/erstellen"} className={"form-group"}>
                    <button type="button">Thema Erstellen</button>
            </a>

            {state.kursThemen.map((thema, index) => (
                <Link to={"/kurse/" + kursid + "/days/" + dayid + "/themen/" + thema.id} key={index} state={thema}>
                    <div className={"card"}>
                    <span >
                        {thema.name}
                    </span>
                    </div>
                </Link>
            ))}


        </div>

    );
}

