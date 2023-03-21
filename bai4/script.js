console.log(12);

const p2Element = document.getElementById("p2");
p2Element.dataset.mydata = "tam";
// alert("tam");

const div1Element = document.getElementById('div1');
const isClassExist = div1Element.hasAttribute('class')
console.log(isClassExist)

div1Element.classList.add('test2')
div1Element.classList.remove('test2')
div1Element.style ='border: 1px solid black; background: red; width:200px; height:300px;'
p2Element.style = 'border: 1px solid black; background: red; width:200px; height:300px;'