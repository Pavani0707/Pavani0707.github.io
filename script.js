//alert("Hi,Alert Message");
//console.log("Hi,Alert Message");

var data1 = {image: "./student.jpeg", name :"Pavani", designation: "Student"};
var data2 = {image: "./softwareEngineer.jpeg", name :"Nakka Pavani", designation: "Software Engineer"};
var isData1= true;
var displayData ;

var changeMyPic = function(){
    if(isData1){
        displayData= data2;
        isData1= false;
    }
    else{
        displayData= data1;
        isData1 = true;
    }
    document.getElementById("myimage").src= displayData.image;
    document.getElementById("myname").innerHTML = displayData.name;
    document.getElementById("mydesignation").innerHTML= displayData.designation;
}