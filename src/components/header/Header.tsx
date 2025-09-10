import "./Header.css"

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-content flex">
                    <div className="header-navigation flex">
                        <img 
                            className="header-logo"
                            width={126}
                            src="/images/text_logo.png" 
                            alt="Logo"
                        />

                        <nav>

                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}