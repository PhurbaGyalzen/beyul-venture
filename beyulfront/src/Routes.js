import { Route, Switch, useParams } from 'react-router-dom'
import ContactUs from 'pages/ContactUs.js'
import OurTeam from 'pages/our-team/OurTeam'
import FourZeroFour from 'pages/404'
import SignIn from 'components/SignIn'
import SignUp from 'components/SignUp'
import HomePage from 'pages/landing/HomePage'
import AboutUsPage from 'pages/AboutUsPage'
import PackageDetail from 'pages/package-detail/PackageDetail'
import BlogRoutes from 'pages/blog-page/Routes'
import ScrollToTop from 'components/ScrollToTop'

const CustomRoute = ({ ...args }) => {
    return (
        <>
            <ScrollToTop />
            <Route {...args} />
        </>
    )
}

const Routes = () => {
    const params = useParams()
    return (
        <Switch>
            <CustomRoute exact path='/about' component={AboutUsPage} />
            <CustomRoute exact path='/package/:packageId'>
                <PackageDetail packageId={params} />
            </CustomRoute>
            <CustomRoute exact path='/sign-up' component={SignUp} />
            <CustomRoute exact path='/sign-in' component={SignIn} />
            <CustomRoute path='/blog' component={BlogRoutes} />
            <CustomRoute exact path='/contact-us' component={ContactUs} />
            <CustomRoute exact path='/our-team' component={OurTeam} />
            <CustomRoute exact path='/'>
                <HomePage />
            </CustomRoute>
            <CustomRoute path='/' component={FourZeroFour} />
        </Switch>
    )
}

export { Routes, CustomRoute }