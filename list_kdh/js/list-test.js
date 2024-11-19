const nameList = [];

const addBtn = document.querySelector("#add");
addBtn.addEventListener("click", addList); 

function addList() {
    const name = document.querySelector("#name").value; 
    if (name == null || name == ""){
        alert("이름과 연락처를 입력해주세요.");
        return false;
    }else{
        nameList.push(name); 
        document.querySelector("#name").value = ""; 
        document.querySelector("#name").focus();
    }
    showList();
}    

function showList() {
	let list = "<ul>";
    for (let i=0; i<nameList.length; i++) { 
        list += "<li>" + nameList[i] + "<span class='close' id=" + i + ">X</span></li>"; 
    }
    list += "</ul>";
    document.querySelector('#nameList').innerHTML = list; 
    const remove = document.querySelectorAll(".close");  
    for(let i = 0; i < remove.length; i++) {
        remove[i].addEventListener("click", removeList); 
    }

    console.log(nameList.length);
}

function removeList() {
    const id = this.getAttribute("id");
    nameList.splice(id, 1); 
    showList(); 

}



