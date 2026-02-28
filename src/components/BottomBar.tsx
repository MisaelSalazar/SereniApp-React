import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faChartLine, faHome } from "@fortawesome/free-solid-svg-icons";

function BottomBar() {
    return (
        <div className="bottom-container row">
            <div className="col-4">
                <FontAwesomeIcon
                    icon={faHeart}
                    style={{ 
                        fontSize: "1.5rem",
                        paddingTop: "1rem",
                    }}
                />
                <div>Mi Estado</div>
            </div>
            <div className="col-4">
                <div style={{
                    background: "linear-gradient(to bottom, #fcd34d, #f59e0b)",
                    borderRadius: "5rem",
                    paddingTop: "0.5rem",
                }}>
                    <FontAwesomeIcon
                        icon={faHome}
                        style={{
                            fontSize: "1.5rem",
                        }}
                    />
                    <div>Inicio</div>
                </div>
            </div>
            <div className="col-4">
                <FontAwesomeIcon
                    icon={faChartLine}
                    style={{ 
                        fontSize: "1.5rem",
                        paddingTop: "0.5rem" 
                    }}
                />
                <div>Progreso</div>
            </div>

        </div>
    );
}

export default BottomBar;