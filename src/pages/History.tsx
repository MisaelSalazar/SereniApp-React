import BottomBar from "../components/BottomBar";
import TopBar from "../components/TopBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmileBeam, faHeartCircleCheck } from "@fortawesome/free-solid-svg-icons";

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

import { PieChart, Pie, Tooltip, Legend } from "recharts";

const data = [
    { name: "Completado", value: 80 },
    { name: "Pendiente", value: 20 },
];

function History() {
    return (
        <main>
            <TopBar
                title="Historial"
            ></TopBar>

            <div style={{ marginTop: "4rem" }}>

                <div className="form-control text-center">
                    <div className="h5">¡Mantienes una racha de 3 días estables!</div>
                </div>
                <div className="form-control mt-4">
                    <FullCalendar
                        plugins={[dayGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        events={[
                            { title: 'Evento 1', date: '2026-03-05' },
                            { title: 'Evento 2', date: '2026-03-12' }
                        ]}
                    />
                </div>
                <div className="form-control mt-4">
                    <div className="h5">Detalles del día</div>
                    <PieChart width={400} height={300}>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            label
                        >
                            {/* {data.map((entry, index) => (
                            <Cell key={index} />
                        ))} */}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </div>

                <div className="form-control mt-4" style={{marginBottom: "6rem"}}>
                    <div className="h5">Logros de la semana</div>

                    <div className="row text-center">
                        <div className="col-6">
                            <div className="alert alert-success" style={{height: "10rem"}}>
                                <FontAwesomeIcon icon={faFaceSmileBeam} style={{fontSize: "4rem"}}/>
                                <br />
                                Tuviste un día emocionalmente estable
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="alert alert-danger" style={{height: "10rem"}}>
                                <FontAwesomeIcon icon={faHeartCircleCheck} style={{fontSize: "4rem"}}/>
                                <br />
                                Tu nivel de estres bajó
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <BottomBar></BottomBar>
        </main>
    );
}

export default History;