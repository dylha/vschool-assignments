//document.getElementById("choice-form").addEventListener("submit", function(event) {
//    event.preventDefault();
//    var noThanks = document.getElementById("not-this");
//    
//    
//    //  Easier Way
//    var list = document.getElementById("jetblue-remove")
//    list.innerHTML += "<li>" + noThanks.value + "</li>"
//    
//    noThanks.value = "";
//    noThanks.focus();
//    
//    
////  Low level way of creating elements
////      var newLi = document.createElement("li");
////      document.getElementById("todo-list").appendChild(newLi);
////      var todoTextNode = document.createTextNode(newTodoText);
////      newLi.appendChild(todoTextNode);
//  
//});





document.getElementById("jetblue-remove").addEventListener("click", function() {
    document.getElementById("jetblue-remove").innerHTML = "Ew."
});
