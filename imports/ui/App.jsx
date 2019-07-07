import React from 'react';

import Sidebar from "./Sidebar"
import Header from "./Header"
import DashboardPage from "./Dashboard"

const App = () => (
    <>
        <Sidebar/>
        <section className="content">
            <Header/>
            <DashboardPage/>
        </section>
    </>
);

export default App;
