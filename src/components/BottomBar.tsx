import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faChartLine, faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function BottomBar() {
    return (
        <div className="bottom-container row">
            <div className="col-4">
                <Link to={"/state"} className="link-dark link-underline-opacity-0">
                    <FontAwesomeIcon
                        icon={faHeart}
                        style={{
                            fontSize: "1.5rem",
                            paddingTop: "1rem",
                        }}
                    />
                    <div>Mi Estado</div>
                </Link>
            </div>
            <div className="col-4">
                <div style={{
                    background: "linear-gradient(to bottom, #fcd34d, #f59e0b)",
                    borderRadius: "5rem",
                    paddingTop: "0.5rem",
                }}>
                    <Link to={"/home"} className="link-dark link-underline-opacity-0">
                        <FontAwesomeIcon
                            icon={faHome}
                            style={{
                                fontSize: "1.5rem",
                            }}
                        />
                        <div>Inicio</div>
                    </Link>
                </div>
            </div>
            <div className="col-4">
                <Link to={"#"} className="link-dark link-underline-opacity-0">
                    <FontAwesomeIcon
                        icon={faChartLine}
                        style={{
                            fontSize: "1.5rem",
                            paddingTop: "0.5rem"
                        }}
                    />
                    <div>Progreso</div>
                </Link>
            </div>

        </div>
    );
}

export default BottomBar;