//!2//
// var movies =[{name:"big mama 1",image:"C:\Users\97254\Desktop\my site\משימות בית\22.8.21Dom\pictures\1m.jpg"},
// {name:"big mama 2",image:"C:\Users\97254\Desktop\my site\משימות בית\22.8.21Dom\pictures\m2.jpg"},
// {name:"big mama 3",image:"C:\Users\97254\Desktop\my site\משימות בית\22.8.21Dom\pictures\m3.jpg"}]

// var actresses=[{image:"C:\Users\97254\Desktop\my site\משימות בית\22.8.21Dom\pictures\1.jpg"},
// {image:"C:\Users\97254\Desktop\my site\משימות בית\22.8.21Dom\pictures\2.jpg"},
// {image:"C:\Users\97254\Desktop\my site\משימות בית\22.8.21Dom\pictures\3.jpg"}]
// console.log(movies,actresses);
// for(var i=0;i<movies.length;i++){
//     for(var j=0;j<actresses.length;j++)
//     console.log(movies[i],actresses[j]);
// }
//!3//
// var input=document.getElementById("input");
// var button=document.getElementById("but");
// var p=document.getElementById("p")
// button.addEventListener("click",function(){
// p.innerHTML+=`${input.value}<br>`
// });
//!4//
// var input1=document.getElementById("input1");
// var input2=document.getElementById("input2");
// var button=document.getElementById("but");
// var p=document.getElementById("p")
// button.addEventListener("click",function(){
    // var object={name:input1.value,lastName:input2.value}
    // console.log(object);    
// p.innerHTML+=` name:${input1.value}<br>last name:${input2.value}<br>`
// });
//!5//
// var input1=document.getElementById("input1");
// var input2=document.getElementById("input2");
// var input3=document.getElementById("input3");
// var button=document.getElementById("but");
// var p=document.getElementById("p")
// button.addEventListener("click",function(){
// var object={name:input1.value,email:input2.value,age:Number(input3.value)}
// console.log(object);  
// p.innerHTML+=`name:${input1.value}<br>email:${input2.value}<br>age:${Number(input3.value)}`
// });
//!6//
// var input1=document.getElementById("input1");
// var input2=document.getElementById("input2");
// var button=document.getElementById("but");
// var p=document.getElementById("p")
// button.addEventListener("click",function(){
//     var object={name:input1.value,lastName:input2.value}
//     console.log(object);    
// p.innerHTML+=` name:${input1.value}<br>last name:${input2.value}<br>`
// });
//!7//
// var p=document.getElementById("p");
// for(var i=1;i<10;i++){
//     p.innerHTML+=`<p>index</p>`
// }
//!8//
// var arrayEmails=["eliasmayan@gmail.com","eliasdalia@gmail.com","eliaseden@gmail.com","eliasrachel@gmail.com"];
// var input=document.getElementById("input");
// var button=document.getElementById("but");
// var p=document.getElementById("p")
// button.addEventListener("click",function(){
// for(var i=0;i<arrayEmails.length;i++){
//     if(arrayEmails[i]==input.value){
//         p.innerHTML+=`the email exist`

//     }

// }
// });
//!9//
// var input=document.getElementById("input");
// var button=document.getElementById("but");
// var p=document.getElementById("p")
// button.addEventListener("click",function(){   
// p.innerHTML+=`${input.value}<br>${input.value.length}`
// });
//!10//
// var input1=document.getElementById("input1");
// var input2=document.getElementById("input2");
// var input3=document.getElementById("input3");
// var input4=document.getElementById("input4");
// var button=document.getElementById("but");
// var p=document.getElementById("p")
// button.addEventListener("click",function(){
// var object={fullName:input1.value,country:input2.value,flag:`${input3.value}"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXYlrAqSYY97Qq6DK4NpksEpODEsXjB4LHrw&usqp=CAU"`,age:Number(input4.value)}
// console.log(object);  
// p.innerHTML+=`full name:${input1.value}<br>country:${input2.value}<br>flag:${input3.value}<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXYlrAqSYY97Qq6DK4NpksEpODEsXjB4LHrw&usqp=CAU"><br>age:${Number(input4.value)}`
// });
