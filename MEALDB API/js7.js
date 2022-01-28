function requestEndPoint(endPointURL,loopController,_image,titleKey,id,_html) {
    const xhr = new XMLHttpRequest();
    xhr.open("Get", endPointURL);
    xhr.onload = function () {
      const dataX = JSON.parse(xhr.responseText);
      let key = Object.keys(dataX)[0];
      let objectList = dataX[key];
      
      getListData(objectList,loopController,_image,titleKey,id,_html);
    };
    xhr.send();
  }
  
  function getListData(data,loopController,_image,titleKey,id,_html) {
    for (let i = 0; i < loopController; i++) {
      let title = data[i][titleKey];
      let img = data[i][_image];
      document.getElementById(id).append(_html(title,img));
    }
  }
  requestEndPoint("js.json",8,"strMealThumb","strMeal","lastest_meal",generateHtml);
  requestEndPoint("js2.json",4,"strMealThumb","strMeal","popular_meal",generateHtml);
  requestEndPoint("js3.json",8,"strMealThumb","strMeal","random_meal",generateHtml);
  requestEndPoint("js4.json",4,"strMealThumb","random_meal","Random_Indegrants",generateHtml);
  
  function generateHtml(title, img) {
    let template=document.querySelector("#title_image").content.cloneNode(true);
    template.querySelector(".var-img").setAttribute("src",img);
    template.querySelector("h3").textContent=title;   
    return template;
  }
  