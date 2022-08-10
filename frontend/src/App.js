// import './App.js'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";


function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                {/* <div className="container container-fluid"></div> */}
                <Home />
                <Footer />

            </div>
        </Router >
    )
}

export default App;