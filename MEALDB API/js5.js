 
function getEndPointData(endPointURL, callBackFunction){
    const abc = new XMLHttpRequest();
    abc.open("Get", endPointURL);
    abc.onload = function () {
        const data = JSON.parse(abc.responseText); 
         
        
        callBackFunction(data);
  
    }
    abc.send();
  }
 


function generateCell(title,img) {
  return `<div style="margin:0 0 10px 0;" class="col-lg-3">
    <a href=""><img class="img-style" src="${img}"></a>
    <a href="" style="color:#d57d1f; font-size:25px">${title}</a>
     </div>`;
}

getEndPointData("js.json", bindingData);
function bindingData(data) {
    
    for(let i=0; i< (data.meals).length;i++){
        var title=data.meals[i].strMeal;
        var img = data.meals[i].strMealThumb;
        document.getElementById("lastest_meal").innerHTML+=generateCell(title,img);
     
    }
}

getEndPointData("js2.json",bindingData1);
function bindingData1(data) {
for(let i in data.categories){
    var title=data.categories[i].strCategory;
    var img = data.categories[i].strCategoryThumb;
    document.getElementById("popular_meal").innerHTML+=generateCell(title,img);
 
}
}

getEndPointData("js3.json",bindingData2);
function bindingData2(data) {
for(let i in data.meals){
    var title=data.meals[i].strMeal;
    var img = data.meals[i].strMealThumb;
    document.getElementById("random_meal").innerHTML+=generateCell(title,img);
 
}
}

getEndPointData("js4.json",bindingData3);
function bindingData3(data) {
for(let i in data.categories){
    var title=data.categories[i].strCategory;
    var img = data.categories[i].strCategoryThumb;
    document.getElementById("Random_Indegrants").innerHTML+=generateCell(title,img);
 
}
}

// function generateCountryCell(img) {
//     return `   <div style="margin:0 0 10px 0;" class="col-lg-1">
//     <a href=""><img class="img-country-style" src="${img}"></a>
//     </div> `;
//   }
//   getEndPointData("country.json",bindingData4);
//   function bindingData4(data) {
//   for(let i in data.country){
//       var img = data.country[i].cunFlagThumb;
//       document.getElementById("country").innerHTML+=generateCountryCell(img);
   
//   }
//   }












// document.getElementById("latest-row").innerHTML+=generateCell();
// document.getElementById("latest-row").innerHTML+=generateCell();
// document.getElementById("latest-row").innerHTML+=generateCell();
// document.getElementById("latest-row").innerHTML+=generateCell();
// document.getElementById("latest-row").innerHTML+=generateCell();

// document.getElementById("popular-row").innerHTML+=generateCell();
// document.getElementById("popular-row").innerHTML+=generateCell();
// document.getElementById("popular-row").innerHTML+=generateCell();
// document.getElementById("popular-row").innerHTML+=generateCell();
// document.getElementById("popular-row").innerHTML+=generateCell();
// document.getElementById("randon-row").innerHTML=getHtml();
// document.getElementById("ingredient-row").innerHTML=getHtml();







