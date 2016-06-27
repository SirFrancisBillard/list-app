var colors = ["red", "orange", "yellow", "green", "blue", "purple"];
var count = 0;
function cycle(arr) {
	console.log(arr[count]);
	if (count > arr.length - 2) {
		count = 0;
	} else {
		count++;
	}
}
function list() {
	cycle(colors);
}
