import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
} from 'react-router-dom'
import Blog from 'pages/BlogPage/Blog'
// import AboutPage from 'pages/AboutPage'
import AboutUsPage from './pages/AboutUsPage'
import HomePage from 'pages/landing/HomePage'
import ServicesPages from 'pages/ServicesPage'
import BlogDetail from 'pages/BlogPage/BlogDetail'
import PackageDetail from 'pages/package-detail/PackageDetail'
import Header from 'components/Header'
import SignIn from 'components/SignIn'
import SignUp from 'components/SignUp'
// import { default as SignUp } from 'components/SignUpDialog'

const Routes = () => {
  const params = useParams()
  return (
    <Switch>
      <Route exact path='/about' component={AboutUsPage} />
      <Route exact path='/services' component={ServicesPages} />
      <Route exact path='/package/:packageId'>
        <PackageDetail packageId={params} />
      </Route>
      <Route exact path='/sign-up' component={SignUp} />
      <Route exact path='/sign-in' component={SignIn} />
      <Route exact path='/blog/:blogid' component={BlogDetail} />
      <Route exact path='/blog' component={Blog} />
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
