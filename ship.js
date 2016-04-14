var size= 10;

//nested for loop,each i value should be a div with a class of row,  create a new element of a checkbox for each j value

for(i=0;i<size;i++){
	var row=document.createElement("div");
	for(var j=0;j<size;j++){
		var checkbox= document.createElement("input");
		checkbox.setAttribute("type", "checkbox") 
		row.appendChild(checkbox);
	}
	var board=document.getElementById("board");
	board.appendChild(row);
}

var checkboxes = document.getElementsByTagName('input');

//loop over checkboxes, add a click event to each item

checkboxes[i].setEventListener('click', checkBoat);


//var shipLocation=Math.random();
//radom x between 0 and size
//random y between 0 and size

//checkboxes[x][y].id = 'boat'


//when the checkbox is clicked
//if the element has an id of boat, then it is a boat
var checkBoat = function(element){
	if(element.target.id == 'boat'){
		alert('you sunk my battle ship')
	} else {
		element.target.disabled = true;
	}
}

/*
if(shipLocation>0.5){
   document.getElementById('checkbox').onclick = function() {
    	if ( this.checked ) 
        alert("Success! You hit a ship!");
    } 
}
else{
	alert("You Missed!");
}
*/







