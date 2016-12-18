//client entry file
//require('./module1.js');
//require('./module2.js');

import React from 'react';
import ReactDOM from 'react-dom';

class Layout extends React.Component {

 	render() {
 		return (
 			<h2> Hello React JS !! </h2>
 		);
 	}	
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);