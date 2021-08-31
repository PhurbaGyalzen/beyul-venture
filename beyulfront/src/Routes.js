import { Route, Switch, useParams, useLocation } from 'react-router-dom'
import ContactUs from 'pages/ContactUs.js'
import OurTeam from 'pages/our-team/OurTeam'
import userProfile from 'pages/user-profile/userProfile'
import FourZeroFour from 'pages/404'
import SignIn from 'components/SignIn'
import SignUp from 'components/SignUp'
import HomePage from 'pages/landing/HomePage'
import AboutUsPage from 'pages/AboutUsPage'
import PackageDetail from 'pages/package-detail/PackageDetail'
import BlogRoutes from 'pages/blog-page/Routes'
import ScrollToTop from 'components/ScrollToTop'
import { PackDetail } from './pages/package-detail/PackDetail'
import StripePaymentPage from 'pages/stripe/StripePay'
import TermsAndConditions from 'pages/TermsAndConditions'
import { PackagesMain } from './pages/packages-page/PackagesMain'
import PrivacyPolicy from 'pages/PrivacyPolicy'
import { TagPackage } from './pages/packages-page/TagPackage'
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
            <CustomRoute exact path='/package/all' component={PackagesMain} />
            <CustomRoute exact path='/package/tag/:id' component={TagPackage} />
            <CustomRoute exact path='/package/:packageId'>
                <PackDetail packageId={params} />
            </CustomRoute>
            <CustomRoute exact path='/pack/:packageId'>
                <PackageDetail packageId={params} />
            </CustomRoute>
            <CustomRoute exact path='/sign-up' component={SignUp} />
            <CustomRoute exact path='/sign-in' component={SignIn} />
            <CustomRoute path='/blog' component={BlogRoutes} />
            <CustomRoute exact path='/contact-us' component={ContactUs} />
            <CustomRoute exact path='/our-team' component={OurTeam} />
            <CustomRoute exact path='/user-profile' component={userProfile} />
            <CustomRoute
                exact
                path='/terms-and-conditions'
                component={TermsAndConditions}
            />
            <CustomRoute
                exact
                path='/privacy-policy'
                component={PrivacyPolicy}
            />
            <CustomRoute exact path='/stripe-payment/:id'>
                <StripePaymentPage />
            </CustomRoute>
            <CustomRoute exact path='/'>
                <HomePage />
            </CustomRoute>
            <CustomRoute path='/' component={FourZeroFour} />
        </Switch>
    )
}

export { Routes, CustomRoute }
