// 1. tripleFive
console.log("TRIPLEFIVE")


var tripleFive = function() {
	for (var i = 0; i < 3; i++) {
		console.log("Five!")
	}
}

tripleFive()

// 2. lastLetter
console.log("LASTLETTER")

var lastLetter = function(string) {
	return string.charAt(string.length - 1)
}

console.log(lastLetter("hello"))
console.log(lastLetter("island"))

// 3. square
console.log("SQUARE")

var square = function(n) {
	return n*n
}

console.log(square(3))
console.log(square(5))

// 4. negate
console.log("NEGATE")

var negate = function(n) {
	if (n < 0) {
		return Math.abs(n)
	} else {
		return -n
	}
}

console.log(negate(5))
console.log(negate(-8))

// 5. toArray
console.log("TOARRAY")

var toArray = function(a,b,c) {
	return [a, b, c]
}

console.log(toArray(1, 4, 5))
console.log(toArray(8, 9, 10))

// 6. startsWithA
console.log("STARTSWITHA")

var startsWithA = function(string) {
	if (string.toLowerCase().charAt(0) === "a") {
		return true
	} else {
		return false
	}
}

console.log(startsWithA("aardvark"))
console.log(startsWithA("bear"))

// 7. excite
console.log("EXCITE")

var excite = function(string) {
	return string + "!!!"
}

console.log(excite("yes"))
console.log(excite("go"))

// 8. sun
console.log("SUN")

var sun = function(string) {
	if (string.indexOf("sun") === -1) {
		return false
	} else {
		return true
	}
}

console.log(sun("sundries"))
console.log(sun("asunder"))
console.log(sun("catapult"))

// 9. tiny
console.log("TINY")

var tiny = function(n) {
	if (n >= 0 && n <= 1) {
		return true
	} else {
		return false
	}
}

console.log(tiny(0.3))
console.log(tiny(14))
console.log(tiny(-5))

// 10. getSeconds
console.log("GETSECONDS")

var getSeconds = function(string) {
	return parseInt((string.slice(0, 2) * 60)) + parseInt(string.slice(3, 5)) 
}

console.log(getSeconds("01:30"))
console.log(getSeconds("10:25"))



