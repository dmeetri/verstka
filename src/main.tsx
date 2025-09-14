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
            <div className="conatainer">

            </div>
        </main>
    </StrictMode>
)
