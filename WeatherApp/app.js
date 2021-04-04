const input1  = document.querySelector('#div1 input');
const far  = document.querySelector('#div1 h2');
console.log(far);

input1.addEventListener('keypress',(e)=>{
  if(e.which==13 && input1.value!=""){
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input1.value}&appid=65001cc0e337cda82aac927a6fa9d24e`)
.then(data => data.json())
.then(fetcheddata =>
    {
        input1.value = "";
        input1.classList.add('inp');
        const div1 = document.querySelector('#div1 h1');
        div1.innerText = fetcheddata.name+","+fetcheddata.sys.country;
        const div2 = document.querySelector('#div1 h2');
      
        div2.innerText = (Math.round((fetcheddata.main.temp)-273.15))+"℃";
        console.log(fetcheddata);
        console.log();
        const div3 = document.querySelector("#firstdiv .circle div:first-child h3") ;
        div3.innerText = (fetcheddata.wind.speed)+ " meter/sec";
      

        const div4 = document.querySelector("#firstdiv .circle div:nth-of-type(2) h3") ;
        div4.innerText = fetcheddata.main.humidity +" %";


        const div5 = document.querySelector("#firstdiv .circle #maxtemp h3") ;
        div5.innerText = Math.round((fetcheddata.main.temp_max)-273.15) +"℃" ;
        
         const div6 = document.querySelector("#firstdiv .circle #mintemp h3") ;
         div6.innerText =Math.round((fetcheddata.main.temp_min)-273.15) + "℃";
      
         const div7 = document.querySelector("#seconddiv .circle div:first-child h2") ;
         div7.innerText = fetcheddata.weather[0].main;
        
       

         const div8 = document.querySelector("#seconddiv .circle div:nth-of-type(2) h2");
          var date1 = Date();
         var dat1 = date1.substr(16,7).split(':');
         dat1.pop();
         dat1[0] = Math.abs(dat1[0]-12);
        div8.innerText =dat1.join(':');
        const div9 = document.querySelector("#seconddiv .circle div:nth-of-type(2) h3");
       div9.innerText = date1.substr(0,10);

     
    })
.catch(e =>
    {
    input1.attributes('placeholder',"Entered Wrong City");
    } );
  }

})


