/*
	printReverse() takes an array as an argument and prints out the elements in the array in reverse order
	test case: printReverse([3, 6, 2, 5])
*/

function printReverse(givenArr){

	var count = givenArr.length - 1;
	
	while (count >= 0)
	{
		console.log(givenArr[count]);
		count--;
	}
}

/*
	isUniform() which takes an argument and returns true if all elements in the array are identical
	
*/

function isUniform(givenArr){
	var firstEl = givenArr[0];

	for(var i = 1; i < givenArr.length; i++){
		if (givenArr[i] !== firstEl)
		{
			return false;
		}
	}

	return true;
}

/*
	sumArray() that accepts an array of numbers and returns the summ of all numbers
	test case sumArray([10, 10, 10])
*/

function sumArray(givenArr){

	var sum = 0;

	for(var i = 0; i < givenArr.length; i++){

		sum += givenArr[i];
	}

	console.log(sum);

	/*
		forEach version of loop, this works the same as above loop and solution

		givenArr.forEach(function(element){
			sum += element;
		});
		return sum;

	*/

}



/*
	max() accepts an array of numbers and returns the maximum number in the array
	test case: max([1, 2, 3])  max([1, -2, 20, 5])
*/

function max(givenArr){

	var max = givenArr[0];

	for (var i = 1; i < givenArr.length; i++){
		if(givenArr[i] > max){
			max = givenArr[i];
		}
	}

	

}



/*

	Lesson on forEach loops

	var nums = [45, 65, 77, 34];

	nums.forEach(function(num){
	
	});

	function myForEach(arr, func){

		//loop through array
		for(var i = 0; i < arr.length; i++){
			//call func for each item in array
			func(arr[i]);
		}
		func()  //calling the function itself but not executing it 

	}

	//basic way to create forEach
	myForEach(nums, function(num){
		console.log(num);
	});


	Array.prototype.myForEach = function(func){
		for(var i =  0; i < this.length; i++){
			func(this[i]);		//this represents array the function is being called o
		}	
	}


*/






