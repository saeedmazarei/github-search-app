import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home/Index'
import RepoDetails from './pages/detailCard/RepoDetails'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:owner/:repo" element={<RepoDetails />} />
        </Routes>
    )
}

export default App
