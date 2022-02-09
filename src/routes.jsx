
import { BrowserRouter, Routes as RoutesRender,Route } from "react-router-dom";
import {Aboutme} from './pages/Aboutme'
import {Projects} from './pages/Projects'


export default function Routes() {
    return (
        <BrowserRouter>
            <RoutesRender>
                <Route exact path="/" element={<Aboutme/>} />
                <Route exact path="/Projetos/:category" element={<Projects/>} />
            </RoutesRender>
        </BrowserRouter>
    )
}