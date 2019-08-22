import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers/index';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import SearchBusinessesInput from './components/businesses/searchBusinessesInput';
import featuredEventInput from './components/featuredEvent/featuredEventInput'


const store = createStore(rootReducer, applyMiddleware(thunk))

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
  }


  const Navbar = () =>
  <div>
    <NavLink
      to="/"
      /* set exact so it knows to only set activeStyle when route is deeply equal to link */
      exact
      /* add styling to Navlink */
      style={link}
      /* add prop for activeStyle */
      activeStyle={{
        background: 'darkblue'
      }}
    >Home</NavLink>
    <NavLink
      to="/search_featured_event"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Featured Event</NavLink>
    <NavLink
      to="/search_businesses"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Search Foods</NavLink>
  </div>;

  const Home = () => <div><h1> Welcome to My Clone of Yelp!</h1> <p> Hurry up and Search something! I am getting hungry!</p></div>


ReactDOM.render(
    <Provider store={store}>
      <App />
      <Router>
        <Navbar fixed="top" />
        <div>   
          <Route exact path="/" component={Home}/>
          <Route exact path="/search_featured_event" component={featuredEventInput}/>
          <Route exact path="/search_businesses" component={SearchBusinessesInput}/>
        </div>     
      </Router>
    </Provider>,
    document.getElementById('root')
);





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
