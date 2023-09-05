const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const sum = (x, y) => x + y;

const reverseString = (str) => [...str].reverse().join("");

const calculator = {
	add(x, y) {
		return x + y;
	},
	subtract(x, y) {
		return x - y;
	},
	divide(x, y) {
		return x / y;
	},
	multiply(x, y) {
		return x * y;
	},
};

const caesarCipher = (str, shift) => {
	if (shift == null) {
		shift = 1;
	}
	const lowerArr = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
	];
	const upperArr = lowerArr.map((item) => item.toUpperCase());
	const splitArr = [...str];
	const finalArr = [];
	splitArr.forEach((item) => {
		if (lowerArr.includes(item)) {
			const lowerIndex = lowerArr.indexOf(item);
			let newIndex = lowerIndex + shift;
			if (newIndex > 25) {
				newIndex = Math.abs(26 - newIndex);
			}
			finalArr.push(lowerArr[newIndex]);
		} else if (upperArr.includes(item)) {
			const upperIndex = upperArr.indexOf(item);
			let newIndex = upperIndex + shift;
			if (newIndex > 25) {
				newIndex = Math.abs(26 - newIndex);
			}
			finalArr.push(upperArr[newIndex]);
		} else {
			finalArr.push(item);
		}
	});
	return finalArr.join("");
};

const analyzeArray = (arr) => {
	const obj = {};
	obj.average = arr.reduce((prev, current) => prev + current, 0) / arr.length;
	obj.min = Math.min(...arr);
	obj.max = Math.max(...arr);
	obj.len = arr.length;
	return obj;
};

export {
	capitalize,
	sum,
	reverseString,
	calculator,
	caesarCipher,
	analyzeArray,
};
