let i = 0;
let button= document.querySelector('#button').addEventListener('click', function(){
	if(!i){
		document.getElementById('readMore').style.display = 'inline';
		i=1;
	}
	else{
		document.getElementById('readMore').style.display = 'none';
		i=0;
	}
}