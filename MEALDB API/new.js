function getEndPointData(endPointURL,title,img,insertId, callBackFunction){
    const xhr = new XMLHttpRequest();
    xhr.open("Get", endPointURL);

    xhr.onload = function () {
        const data = JSON.parse(xhr.responseText); 
        var key = Object.keys(data)[0];
        var objectList=data[key]; 
        console.log(objectList);
        callBackFunction(objectList,title,img,insertId);
    }
    xhr.send();
  

function generateCell(title,img,insertId ) {

    let check = $.get("template.html", (data) => {
        let newData = data.replace("##IMG##", img);
        newData = newData.replace("##TITLE##", title);
        console.log(newData);
        document.getElementById(insertId).innerHTML+=newData;
    });

}
function bindingData(data) {
    
    for(let i=0; i< (data.meals).length;i++){
        var title=data.meals[i].strMeal;
        var img = data.meals[i].strMealThumb;
        console.log(title)
        generateCell(title,img,insertId);
     
    }
}
getEndPointData("js.json","strMealThumb","strMeal","lastest_meal",bindingData);
// function bindingData(data,titleKey,imgKey,insertId) {
 
//     for(let i=0; i< (data).length;i++){
//         var title=data[i][titleKey];
//         var img = data[i][imgKey];
//         document.getElementById(insertId).innerHTML+=generateCell(title,img);
     
//     }
// }
// getEndPointData("latestMeal.json","strMeal","strMealThumb","latest-row", bindingData);
}