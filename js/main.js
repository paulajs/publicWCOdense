var modalbox = document.querySelector('div#modalbox');
console.log('modal ' + modalbox);
modalbox.addEventListener('click',function(){
	this.style.display = "none";
	console.log("hello world");
});