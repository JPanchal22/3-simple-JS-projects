const worried_face = document.querySelector(".worried"); 
const happy_face = document.querySelector(".happy"); 

// Add Event listener 
worried_face.addEventListener("click", () => {

	if (happy_face.classList.contains("happy")){
		happy_face.classList.add("active"); 
		worried_face.classList.remove("active");
	}

})

happy_face.addEventListener("click", () => {

	if (worried_face.classList.contains("worried")){
		worried_face.classList.add("active"); 
		happy_face.classList.remove("active");
	}
	
})