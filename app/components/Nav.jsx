var React = require( 'react' );
var { Link, IndexLink } = require( 'react-router' );

var Nav = () => {
  return (
	<div className="top-bar">
		<div className="top-bar-left">
			<ul className="menu">
				<li className="menu-text">React Counter App</li>
				<li>
					<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
				</li>
				<li>
					<Link to="/" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
				</li>
			</ul>
		</div>
		<div className="top-bar-right">
			<ul className="menu">
				<li className="menu-text">React Counter AppCreated by <a href="https://github.com/minkas-g-d" target="_blank">minkas-g-d</a></li>
			</ul>
		</div>
	</div>
  );
}

module.exports = Nav;