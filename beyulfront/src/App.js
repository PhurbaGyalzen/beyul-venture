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
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import BlogDetail from './pages/BlogPage/BlogDetail'
import Blog from './pages/BlogPage/Blog'
const Routes = () => {
  const params = useParams()
  return (
    <Switch>
      <Route exact path='/about' component={AboutPage} />
      <Route exact path='/services' component={ServicesPages} />
      <Route exact path='/package/:packageId'>
        <PackageDetail packageId={params} />
      </Route>
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/sign-in" component={SignIn} />
      
      <Route exact path="/blog/:blogid" component={BlogDetail} />
      <Route exact path="/blog" component={Blog} />
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
        <Switch>
          <Routes />
          
        </Switch>
      </div>
    </Router>
  )
}

export default App
