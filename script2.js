var userInfo = {name:"", image:"", userName : ""};

var changeMyPic = function(){
    fetch("https://randomuser.me/api/").then((response)=>response.json()).then((data)=>{
        userInfo.name = data.results[0].name.first;
        userInfo.image = data.results[0].picture.large;
        userInfo.userName = data.results[0].login.username;
        document.getElementById("myimage").src = userInfo.image;
        document.getElementById("myname").innerHTML= userInfo.name;
        document.getElementById("myusername").innerHTML= userInfo.userName;
    })

}