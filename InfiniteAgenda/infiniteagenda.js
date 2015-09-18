var mainController = function($scope, $interval){
    //console.log('Hello world!')

    $scope.day = new Date()
    // $scope.futureDate = moment().add(1, 'days')

    $scope.dates = [
    	{day: $scope.date, todos: [], visible: true},
    	{day: $scope.date, todos: [], visible: true},
    	{day: $scope.date, todos: [], visible: true},
    	{day: $scope.date, todos: [], visible: true},
    	{day: $scope.date, todos: [], visible: true},
    	{day: $scope.date, todos: [], visible: true},
    	{day: $scope.date, todos: [], visible: true},

    ]

    for (var i =0 ; i < $scope.dates.length; i++){
		var currentDate = new Date();
    	currentDate.setDate(currentDate.getDate()+ i);
    	$scope.dates[i].day = currentDate
	}
    
    $scope.todos = []

    
    $scope.addEvent = true
    $scope.eventForm = true

    $scope.addToDo = function(index) {
    	$scope.dates[index].addEvent = !$scope.dates[index].addEven
    	$scope.dates[index].eventForm = !$scope.dates[index].eventForm

    }

    $scope.eventSubmit = function(index) {

    	$scope.dates[index].addEvent = !$scope.dates[index].addEvent
    	$scope.dates[index].eventForm = !$scope.dates[index].eventForm
    	$scope.dates[index].todos.push(angular.copy($scope.dates[index].todo))
     	$scope.dates[index].todo = {}
        
    }

    $scope.addDate = function(index){
		var currentDate = new Date()
		currentDate.setDate(currentDate.getDate() + $scope.dates.length);
		var tempObj = {
			day: currentDate,
			entry: [{entry: ""}]
		}
		$scope.dates.push(tempObj)
	}

	$interval(function(index){
    	var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / 
    		(document.documentElement.scrollHeight - document.documentElement.clientHeight);
    	console.log(scrollpercent)
    	if(scrollpercent > .65){
    		$scope.addDate(index)
    	}
	}, 100)	

    

      

      // $scope.remaining = function() {
      //   var count = 0;
      //   angular.forEach($scope.todos, function(todo) {
      //     count += todo.done ? 0 : 1;
      //   });
      //   return count;
      // };

      // $scope.archive = function() {
      //   var oldTodos = $scope.todos;
      //   $scope.todos = [];
      //   angular.forEach(oldTodos, function(todo) {
      //     if (!todo.done) $scope.todos.push(todo);
      //   });
      // };
}

angular.module('app', [])
    .controller('mainController', ['$scope', '$interval', mainController])












// angular.module('app', []);
// angular.module('app');
// angular.module('app').controller('mainController', ['$scope', function($scope){