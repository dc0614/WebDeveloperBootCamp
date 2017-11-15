var todos = [];

var input = prompt("What would you like to do? ");

while (input !== "quit") {

	if (input === "list")
	{
		listTodos();
	}
	else if (input === "delete")
	{
		deleteToDo();
	}
	else if (input === "new")
	{
		addToDo();
	}

	input = prompt("What would you like to do? ");
}

console.log("OK, YOU QUIT THE APP. Bye!");



function listTodos() 
{
	//print asteriks
	console.log("**********");
		
	//print each todo item using forEach loop
	todos.forEach(function(todo, i)
	{
		console.log(i + ": " + todo);
	});
	//print askteriks
	console.log("**********");
}


function addToDo() 
{
	//ask for new todo
	var newTodo = prompt("Enter new todo");
	//add to the todos array
	todos.push(newTodo);
}

function deleteToDo()
{
	var index = prompt("Enter index of todo to delete");
	todos.splice(index, 1);
}