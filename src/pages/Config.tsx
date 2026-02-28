import { Link } from "react-router-dom";
import BottomBar from "../components/BottomBar";
import TopBar from "../components/TopBar";
import { faArrowRight, faCircleUser, faCloud } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Config() {
    return (
        <main>
            <TopBar
                title="Ajustes"
                rightIcon={faCircleUser}
                rightLink="#"
            ></TopBar>

            <form action="" className="form-control m-4" style={{ width: "90%" }}>
                <label htmlFor="" className="h2">Preferencias de la App</label>

                <div className="row mt-4">
                    <div className="col-6">
                        <label htmlFor="">Tamaño fuente</label>
                    </div>
                    <div className="col-6">
                        <select name="" id="" className="form-control">
                            <option value="">Por defecto</option>
                            <option value="">Mediana</option>
                            <option value="">Grande</option>
                        </select>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-6">
                        <label htmlFor="">Recordatorios diarios</label>
                    </div>
                    <div className="col-6">
                        <select name="" id="" className="form-control">
                            <option value="">Seleccione</option>
                            <option value="">Si</option>
                            <option value="">No</option>
                        </select>
                    </div>
                </div>

                <center className="mt-3 mb-3">
                    <input type="button" value="Guardar cambios" className="btn-app" />
                </center>

            </form>

            <div className="form-control m-4" style={{ width: "90%" }}>
                <div className="h2">Seguridad y privacidad</div>
                <br />
                <Link to={"#"} className="link-dark link-underline-opacity-0 row mb-2">
                    <div className="col-1">
                        <FontAwesomeIcon icon={faCloud} />
                    </div>
                    <div className="col-9">
                        Guardar información en la nube
                    </div>
                    <div className="col-1">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </Link>
            </div>

            <div className="form-control m-4" style={{ width: "90%" }}>
                <div className="h2">Soporte</div>
                <br />
                <Link to={"#"} className="link-dark link-underline-opacity-0 row mb-2">
                    <div className="col-10">
                        Envíanos un mensaje
                    </div>
                    <div className="col-1">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </Link>
                <Link to={"#"} className="link-dark link-underline-opacity-0 row mb-2">
                    <div className="col-10">
                        Preguntas frecuentes
                    </div>
                    <div className="col-1">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </Link>
                <br />
                <div className="link-dark link-underline-opacity-0 row mb-2">
                    <div className="col-10">
                        Versión de la app
                    </div>
                    <div className="col-1">
                        V0.1
                    </div>
                </div>
            </div>

            <BottomBar></BottomBar>

        </main>
    );
}

export default Config;