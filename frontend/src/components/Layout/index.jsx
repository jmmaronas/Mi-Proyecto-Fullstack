import Container from "../Container/Container"




export default function Layout() {
    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center bg-secondary-subtle py-5">
                <div className="d-flex">
                    <img className="col-md-3 col-6 border border-4 border-success-subtle rounded-circle shadow  mb-5 bg-body-tertiary m-auto " src="/images/yo.png" alt="yo.jpg" />
                </div>
                <p className="h4 lh-base fw-light col-md-6 text-success text-center text-shadow">
                    Buenas!! Soy Juan Manuel, soy Tecnico en Programcaion en proceso, me capacito de forma autodidacta, estoy cursando la Tecnicatura en Programcacion en Teclab, me focalizo en el Stack MERN, mi pricipales certificaciones son la carrera de FullStack en CoderHouse, y el Job Ready de Alkemy
                </p>
            </div>
            <Container/>
        </>
    )
}