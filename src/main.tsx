import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./App.css"
import "./fonts.css"
import "./main.css"

import { Header } from "./components/header/Header"

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
                                </h1>
                            </div>

                            <div className="main-subtitle">

                            </div>
                        </div>

                        <div className="buttons flex">
                            <button>View Mode</button>
                            <button>Buy GPU</button>
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
    </StrictMode>
)
