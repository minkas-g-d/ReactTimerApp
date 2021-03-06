var React = require( 'react' );
var ReactDOM = require( 'react-dom' );

var { Router, Route, IndexRoute, hashHistory } = require( 'react-router' );

var Main = require( 'Main' );
var Countdown = require( 'Countdown' );
var Timer = require( 'Timer' );

// load foundation
// by default webpack do not know how to load the css so we use the loader css!
// to wire up the styles to the index need style!
require( 'style!css!foundation-sites/dist/foundation.min.css' );
require( 'style!css!sass!applicationStyles');

$( document ).foundation();

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={ Main }>
			<Route path="countdown" component={ Countdown } />
			<IndexRoute component={ Timer } />
		</Route>
	</Router>
	, document.getElementById( 'app' )
);