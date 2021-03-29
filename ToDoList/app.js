const todobutton = document.querySelector('#button1');
const todoinput = document.querySelector('input');
const todoitem  = document.querySelector('ul');


 todobutton.addEventListener('click',()=> {
    if(todoinput.value!="")
    {
        const div = document.createElement('div');
 const li = document.createElement('li');
 const p1 = document.createElement('p');
 p1.innerText = todoinput.value;
 li.appendChild(p1);
 
 const div2 = document.createElement('div');
 const edit = document.createElement('i');
 edit.classList.add('fas', 'fa-edit');
 const dlt = document.createElement('i');
 dlt.classList.add('fas', 'fa-trash-alt');
 const check = document.createElement('i');
 check.classList.add('fas', 'fa-check');

 div2.appendChild(check);
 div2.appendChild(edit);
 div2.appendChild(dlt);

 li.append(div2);
 li.classList.add('list');



div.appendChild(li);
todoitem.append(div);
todoinput.value = "";

dlt.addEventListener('click',(e) =>{

    e.target.parentElement.parentElement.parentElement.classList.add('fall');
    e.target.parentElement.parentElement.parentElement.addEventListener('transitionend',() =>  e.target.parentElement.parentElement.parentElement.remove());
  
} );

let count = 0;
edit.addEventListener('click',(e) =>
 {
    if(count!=0)
    {
        console.log("if");
        const edited = document.createElement('p');
        const val =  e.target.parentElement.parentElement.children[0].value;
        e.target.parentElement.parentElement.children[0].replaceWith(edited);
        edited.innerText = val;
        count = 0;
    }
    else
    {
        console.log("else");
        const edited = document.createElement('input');
        const val =  e.target.parentElement.parentElement.children[0].innerText;
        e.target.parentElement.parentElement.children[0].replaceWith(edited);
        edited.value = val;
        count++;
    }
   
});

check.addEventListener('click',(e) =>{

     e.target.parentElement.parentElement.children[0].classList.toggle('lineth');

});

    }

    else{
        todoinput.setAttribute('placeholder','First Write then Add');
    }
   

});


todoinput.addEventListener('keypress',(event)=> {
    var code;
    if (event.key !== undefined) {
        code = event.key;
      } else if (event.keyIdentifier !== undefined) {
        code = event.keyIdentifier;
      } else if (event.keyCode !== undefined) {
        code = event.keyCode;
      }

    


    if(code == 'Enter' && todoinput.value!="")
    {
        const div = document.createElement('div');
       const li = document.createElement('li');
       const p1 = document.createElement('p');
       p1.innerText = todoinput.value;
       li.appendChild(p1);
 
      const div2 = document.createElement('div');
      const edit = document.createElement('i');
      edit.classList.add('fas', 'fa-edit');
      const dlt = document.createElement('i');
      dlt.classList.add('fas', 'fa-trash-alt');
      const check = document.createElement('i');
      check.classList.add('fas', 'fa-check');

      div2.appendChild(check);
      div2.appendChild(edit);
      div2.appendChild(dlt);

      li.append(div2);
      li.classList.add('list');



     div.appendChild(li);
     todoitem.append(div);
     todoinput.value = "";

     dlt.addEventListener('click',(e) =>{

    e.target.parentElement.parentElement.parentElement.classList.add('fall');
    e.target.parentElement.parentElement.parentElement.addEventListener('transitionend',() =>  e.target.parentElement.parentElement.parentElement.remove());
  
       } );

    let count = 0;
    edit.addEventListener('click',(e) =>
  {
    if(count!=0)
    {
        console.log("if");
        const edited = document.createElement('p');
        const val =  e.target.parentElement.parentElement.children[0].value;
        e.target.parentElement.parentElement.children[0].replaceWith(edited);
        edited.innerText = val;
        count = 0;
    }
    else
    {
        console.log("else");
        const edited = document.createElement('input');
        const val =  e.target.parentElement.parentElement.children[0].innerText;
        e.target.parentElement.parentElement.children[0].replaceWith(edited);
        edited.value = val;
        count++;
    }
   
});

    check.addEventListener('click',(e) =>{

     e.target.parentElement.parentElement.children[0].classList.toggle('lineth');

});

    }

    else if( code=='Enter' && todoinput.value=="" ) {
        todoinput.setAttribute('placeholder','Write then Press Enter');
    }
   

});








