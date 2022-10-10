import {Route, Switch} from 'react-router-dom'
import HomeRoute from './components/HomeRoute'
import NotFoundRoute from './components/NotFoundRoute'
import CourseItemDetailsRoute from './components/CourseItemDetailsRoute'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={HomeRoute} />
    <Route exact path="/courses/:id" component={CourseItemDetailsRoute} />
    <Route component={NotFoundRoute} />
  </Switch>
)

export default App
