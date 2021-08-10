import { BrowserRouter as Router } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navigation from 'components/header/Header'
// import { Footer } from 'components/Footer'
import ScrollButton from 'components/ScrollButton1'
import { Footer } from 'pages/footer/Footer'
import CssBaseline from '@material-ui/core/CssBaseline';


// import { default as SignUp } from 'components/SignUpDialog'
import { Routes } from './Routes'
import ajax from './api'
window.ajax = ajax

const App = () => {
    return (
        <Router>
            <div className='App'>
                <CssBaseline />
                <Toaster />
                <Navigation />
                <Routes />
                <Footer />
                <ScrollButton />
            </div>
        </Router>
    )
}

export default App
