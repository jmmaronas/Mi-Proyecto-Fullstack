import { Card, Col, Row } from 'react-bootstrap/';

const proyects = [
    {
        id: "p1",
        title: "Proyecto Freelance",
        description: "Landing",
        image: "./images/Btrazer.PNG",
        linkUrl: "https://www.btrazer.com/"
    },
    {
        id: "p2",
        title: "Proyecto Freelance",
        description: "Landing",
        image: "./images/Chronos.PNG",
        linkUrl: "https://chronoscapacitaciones.org/"
    },
    {
        id: "p3",
        title: "Proyecto Freelance",
        description: "Landing",
        image: "./images/Mccorp.PNG",
        linkUrl: "http://mccorporationinc.com/"
    },
    {
        id: "p4",
        title: "Proyecto Freelance",
        description: "Landing",
        image: "./images/E-commerce.PNG",
        linkUrl: "https://jmmaronas.github.io/Practica-Ecommerce/"
    },
]


function Proyects() {
    return (
        <div className="container-fluid px-4 bg-dark-subtle py-5">
            <h1 className='text-center my-5'>Proyectos</h1>
            <Row xs={2} md={4} className="g-4">
                {proyects.map((proyect, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img style={{maxHeight:"12rem", objectFit:"cover"}} variant="top" src={proyect.image} />
                            <Card.Body>
                                <Card.Title>{proyect.title}</Card.Title>
                                <Card.Text>
                                    {proyect.description}
                                </Card.Text>
                                <Card.Subtitle><a  href={proyect.linkUrl}>{proyect.linkUrl}</a></Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Proyects;