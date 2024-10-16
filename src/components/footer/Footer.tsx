import './footer.css'

import logoInstagram from '@icons/logo-instagram.svg'
import logoTiktok from '@icons/logo-tiktok.svg'
import logoTwitter from '@icons/logo-twitter.svg'
import logoYoutube from '@icons/logo-youtube.svg'

const Footer = (): React.JSX.Element => {
    return (
        <footer>
            <div id="footer-container">
                <div id="copy">
                    &copy; 2024 LockerG Store - Todos los derechos reservados
                </div>

                <div id="social-networks">
                    <div className="network" icon-button='true'>
                        <img width="24px" src={ logoInstagram } alt="Logo instagram" />
                    </div>

                    <div className="network" icon-button='true'>
                        <img width="24px" src={ logoTiktok } alt="Logo tiktok" />
                    </div>

                    <div className="network" icon-button='true'>
                        <img width="24px" src={ logoTwitter } alt="Logo twitter" />
                    </div>

                    <div className="network" icon-button='true'>
                        <img width="24px" src={ logoYoutube } alt="Logo youtube" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
