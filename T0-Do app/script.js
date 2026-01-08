let todo = [];

let request = prompt("please enter your request");
console.log(request);

while(true){
  if (request == "quit"){
    console.log("quitting app");
    break;
  }
  if(request == "list"){
    console.log("__________________");
    for(let i=0; i<todo.length; i++){
      console.log(i, todo[i]);
    }
    console.log("________________");
  }else if (request == "add"){
    let task = prompt("please enter the tassk you want to add");
    todo.push(task);
    console.log("task added");
  }else if(request == "delete"){
    let idx = prompt("please enter the task index");
    todo.splice(idx, 1);
    console.log("task deleted");
  } else{
    console.log("wrong request....")
  }
  request = prompt("please enter your request");
}