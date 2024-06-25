import Layout from './components/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Quienes from './pages/QuienesSomos'
import Course from './pages/SomosEstadounidenses'
import Unete from './pages/Unete'

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/Home' element={<Home />} />
                    <Route path='/QuienesSomos' element={<Quienes />} />
                    <Route path='/SomosEstadounidenses' element={<Course />} />
                    <Route path='/unete' element={<Unete />} />
                    
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App
