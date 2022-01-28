function latestmeal(resource) {
    const data = resource.meals;
    var outPut = '';
    for (let i in data) {
        outPut += `
            <div class="col-md-3 col-lg-3 col-sm-3">
            <img src="${data[i].strMealThumb}" height="240" width="240">
            <p style="color: white; text-align:center">${data[i].strMeal}</p>
            </div>
    `  }
    document.getElementById("lastest_meal").innerHTML = outPut;
}
function popular(resource) {
    const data = resource.meals;
    var outPut = '';
    for (let i in data) {
        outPut += `
            <div class="col-md-3 col-lg-3 col-sm-3">
            <img src="${data[i].strMealThumb}" height="240" width="240">
            <p style="color: white; text-align:center">${data[i].strMeal}</p>
            </div>
    `  }
    document.getElementById("popular_meal").innerHTML = outPut;
}
function random_meals(resource) {
    const data = resource.meals;
    var outPut = '';
    for (let i in data) {
        outPut += `
            <div class="col-md-3 col-lg-3 col-sm-3">
            <img src="${data[i].strMealThumb}" height="240" width="240">
            <p style="color: white; text-align:center">${data[i].strMeal}</p>
            </div>
    `  }
    document.getElementById("random_meal").innerHTML = outPut;
}

function Random_Indegrants(resource) {
    const data = resource.meals;
    var outPut = '';
    for (let i in data) {
        outPut += `
            <div class="col-md-3 col-lg-3 col-sm-3">
            <img src="${data[i].strMealThumb}" height="240" width="240">
            <p style="color: white; text-align:center">${data[i].strMeal}</p>
            </div>
    `  }
    document.getElementById("Random_Indegrants").innerHTML = outPut;
}



function html(response, action) {
    if (action == "latest") {
        latestmeal(response);
    } else if (action == "popular_meal") {
        popular(response);
    } else if (action == "random_meal") {
        random_meals(response);
    } else if (action == "Random_Indegrants") {
        Random_Indegrants(response);
    }

}


function fethc_record(action, url) {
    const xhr = new XMLHttpRequest();
    xhr.open("Get", url);
    xhr.onload = function () {
        var response = JSON.parse(xhr.responseText);
        return html(response, action);
    }
    xhr.send();
    //return response;
}

fethc_record('latest', 'js.json');
fethc_record('popular_meal', "js2.json");
fethc_record('random_meal', "js3.json");
fethc_record('Random_Indegrants', "js4.json");




// [1,2,3,4,5,6].forEach((e)=>{
//     console.log(e*2);
// });