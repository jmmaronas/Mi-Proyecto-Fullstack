import Container from "../Container/Container"
import './layout.css'

export default function Layout() {
    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center bg-secondary-subtle py-5">
                <div className="d-flex flex-column mb-5">
                    <img className="col-md-2 col-4 border border-4 border-success-subtle rounded-circle shadow  bg-body-tertiary m-auto " src="/images/yo.png" alt="yo.jpg" />
                    <h3 className="text-center">Tecnico en Programación(cursando)</h3>
                </div>
                <p className="parrafo h4 lh-base fw-light col-md-8 text-success text-center text-shadow">
                Buenas!! Soy Juan Manuel, vivo en San Miguel, Provincia de Bs. As., Argentina, soy Técnico en Programación en proceso, me capacito de forma autodidacta, estoy cursando la Tecnicatura en Programación en Teclab, me focalizo en el Stack MERN, mis principales certificaciones son la carrera de FullStack en CoderHouse, y el Job Ready de Alkemy
                </p>
                <p className="parrafo h4 lh-base fw-light col-md-8 text-success text-center text-shadow mt-3">
                Esta página es un proyecto FullStack de practica, el Backend lo hice con NodeJs, Express, JWT, bcryptjs, express-validator y multer. El Frontend con React, React Router, YUP, Axios, Sweet Alert y Bootstrap 
                </p>
            </div>
            <Container/>
        </>
    )
}