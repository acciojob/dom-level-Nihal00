//your JS code here. If required.
const li = document.querySelectorAll('li');

for(let i = 0, i < li.length; i++){
	if(li[i].id){
		alert(`The level of the element is: ${i+1}`);
	}
}
