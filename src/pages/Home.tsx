import Card from "../components/Card";
import { faHeart, faChartLine, faGear } from "@fortawesome/free-solid-svg-icons";

function Home() {
    return (
        <main>
            <h1 className="text-center fw-bold mt-4 mb-3">Menú Principal</h1>

            <div className="align-items-center text-center">
                <img src="/logo.png" alt="Logo" style={{ width: "8rem", borderRadius: "5rem" }} />
            </div>

            <h3 className="text-center mb-4 mt-3">"Estoy aquí para ayudarte, ¿Cómo te sientes hoy?"</h3>

            <Card url="/state" icon={faHeart} title={"Mi Estado"} />
            <Card url="/history" icon={faChartLine} title={"Historial / Progreso"} />
            <Card url="/config" icon={faGear} title={"Configuración"} />

        </main>
    );
}

export default Home;