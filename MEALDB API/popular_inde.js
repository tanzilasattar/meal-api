// function getData(id) {

//     const xhr = new XMLHttpRequest();
//     xhr.open("Get", "https://www.themealdb.com/api/json/v1/1/categories.php");
//     xhr.onload = function () {
//         // console.log(xhr.responseText);
//         const dataaa = JSON.parse(xhr.responseText);
//         const data = dataaa.categories;
//         console.log(dataaa);
//        var outPut = '';
//         for (let i in dataaa) {
//             outPut += `
//             <div class="col-md-3 col-lg-3 col-sm-3">
//             <img src="${data[i].strCategoryThumb}" height="240" width="240">
//             <p style="color: white; text-align:center">${data[i].strCategory}</p>
//             </div>
//     ` 
//         }
//         document.getElementById("popular_meal").innerHTML = outPut;
//     }

//     xhr.send();
// }
// getData();