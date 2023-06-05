//alert("Hi,Alert Message");
//console.log("Hi,Alert Message");

var data1 = {image: "./old_picture.jpeg", name :"Pavani", designation: "Intern"};
var data2 = {image: "./new_picture.jpeg", name :"Nakka Pavani", designation: "Software Engineer"};
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