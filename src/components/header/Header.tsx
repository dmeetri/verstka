import "./Header.css"

import { HeaderDropMenu } from "../ui/header_drop_menu/HeaderDropMenu";

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-content flex">
                    <div className="header-navigation flex">
                        <img 
                            className="header-logo"
                            width={126}
                            src="/images/text_logo.svg" 
                            alt="Logo"
                        />

                        <nav className="nav">
                            <HeaderDropMenu text={"Menu"} />
                            <HeaderDropMenu text={"Socials"} />
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}