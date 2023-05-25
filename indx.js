update();
function enrole(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var cont = document.getElementById('num').value;
    var url = document.getElementById('url').value;
    var gender;
    var ele = document.getElementsByName('gender');
            for (i = 0; i < ele.length; i++) {
                if (ele[i].checked)
                gender = ele[i].value;
            }

            console.log(gender);
    var skill = "";
    var skill1 = document.getElementById('box1');
    var skill2 = document.getElementById('box2');
    var skill3 = document.getElementById('box3');
    if(skill1.checked == true){
        skill = skill.concat(document.getElementById('box1').value,",") 
    }
    if(skill2.checked == true){
        skill = skill.concat(document.getElementById('box2').value,",")
    }
    if(skill3.checked == true){
        skill = skill.concat(document.getElementById('box3').value)
    }
    console.log(skill);

    if (localStorage.getItem('itemsJson')==null){
        itemJsonArray = [];
        itemJsonArray.push([name, email, cont, url, gender, skill]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else{
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([name, email, cont, url, gender, skill]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    //clearStorage();
    for(var i=0;i<itemJsonArray.length;i++){
        console.log(itemJsonArray[i])
    }
    update();
    var name = document.getElementById('name').value="";
    var email = document.getElementById('email').value="";
    var cont = document.getElementById('num').value="";
    var url = document.getElementById('url').value="";
    document.getElementById('box1');
}

function update(){
    if (localStorage.getItem('itemsJson')==null){
        itemJsonArray = []; 
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    } 
    else{
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr); 
    }
    let data = document.getElementById("list");
    let str = "";
    itemJsonArray.forEach((element, index) => {
        console.log(element[0]);
        str += `
        <div class="dec">
            <h2>${element[0]}</h2>
            <h3>${element[1]}</h3>
            <h3>${element[2]}</h3>
            <h3>${element[3]}</h3>
            <h3>${element[4]}</h3>
            <h3>${element[5]}</h3>
        </div>
        <div class="img">
            <span><img src="image/${element[4]}.png" alt=""></span>
        </div>`; 
    });
    console.log(str)
    data.innerHTML = str;
}
function clearStorage(){
    if (confirm("Do you areally want to clear?")){
    console.log('Clearing the storage')
    localStorage.clear();
    update()
    }
}