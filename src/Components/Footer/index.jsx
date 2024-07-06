import "./Footer.css"


const Footer = () => {
    return <footer className="footer" style={{ backgroundImage: "url(/img/Footer.jpg)" }}>
        <div className="redes">
            <a href="https://www.instagram.com/fesardrums/">
                <img src="/img/facebookIcon.png" alt="facebook" />
            </a>
            <a href="https://www.instagram.com/fesardrums/">
                <img src="/img/instagramIcon.png" alt="instagram" />
            </a>
        </div>
        <img src="/Group 1@3x.png" alt="logo" className="logo"/>
        <h5>Desarrollado por César Gómez</h5>

    </footer>
}


export default Footer