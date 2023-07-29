import './footter.css'

function Footter() {
    return (
        <div className="d-flex justify-content-around bg-dark-subtle py-5">
            <div>
                <h3>Redes Sociales</h3>
                <ul >
                    <li>LInkedin: <a className="text-decoration-none" href="https://www.linkedin.com/in/juanmanuelmaronas/">/juanmanuelmaronas</a></li>
                    <li>GitHub: <a className="text-decoration-none" href="https://github.com/jmmaronas">/jmmaronas</a></li>
                </ul>
            </div>
            <div>
                <h3>Contacto</h3>
                <ul className="">
                    <li>Tel: <a className="text-decoration-none" href="tel:5491141921947">(+54)9-011-4192-1947</a></li>
                    <li>Whatsapp: <a className="text-decoration-none" href="https://wa.me/5491141921947">(+54)9-011-4192-1947</a> </li>
                    <li>Mail: <a className="text-decoration-none" href="mailto:jmmaronas@jmail.com">jmmaronas@gmail.com</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Footter;