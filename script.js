/* TODO: Build up the HTML document by using JavaScript DOM manipulation functions.
 * Do not rely on changes you may have made to index.html because the grader won't use that file.
 */
function hdiv(){
	var headDiv = document.createElement('div');
	headDiv.id = "headDiv";
	headDiv.className = "red stuff-box shadowed";
	var header = document.createElement('h1');
	header.id = "header";
	header.textContent = "Javascript Calculator";
	header.style = "color:blue";
	headDiv.appendChild(header);
	document.body.appendChild(headDiv);
	var para = document.createElement('p');
	para.id = "para";
	para.textContent = "Please enter an expression to be calculated via this page"
	para.style += " text-align:center";
	header.appendChild(para);
}


document.title = "This is a very special title";
hdiv();
