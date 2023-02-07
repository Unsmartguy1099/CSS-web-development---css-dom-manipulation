const body=document.body

const div1=document.createElement('div')
body.append(div1)
const ol1=document.createElement('ol')
body.append(ol1)

//input 1 initialization
const label1=document.createElement('p')
label1.innerText="Text: "
div1.append(label1)
const input1=document.createElement('input')
input1.setAttribute("id","input_1")
input1.setAttribute("type","text")
div1.append(input1)

//input 2 initialization with innerHTML
const input2_full=document.createElement('div')
input2_full.innerHTML="<p>Id: </p><input>"
input2_full.children[1].setAttribute("id","input_2")
input2_full.children[1].setAttribute("type","number")
input2_full.children[1].setAttribute("min","1")
input2_full.children[1].setAttribute("max","1")
input2_full.children[1].setAttribute("step","1")
div1.append(input2_full)

//buttons initialization
const button1=document.createElement('button')
button1.innerText="Create"
button1.setAttribute("id","button1")
button1.addEventListener("click", Create)
div1.append(button1)

const button2=document.createElement('button')
button2.innerText="Delete"
button2.setAttribute("id","button2")
button2.addEventListener("click",Delete)
div1.append(button2)


function Create() {
    if(document.getElementById('input_2').value==null||document.getElementById('input_2').value=="")
    {
        const list_element=document.createElement('li')
        list_element.innerText=input1.value
        ol1.insertBefore(list_element, ol1.children[0]) 
    }
    else{
        const list_element=document.createElement('li')
        list_element.innerText=input1.value
        ol1.insertBefore(list_element, ol1.children[document.getElementById('input_2').value-1]) 
    }
 
    //setting up max value
    var myString = ol1.children.length.toString();
    input2_full.children[1].setAttribute("max",myString)
};

function Delete() {
    if(document.getElementById('input_2').value!=null&&document.getElementById('input_2').value!=""&&ol1.children.length>0){
        ol1.removeChild(ol1.children[document.getElementById('input_2').value-1])

        document.getElementById('input_2').value=""

        var myString = ol1.children.length.toString();
        input2_full.children[1].setAttribute("max",myString)
    }
};

//method 2: using built in list element/tag for html, which will make life a lot easier


//
//
//css from js, every class inside css stylesheet is called rule

/*
const style=document.createElement('link')
style.setAttribute("rel", "stylesheet");
style.setAttribute("type", "text/css");
style.setAttribute("href", "style.css");
document.head.appendChild(style);
*/ //not necessary because we need file operation for changing .css file not dom manipulation


//css dom manipulation
//manipulation of <style></style> --this is dom manipulation of css

input1.classList.add('input_1_style')

const style=document.createElement('style')
document.head.appendChild(style);

const sheet= style.sheet
sheet.insertRule(".input_1_style { border: 10px solid red; border-radius: 4px; color: white;}", 0)
sheet.insertRule("#input_2 { border: 10px solid red; border-radius: 4px;}", 0)
//sheet.deleteRule(0); for deleting rule

//editing existing style
document.querySelector('#input_1').style.backgroundColor='blue'