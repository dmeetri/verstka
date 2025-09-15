import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "./App.css"
import "./fonts.css"
import "./main.css"

import { Header } from "./components/header/Header"
import { Footer } from "./components/footer/Footer"
import { TransButton } from "./components/ui/transparent_botton/TransButton"

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Header />

        <main>
            <div className="container">
                <div className="main-content flex">
                    <div className="main-info">
                        <div className="main-text-info">
                            <div className="main-title ">
                                <h1>
                                    Decentralized
                                    <img 
                                        src="/images/krugla.svg" 
                                        alt="КРУГЛА"
                                    />
                                </h1>
                                <h1>
                                    <span className="main-highlight">AI/ML</span> computing
                                </h1>xw
                            </div>

                            <p className="main-subtitle text-reggular">
                                As well as key features of the project's structure,<br />
                                they were declared to violate universal norms of morality.
                            </p>
                        </div>

                        <div className="buttons flex">
                            <TransButton text={"View Mode"} />
                            <TransButton text={"Buy $GPU"} />
                        </div>
                    </div>

                    <img 
                        className='main-graphics-right'
                        src="/images/graphics_right.png"
                        alt="Микросхема справа"
                    />
                </div>

                <div className="main-info flex">

                </div>
            </div>
        </main>
        
        <Footer />
    </StrictMode>
)
