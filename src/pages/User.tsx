import BottomBar from "../components/BottomBar";
import TopBar from "../components/TopBar";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function User() {
    return (
        <main>
            <TopBar
                title="Usuario"
            ></TopBar>

            <div style={{ marginTop: "4rem" }}>
                <div className="text-center" style={{ fontSize: "8rem" }}>
                    <FontAwesomeIcon icon={faCircleUser} />
                </div>

                <form action="" className="form-control">
                    <div className="m-2">
                        <label htmlFor="" className="h4">Nombre:</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="m-2 mt-4 mb-4">
                        <label htmlFor="" className="h2">Actualizar contraseña:</label>
                        <input type="text" className="form-control" />
                    </div>

                    <center className="mb-4">
                        <input type="button" value="Actualizar datos" className="btn-app" />
                    </center>
                </form>

                <div className="form-control mt-4" style={{textAlign: "right"}}>
                    <button
                        className="btn btn-link"
                        style={{ color: "black" }}
                    >
                        Eliminar cuenta
                    </button>
                </div>
            </div>

            <BottomBar></BottomBar>
        </main>
    );
}
export default User;