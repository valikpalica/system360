let obj = {};
document.getElementById('findPerson').addEventListener('click',async (event)=>{
    console.log('findPerson');
    event.preventDefault();
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let patronime = document.getElementById('patronime').value;
    let data = await fetch('/getInfo/getPersonInfo',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({surname,name,patronime})
    });
    let json = await data.json();
    //console.log(json.answer);
    if(json.answer.length!= 0){
        obj = json.answer[0];
        let test = document.getElementById('test');
        test.hidden = false;
        let main  = document.getElementById('main');
        main.hidden = true;
    }
    else{
        alert('system hasn`t this person in DataBase');
    }
});

document.getElementById('save').addEventListener('click',(event)=>{
    let tr = document.getElementsByTagName('tr');
    let array = [];
    for(let i = 0; i<tr.length;i++){
        if(tr[i].id!=''){
            let input = tr[i].getElementsByTagName('input');
            for(let j=0;j<input.length;j++){
                if(input[j].checked){
                    //console.log(tr[i].id,input[j].value);
                    array.push({id:tr[i].id,value:input[j].value});
                }
            }
        }
    }
    Myfetch(obj,array);
});


const Myfetch = async (personInfo,array)=>{
    console.log(personInfo,array);
    fetch('/getInfo/save',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({personInfo,array})
    }).then((data)=>{
        window.location.href = '/page/main'
    }).catch(err=>{
        alert('Error');
        console.log(err);
    })
};





