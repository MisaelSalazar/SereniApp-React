import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Link } from "react-router-dom";

interface CardProps {
    icon: IconDefinition;
    title: string;
    url: string;
}

function Card({ icon, title, url }: CardProps) {

    return (
        <Link to={url} style={{color: "black"}}>
            <div className="bg-light rounded-pill px-4 py-2 d-inline-flex align-items-center gap-2 shadow-sm w-100 p-2 m-2 align-middle">
                <div className="icon-circle d-flex align-items-center justify-content-center" style={{ width: "4rem", height: "4rem" }}>
                    <FontAwesomeIcon icon={icon} size="2x" />
                </div>

                <div className="fw-semibold align-middle ml-4">
                    <h4 className="ml-4">{title}</h4>
                </div>
            </div>
        </Link>
    );

}

export default Card;