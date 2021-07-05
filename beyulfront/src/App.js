import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
} from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/landing/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPages from './pages/ServicesPage'
import PackageDetail from './pages/package-detail/PackageDetail'

const Routes = () => {
  const params = useParams()
  return (
    <Switch>
      <Route exact path='/about' component={AboutPage} />
      <Route exact path='/services' component={ServicesPages} />
      <Route exact path='/package/:packageId'>
        <PackageDetail packageId={params} />
      </Route>
      <Route exact path='/'>
        <HomePage />
      </Route>
    </Switch>
  )
}

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes />
      </div>
    </Router>
  )
}

export default App
