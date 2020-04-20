
let data;
let url='https://api.covid19api.com/summary';
fetch(url, {
    method: 'GET',
}).then((responce) => responce.text()).then((t) => {
    // console.log(t);
    data = t;
    
     data=JSON.parse(data);
    //  console.log(data);
     let con=data.Countries;
     let string=``;
     con.forEach((element,index) => {
         string +=`<tr id="row${index}">

         <td>${element.Country}</td>
         <td>${element.NewConfirmed}</td>
         <td>${element.TotalConfirmed}</td>
        <td>${element.TotalDeaths}</td>
        <td>${element.TotalRecovered}</td>
     </tr>`
    //  console.log(element.Country,element.NewConfirmed,element.TotalConfirmed)
tbody=document.getElementById("tbody");
tbody.innerHTML=string;

});
let sbar=document.getElementById("sbar");
// console.log(sbar);
sbar.addEventListener('input',function(e){
  //  console.log("fired");
   let con=data.Countries;
   let inbar=sbar.value.toLowerCase();

//    console.log(con);
  con.forEach((element,index)=>{
      
      if(element.Country.toLowerCase().includes(inbar)){
        document.getElementById("row" +index).style.display=""
        // console.log(element.Country)
      }
      else{
        document.getElementById("row" +index).style.display="none";
      }
  })
   })
})
