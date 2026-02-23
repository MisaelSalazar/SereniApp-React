import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserLock } from '@fortawesome/free-solid-svg-icons'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="login-body">

            <div className="container vh-100 d-flex justify-content-center align-items-center">

                <div className="card shadow p-4">
                    <div className=" text-center mb-4">
                        <h2 className="fw-bold text-primary">Bienvenido</h2>
                        <p className="text-muted">Inicia Sesión en SerenitiApp</p>
                    </div>

                    <form action="">

                        <div className="input-group flex-nowrap mb-3">
                            <span className="input-group-text" id="addon-wrapping">
                                <FontAwesomeIcon icon={faUserLock} />
                            </span>
                            <input type="text" className="form-control" placeholder="Usuario" aria-label="Usuario"
                                aria-describedby="addon-wrapping"></input>
                        </div>
                        <div className="input-group flex-nowrap mb-3">
                            <span className="input-group-text" id="addon-wrapping">
                                <FontAwesomeIcon icon={faKey} />
                            </span>
                            <input type="password" className="form-control" placeholder="Contraseña" aria-label="Contraseña"
                                aria-describedby="addon-wrapping"></input>
                        </div>

                        <div className="d-grid mb-3">
                            <button type="submit" className="btn btn-primary">
                                Iniciar Sesión
                            </button>
                        </div>

                        <div className="text-center">
                            <a href="#" className="text-decoration-none">¿Olvidaste tu contraseña?</a>
                            <br />
                            <Link to={"/home"}>Entrada provisonal</Link>
                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
}

export default Login;