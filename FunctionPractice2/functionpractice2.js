// var getValue = function(object, property) {


// 	return object[property]
// 	}


// var value = getValue({name: 'Luisa', age: 25, city: 'Boulder'}, 'city') 

// console.log(value)


// var getName = function(object) {

// 	return object.name
// }
// var name = getName({name: 'Luisa', age: 25})

// console.log(name)



// var totalLetters = function(lettersArray) {

// 	var count = 0

// 	lettersArray.forEach(function(word){
// 		count += word.length 

// 	})

	
// 		return count
// }

// console.log(totalLetters(['javascript', 'is', 'awesome']))
// console.log(totalLetters(['what', 'happened', 'to', 'my', 'function']))



// var keyValue = function(arg1, arg2) {

// 	var object = {}

// 	object[arg1] = arg2

// 	return object 

// }
// var value = keyValue('city', 'Denver')


// console.log(value)

// var cities = {city: 'san francisco', population: 85000}



// var negativeIndex = function(indexArray, num) {

// 	var count = 0

// 	indexArray.forEach(function(){

// 	count = indexArray[indexArray.length + num]
	
	
// 	})

// 		return count
// }

// console.log(negativeIndex(['a', 'b', 'c', 'd', 'e'], -2))
// console.log(negativeIndex(['jerry', 'sarah', 'sally'], -1))




var removeM = function(str) {

var arr = str.split('')
for (var i = 0; i < arr.length; i++){
		if(arr[i] === 'm')
			arr[i] = ''
	}
	return arr.join('')
}

console.log(removeM ('family'))
console.log(removeM ('memory'))



// var printObject = function(object) {

// 	for (var key in object) {
// 		console.log(key + ' is ' + object[key])
// 	}
// }

// 	printObject({ a: 10, b: 20, c: 30 })
// 	printObject({ firstName: 'pork', lastName: 'chops' })


// var vowels = function(str) {

// 	var vowels = []
// 	var arr = str.split('')
// 	for (var i = 0; i < arr.length; i++){
// 		if(arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'i' || arr[i] === 'o' || arr[i] === 'u') {
// 			vowels.push(arr[i])
// 		}

// 	}
// 	return vowels
// }

// console.log(vowels('alabama'))
// console.log(vowels('What evil odd ducks!'))



// var twins = function(arr) {

// 	for (var i = 0; i < arr.length; i++) {
// 		if (arr[i] === arr[i+1]) {
// 			i++
// 		}
// 		else {
// 			return false
// 		}
// 	}
	
// 	return true
// }

// console.log(twins(['a', 'a', 'b', 'b', 'c', 'c']))
// console.log(twins(['a', 'a', 'b', 'c', 'd', 'd']))
// console.log(twins(['a', 'a', 'b', 'z']))
// console.log(twins(['a', 'a', undefined]))



// var or = function(arr) {

// 	if (arr.length === 0) {
// 		return false
// 	} else if (arr.length > 0){
// 		for (var i = 0; i < arr.length; i++) {
// 			if (arr[i] === true) {
// 				return true
// 			}
// 			else if(i === arr.length-1){
// 				return false
			
// 			}
// 		}
// 	}

// }


// console.log(or([false, false, true, false]))
// console.log(or([false, false, false]))
// console.log(or([]))



function unique(arr) {
   var u = {}, a = []
   for(var i = 0; i < arr.length; i++){
      if(u.hasOwnProperty(arr[i])) {
         // using continue will jump over one iteration
         continue;
      }
      a.push(arr[i]);
      u[arr[i]] = 1;
   }
   return a
}

console.log(unique(['a', 'b', 'a', 'c', 'd', 'd']))
console.log(unique(['todd', 'avery', 'maria', 'avery']))

























