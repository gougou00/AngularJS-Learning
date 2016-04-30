var pet = {
	words: '...',
	speak: function(say) {
		console.log(say + ' ' + this.words)
	}
}

// pet.speak('speak')
// 
var dog = {
	words: '汪汪'
}

pet.speak.call(dog, 'speak')