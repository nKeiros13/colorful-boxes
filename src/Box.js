import React, { Component } from "react";
import "./Box.css";
import { choice, getRandomColor } from "./helper";

class Box extends Component {
	static defaultProps = {
		allColors: ["red", "green", "violet", "tomato", "orange", "cyan"],
	};
	constructor(props) {
		super(props);
		this.state = { color: choice(this.props.allColors) };
		this.handleClick = this.handleClick.bind(this);
	}
	setColor() {
		let newColor;
		do {
			newColor = getRandomColor();
		} while (newColor === this.state.color);
		this.setState({ color: newColor });
	}
	handleClick() {
		this.setColor();
	}
	render() {
		return (
			<div
				className="Box"
				style={{ backgroundColor: this.state.color }}
				onClick={this.handleClick}
			/>
		);
	}
}
export default Box;
