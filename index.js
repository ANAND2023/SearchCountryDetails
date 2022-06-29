

function fun(){
    var search=document.getElementById("search").value
    var response = new XMLHttpRequest()
      response.open("get","https://restcountries.com/v3.1/name/"+search)
      response.send()
    
       response.addEventListener("load",()=>{
          var [data] = JSON.parse(response.responseText)
          document.getElementById("name").innerHTML=data.name.official
         document.getElementById("capital").innerHTML=data.capital[0]
         document.getElementById("flags").src=data.flags.svg
         document.getElementById("population").innerHTML=data.population
         document.getElementById("area").innerHTML=data.area
         document.getElementById("borders").innerHTML=data.borders
         document.getElementById("timezones").innerHTML=data.timezones
         document.getElementById("landlocked").innerHTML=data.landlocked
         document.getElementById("independent").innerHTML=data.independent
         document.getElementById("region").innerHTML=data.region
         document.getElementById("subregion").innerHTML=data.subregion
         document.getElementById("startOfweek").innerHTML=data.startOfWeek
         document.getElementById("maps").href=data.maps.googleMaps
    
       })
    }

// //collback hell
// function display() {
//   setTimeout(() => {
//      console.log("Hello world1")
//       setTimeout(() => {
//          console.log("Hello World2")
//           setTimeout(() => {
//              console.log("Hello World3")
//               setTimeout(() => {
//                  console.log("Hello World4")
//                   setTimeout(() => {
//                      console.log("Hello World5")
//                   }, 2000)
//               }, 2000)
//           }, 2000)
//       }, 2000)
//   }, 2000)
// }