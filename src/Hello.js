import React, {Component} from 'react';

// class Hello extends Component {
// 	render(){
// 		return(
// 			<div className="f2 tc">
// 				<h1>hello</h1>
// 				<p>{this.props.greeting}</p>
// 			</div>
// 		);
// 	}
// }

const Hello = (props) => {
	return(
			<div className="f2 tc">
				<h1>hello</h1>
				<p>{props.greeting}</p>
			</div>
		);
}

export default Hello;