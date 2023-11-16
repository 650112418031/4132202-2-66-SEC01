<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
   </head>
   <body>
    <div id="msg">Hello !!</div>

    <script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js"></script>
   </body>
</html>

<script>
    var num = 10;
    let name = "win";
    age = 20;

    fruit = ["apple","mango","tangmo"];
    ojb = {name:"Akkhaphon", age: 21, tel: "123-434"};

    data = { adress: ["69", "jira", "Buriram", 3100], name: "John"};

    console.log(fruit[1]);
    console.log(ojb.tel);
    console.log(data.adress[2]);

    document.getElementById("msg").innerHTML = data.adress[2];

    let longTxt = data.name + " : " + fruit[0];
    
    longTxt = `${data.name} :
            ${fruit[1]}`;
    
    $(function(){
        $("#msg").html(longTxt);
    });//jQuery ready
</script>
