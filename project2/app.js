const team_data = [
	{
		"name": "Jay Panchal", 
		"age": 21, 
		"position": "Left Winger"	
	}, 
	{
		"name": "Eden Hazard", 
		"age": 30, 
		"position": "Attacking Midfielder"	
	}, 
	{
		"name": "Isco Alarcon", 
		"age": 29, 
		"position": "Centre Midfielder"	
	}, 
	{
		"name": "Paul Pogba", 
		"age": 28, 
		"position": "Centre Midfielder"	
	}, 
	{
		"name": "Karim Benzema", 
		"age": 33, 
		"position": "Striker"	
	}, 
	{
		"name": "Anthony Martial", 
		"age": 25, 
		"position": "Secondary Striker"	
	}
]; 

const info_div = document.querySelector("#info"); 

let details = team_data.map(function(item){
	return "<div>" + item.name + " is " + item.age +
	 " y/o and plays as a " + item.position + "." + "</div>";
})

info_div.innerHTML = details.join("\n"); 
