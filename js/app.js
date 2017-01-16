var btn =  document.getElementById('btn');
var ele = document.getElementById('heart');

function favTee(ele, clsName) {
// split  the class name and index the existing values of the element's classes
//if you don't find the new clsName inside said index,
//then you can add it
	var el = ele.className;
	el = el.split(' ');
	if(el.indexOf(clsName) > -1){
		var cIndex = el.indexOf(clsName);
		el.splice(cIndex, 1);
		ele.className = " ";
	    el.forEach(function(item, index){
	      ele.className += " " + item;
	    })
	}
	else {
		el.push(clsName);
		ele.className = " ";
	    el.forEach(function(item, index){
	      ele.className += " " + item;
	    })
	}
}

btn.addEventListener('click', function(){
	favTee(ele, 'favorited')
})
