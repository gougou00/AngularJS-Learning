function Pet(words) {

	this.words = words
	this.speak = function() {
		console.log(this.words)
	}
}

function Dog(words) {
	Pet.call(this, words)
	// Pet.apply(this, arguments)
}

var dog00 = new Dog('wangwang')

dog00.speak()