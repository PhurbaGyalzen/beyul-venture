import { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route as PathTo,
  Switch,
  useParams,
} from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Blog from 'pages/blog-page/Blog'
import AboutPage from 'pages/AboutPage'
import HomePage from 'pages/landing/HomePage'
import AboutUsPage from 'pages/AboutUsPage'
import BlogDetail from 'pages/blog-page/BlogDetail'
import PackageDetail from 'pages/package-detail/PackageDetail'
import Navigation from 'components/Header1'
import SignIn from 'components/SignIn'
import SignUp from 'components/SignUp'
import { AddBlog } from 'pages/blog-add/AddBlog'
// import { Footer } from 'components/Footer'
import { Footer } from 'pages/footer/Footer'
import ContactUs from 'pages/ContactUs.js'
import OurTeam from './pages/our-team/OurTeam'
import { BlogTag } from 'pages/blog-page/BlogTag'
import FourZeroFour from 'pages/404'
// import { default as SignUp } from 'components/SignUpDialog'
// import ScrollToTop from 'components/ScrollToTop'
import ajax from './api'
window.ajax = ajax

const Route = ({ ...args }) => {
  return (
    <>
      {/* <ScrollToTop /> */}
      <PathTo {...args} />
    </>
  )
}

const Routes = () => {
  const params = useParams()
  return (
    <Switch>
      <Route exact path='/about' component={AboutUsPage} />
      <Route exact path='/package/:packageId'>
        <PackageDetail packageId={params} />
      </Route>
      <Route exact path='/sign-up' component={SignUp} />
      <Route exact path='/sign-in' component={SignIn} />
      <Route exact path='/blog' component={Blog} />
      <Route exact path='/blog/add' component={AddBlog} />
      <Route exact path='/blog/tag/:tagname' component={BlogTag} />
      <Route exact path='/blog/:blogid' component={BlogDetail} />
      <Route exact path='/contact-us' component={ContactUs} />
      <Route exact path='/our-team' component={OurTeam} />
      <Route exact path='/'>
        <HomePage />
      </Route>
      <Route path='/' component={FourZeroFour} />
    </Switch>
  )
}

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Toaster />
        <Navigation />
        <Routes />
        <Footer />
      </div>
    </Router>
  )
}

export default App
