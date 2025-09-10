import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./App.css"

import { Header } from "./components/header/Header"

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Header />

        <main>

        </main>
    </StrictMode>
)
