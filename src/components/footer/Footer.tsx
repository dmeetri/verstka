import "./Footer.css"

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content flex">
                    <img 
                        src="/images/text_logo.svg"
                        width={180}
                        alt="Логотип держат в подвале"
                    />

                    <div className="footer-navigation flex">
                        <a href="#" className="text-small">Advantages</a>
                        <a href="#" className="text-small">Roadmap</a>
                        <a href="#" className="text-small">Tokenomics</a>
                        <a href="#" className="text-small">Start</a>
                        <a href="#" className="text-small">FAQ</a>
                        <a href="#" className="text-small">Buy</a>
                    </div>
                </div>

                <div className="footer-botom-content flex">
                    <p className="text-small">(с)NFTNode, 2024</p>

                    <div className="footer-icons flex">
                        <img 
                            width={22}
                            src="/icons/Dextools.svg"
                            alt="socials-Dextools"
                        />
                        <img 
                            width={22}
                            src="/icons/Etherscan.svg"
                            alt="socials-Etherscan"
                        />
                        <img 
                            width={22}
                            src="/icons/telegram.svg"
                            alt="socials-telegram"
                        />
                        <img 
                            width={22}
                            src="/icons/X.svg"
                            alt="socials-X"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}