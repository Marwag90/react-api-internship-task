import React, {useContext, Suspense, lazy} from 'react'
import {ThemeContext} from './context/ThemeContext'
import HeaderComponent from './components/header/HeaderComponent'
import FooterComponent from './components/footer/FooterComponent'
import LoaderComponent from './components/loader/LoaderComponent'
import ReactGA from 'react-ga'
import {Switch, Route} from 'react-router-dom'
import LiveCryptoTracker from './components/live-crypto-tracker/liveCryptoTracker'
import Covid from "./components/covid/covid.tsx"
const HomeContainer = lazy(() => import('./containers/home/HomeContainer'))

const GA_ID = process.env.REACT_APP_GA_ID

// reactGA initialization
ReactGA.initialize(`${GA_ID}`)
const App = () => {
  const {theme} = useContext(ThemeContext)

  return (
    <div className={`bg-${theme} tracking-wider border-box wrapper`}>
      <div>
        <HeaderComponent />
      </div>
      <div>
      <Switch>
          <Route exact path='/'>
            <Suspense
              fallback={<LoaderComponent loaderText='Loading components' />}>
              <HomeContainer />
            </Suspense>
          </Route>

          <Route  path='/crypto'>
             {/* <About/> */}
             <LiveCryptoTracker />
          </Route>

          <Route  path='/covid'>
             {/* <About/> */}
             <Covid />
          </Route>
        </Switch>

      </div>
      <div>
        <FooterComponent />
      </div>
    </div>
  )
}

export default App
