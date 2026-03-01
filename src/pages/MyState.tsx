import BottomBar from "../components/BottomBar";
import TopBar from "../components/TopBar";
import { useState } from "react";

function MyState() {

    const [value, setValue] = useState(2);

    return (
        <main>

            <TopBar
                title="Estado"
            ></TopBar>

            <div style={{ marginTop: "4rem" }}>
                <div className="align-items-center text-center">
                    <img src="/logo.png" alt="Logo" style={{ width: "8rem", borderRadius: "5rem" }} />
                </div>

                <div className="form-control mt-4">
                    <div className="text-center">Aquí estoy para ti, vamos a revisar tu estado con calma</div>
                </div>

                <form action="" className="mt-4">

                    <div className="form-control">

                        <div className="row">
                            <div className="col-6">
                                <label htmlFor="">¿Cómo te sientes hoy?</label>
                            </div>
                            <div className="col-6">
                                <select name="" id="" className="form-control">
                                    <option value="">😄 Feliz</option>
                                    <option value="">😌 Tranquilo</option>
                                    <option value="">😐 Neutral</option>
                                    <option value="">😰 Ansioso</option>
                                    <option value="">😢 Trieste</option>
                                </select>
                            </div>
                        </div>

                        <div className="row mt-4">

                            <label htmlFor="">Nivel de estrés</label>
                            <center>
                                <input
                                    type="range"
                                    min="1"
                                    max="3"
                                    step="1"
                                    value={value}
                                    onChange={(e) => setValue(Number(e.target.value))}
                                    style={{ width: "95%" }}
                                />
                            </center>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <span>Bajo</span>
                                <span>Medio</span>
                                <span>Alto</span>
                            </div>

                        </div>

                    </div>

                    <div className="form-control mt-4">
                        <div className="h2">Mi momento para mí</div>

                        <input
                            type="text"
                            name=""
                            id=""
                            className="form-control"
                            placeholder="¿Qué emoción me acompañó?"
                        />

                        <input
                            type="text"
                            name=""
                            id=""
                            className="form-control mt-3"
                            placeholder="¿Qué nudo debo soltar?"
                        />

                        <input
                            type="text"
                            name=""
                            id=""
                            className="form-control mt-3"
                            placeholder="¿Quién me hizo sonreir?"
                        />

                        <input
                            type="text"
                            name=""
                            id=""
                            className="form-control mt-3 mb-3"
                            placeholder="¿Por qué doy gracias?"
                        />

                    </div>

                    <div className="form-control mt-4">
                        <div className="h2">
                            Un espacio para reflexionar
                        </div>

                        <textarea
                            name=""
                            id=""
                            className="form-control mb-3"
                            placeholder="Escribeme libremente sobre tu día"
                        ></textarea>
                    </div>

                    <center className="mt-4" style={{ marginBottom: "6rem" }}>
                        <input type="button" value="Guardar mi reflexión" className="btn-app" />
                    </center>

                </form>

                <BottomBar></BottomBar>
            </div>

        </main>
    );
}

export default MyState;