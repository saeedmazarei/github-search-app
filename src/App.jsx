import { Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import RepoDetails from './components/RepoDetails'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:owner/:repo" element={<RepoDetails />} />
        </Routes>
    )
}

export default App
