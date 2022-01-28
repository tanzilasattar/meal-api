
    
function requestEndPoint(endPointURL,loop,image,title,Id,html) {
    const xhr = new XMLHttpRequest();
    xhr.open("Get", endPointURL);
    xhr.onload = function () {
      const data = JSON.parse(xhr.responseText);
      var key = Object.keys(data)[0];
      var objectList = data[key];
      getListData(objectList,loop,image,title,Id,html);
    };
    xhr.send();
  }
  
  function getListData(data,loop,_image,title,Id,_html) {
    console.log(_image, title);
    for (let i = 0; i < loop; i++) {
      var title = data[i][title];
      var img = data[i][_image];
      document.getElementById(Id).innerHTML += _html(title, img);
    }
  }
  requestEndPoint("js.json",8,"strMealThumb","strMeal","lastest_meal",generateCell);
  requestEndPoint("js2.json",4,"strMealThumb","strMeal","popular_meal",generateCell);
  requestEndPoint("js3.json",8,"strMealThumb","strMeal","random_meal",generateCell);
  requestEndPoint("js4.json",4,"strMealThumb","random_meal","Random_Indegrants",generateCell);
  
  function generateCell(title, img) {
    return `<div style="margin:0 0 10px 0;" class="col-lg-3">
      <a href=""><img class="img-style" src="${img}"></a>
      <a href="" style="color:#d57d1f; font-size:25px">${title}</a>
       </div>`;
  }
  
  

