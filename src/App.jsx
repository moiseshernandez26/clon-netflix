import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import NavigationBar from 'components/NavigationBar'

import './App.css'
import 'theme/variables.css'
const Home = lazy(() => import('./Views/Home'))

function App() {
  return (
    <>
      <Suspense fallback={<span>Loading...</span>}>
        <Router>
          <div>
            <NavigationBar></NavigationBar>
            <Switch>
              <Route path="/">
                <Home></Home>
              </Route>
            </Switch>
          </div>
        </Router>
      </Suspense>
    </>
  )
}

export default App
