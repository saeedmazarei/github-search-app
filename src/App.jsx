import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home/Index'
import RepoDetails from './pages/detailCard/RepoDetails'
import AxiosErrorHandler from './services/ErrorHandler'

function App() {
    return (
        <>
            <AxiosErrorHandler />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details/:owner/:repo" element={<RepoDetails />} />
            </Routes>
        </>
    )
}

export default App
