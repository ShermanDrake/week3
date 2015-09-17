var students = [{
name: 'Liz',
 age: 25,
 city: 'Boulder'
},{
 name: 'Meghan',
 age: 27,
 city: 'Denver'
},{
 name: 'Trent',
 age: 32,
 city: 'Boulder'
},{
 name: 'Chelsea',
 age: 24,
 city: 'Boulder'
},{
 name: 'Amir',
 age: 18,
 city: 'Denver'
}];

// for(var i = 0; i < students.length; i++){
// 	console.log(students[i].name);
// }

// for(var i = 0; i < students.length; i++){
// 	console.log(students[i].age);
// }

// for(var i = 0; i < students.length; i++){
// 	console.log(students[i].name + ',' + students[i].city);
//

// var isFrom = function(arr) {
// for(var i = 0; i < students.length; i++){
// 	console.log(students[i].name + ' is from ' + students[i].city);
// }
// }
// isFrom(students)




function olderThan25(arr) {
	for (var i = 0; i < arr.length; i++) {
		if(arr[i].age > 25) {

			console.log(arr[i].name + ' is older than 25')
		}
		else {
			console.log(arr[i].name + ' is less than 25')
		}
	};
}
	olderThan25(students)

	

// var olderThan25 = function(students) {

// 	for(var i = 0; i < students.length; i++){

// 			if (students[i].age > 25) {

// 				console.log(students[i].name + 'is older than 25')
// 			}
// 			else {
// 				console.log(students[i].name + 'is younger than 25')
// 			}

// 	};

// }





















