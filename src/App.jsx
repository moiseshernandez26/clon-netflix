import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'

import './App.css'
const Home = lazy(() => import('./Views/Home'))

function App() {
  return (
    <>
      <Suspense fallback={<span>Loading...</span>}>
        <Router>
          <div>
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
