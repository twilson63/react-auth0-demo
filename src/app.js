const React = require('react')
const { HashRouter, Match, Redirect } = require('react-router')
const auth = require('./utils/auth')(
  process.env.REACT_APP_ID,
  process.env.REACT_APP_DOMAIN
)

const Home = require('./pages/home')
const About = require('./pages/about')

const App = React.createClass({
  render() {
    return (
      <HashRouter>
        <div>
          <Match exactly pattern="/" render={props => 
             <Home auth={auth} {...props} />
          } />
          <MatchWhenAuthorized pattern="/about" component={About} />
        </div>
      </HashRouter>
    )
  }
})

const MatchWhenAuthorized = ({component: Component, ...rest}) =>
  <Match {...rest} render={ props =>
    auth.loggedIn() ?
      <div>
        <button onClick={e => auth.logout() }>logout</button>
        <Component {...props} />
      </div> : <Redirect to="/" />
  }
  />

// const MatchWhenAuthorized = ({component: Component, ...restOfMatchProps}) =>
//   <Match {...restOfMatchProps} render={ props => auth.loggedIn() ?
//     <div>
//       <button onClick={(e) => auth.logout() }>Logout</button>
//       <Component {...props} />
//     </div> : <Redirect to="/" /> } />
//


module.exports = App
