const React = require('react')
const {Link} =  require('react-router')

module.exports = React.createClass({
  componentDidMount() {
    if (!this.props.auth.loggedIn() &&
      this.props.location.hash.indexOf('access_token') === -1) {
      this.props.auth.login()
    }
  },
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to="/about">About</Link>
        <Link to="/page2">Page2</Link>

      </div>
    )
  }
})
