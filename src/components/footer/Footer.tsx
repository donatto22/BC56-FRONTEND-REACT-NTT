import './footer.css'

const Footer = (): React.JSX.Element => {
    return (
        <footer>
            <div id="footer-container">
                <div id="copy">
                    &copy; 2024 LockerG Store - Todos los derechos reservados
                </div>

                <div id="social-networks">
                    <div className="network" icon-button>
                        <img width="24px" src="./src/assets/icons/logo-instagram.svg" alt="Logo instagram" />
                    </div>

                    <div className="network" icon-button>
                        <img width="24px" src="./src/assets/icons/logo-tiktok.svg" alt="Logo tiktok" />
                    </div>

                    <div className="network" icon-button>
                        <img width="24px" src="./src/assets/icons/logo-twitter.svg" alt="Logo twitter" />
                    </div>

                    <div className="network" icon-button>
                        <img width="24px" src="./src/assets/icons/logo-youtube.svg" alt="Logo youtube" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
