import { Route, Routes } from 'react-router-dom'

import Details from './Details'
import Home from './Home'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:owner/:repo" element={<Details />} />
        </Routes>
    )
}

export default App
