function quadraticEquation(a,b,c) {
	let x1, x2;
	if (a == 0) {
		return "Ошибка! Коэффициент а не может быть равен 0!";
	}
    let D = b * b - 4 * a * c;
    if(D == 0) {
    	x1 = (-b + Math.sqrt(D)) / (2 * a);
        return "x1 = x2 = " + x1.toFixed(2);
    }
    else if(D > 0){
    	x1 = (-b + Math.sqrt(D)) / (2 * a); 
		x2 = (-b - Math.sqrt(D)) / (2 * a);
        return "x1 = " + x1.toFixed(2) + "   x2 = " + x2.toFixed(2);
    }
    else {
    	return "Действительных корней нет";
    }
}
	
let index = 1;
function execution() {
	let a = document.getElementById('a').value;
	let b = document.getElementById('b').value;
	let c = document.getElementById('c').value;
		
	let result = quadraticEquation(a,b,c);

	let tbody = document.getElementById('result');
 	let row = document.createElement("TR");
 	tbody.appendChild(row);

 	let td1 = document.createElement("TD");
 	td1.appendChild(document.createTextNode(index));
 	index ++;

 	let td2 = document.createElement("TD");
  	td2.appendChild(document.createTextNode(result));

  	row.appendChild(td1);
  	row.appendChild(td2);

  	document.getElementById('show_result').style.display = 'block'; 
}

document.addEventListener('click', function(event) {
	let td = event.target.closest('td'); 
	if (!td) {
		return;
	}
	else {
		event.target.closest('tr').remove();
	}
});


