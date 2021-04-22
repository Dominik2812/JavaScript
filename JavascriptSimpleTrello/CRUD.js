const start = document.querySelector('#start');
    const empties = document.querySelectorAll('.empty');
    for (const empty of empties) {
        empty.addEventListener('dragover', dragOver);
        empty.addEventListener('drop', dragDrop);
        console.log(empty)
      }
      
function catchElement(e){
    fill=e.target
}

function dragEnd() {
  this.className = 'fill';
    clone=this.cloneNode(true);
    clone.addEventListener("dblclick",delItem)
    clone.addEventListener('mousedown', catchElement)
    if(start.childElementCount==0){
    start.append(clone);
    }
}
function dragOver(e) { 
  e.preventDefault();
}

function dragDrop() {
  this.append(fill);
}

function delItem() {
    this.parentNode.removeChild(this)

}



function addItem(e){
    
    if (e.type=='click' || e.keyCode === 13){
        i=i+1
        
        targetId="#"+String(e.target.id);
        var textfield=document.querySelector(targetId)
    var new_div = document.createElement("div");                
    new_div.id ="Item_"+String(i)
    new_div.className ="fill";
    new_div.draggable="true";
    new_div.addEventListener("click",delItem)
    new_div.addEventListener('mousedown', catchElement)


    var new_content = document.createTextNode(textfield.value);
    new_div.appendChild(new_content);
    console.log(targetId)
    document.querySelector(targetId).parentNode.parentNode.appendChild(new_div);


    textfield.value=""; 
    textfield.focus();
    console.log('Create:',i)
    } 
    
}

function addCategory(e){
    buckets=document.querySelector("#buckets");
    if (e.type=='click' || e.keyCode === 13){
        i=i+1
    var new_div = document.createElement("div");                
    new_div.id ="bucket_"+String(i)
    new_div.className ="empty";
    new_div.draggable="true";
    new_div.addEventListener("dblclick",delItem)
    new_div.addEventListener('mousedown', catchElement)
    new_div.addEventListener('drop', dragDrop);
    new_div.addEventListener('dragover', dragOver);

    var new_form=document.createElement("form"); 
    new_form.id="createItem";
    var new_textArea=document.createElement("textarea"); 
    new_textArea.id="item_"+String(i)
    new_textArea.cols="10"
    new_textArea.rows="3"
    new_textArea.autofocus="true"
    new_textArea.placeholder="create a new toDo-Item"
    new_textArea.addEventListener("keyup",addItem)
    new_form.appendChild(new_textArea)

    var new_content = document.createTextNode(textfieldCat.value);
    new_div.appendChild(new_content);
    new_div.appendChild(new_form)
    document.querySelector("#buckets").appendChild(new_div);


    textfieldCat.value=""; 
    textfieldCat.focus();

    } 
    
}


//runtime code
i=0;

var textfield = document.querySelector("#item");
var textfieldCat = document.querySelector("#category");
textfield.addEventListener("keyup",addItem);
textfieldCat.addEventListener("keyup",addCategory);


