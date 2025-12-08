function changeText() {
    const textElement = document.getElementById('text');
    
    if (textElement.textContent === 'Hello Abi') {
        textElement.textContent = 'Hi Abc';
    } else {
        textElement.textContent = 'Hello Abi';
    }
}
let changeColor=()=>{
   let c= document.querySelector("#box");
c.classList.toggle("b")
}
function hideBox() {
    const box = document.getElementById("box");
    box.style.display = "none";
}

function showBox() {
    const box = document.getElementById("box");
    box.style.display = "flex";
}


function addItem() {
    const input = document.getElementById('itemInput');
    const list = document.getElementById('list');
    const itemText = input.value.trim();
    if (itemText) {
        const newItem = document.createElement('li');
        newItem.textContent = itemText;       
        list.appendChild(newItem);
        input.value = '';
    } else {
        input.style.border = '2px solid red';
        setTimeout(() => {
            input.style.border = '1px solid #345475ff';
        }, 1000);
    }
}