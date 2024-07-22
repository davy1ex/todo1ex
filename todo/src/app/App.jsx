import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import InboxPage from '../pages/inbox';
import TasksPage from '../pages/taskPage';


function App() {
    return (
        <Router>
            <Routes>
                <Route path={"/"} element={<TasksPage />} />
            </Routes>
        </Router>
    )
}

export default App
