/** Returns a random item from a list */

function choice(arr) {
	let item = Math.floor(Math.random() * arr.length);
	return arr[item];
}
function getRandomColor() {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

export { choice, getRandomColor };
