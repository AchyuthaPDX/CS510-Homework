// Enter your code here
function queryparam(){


    var userInput = document.getElementById("comments").value;
    var url= userInput.split('?');
    document.getElementById("url").innerHTML = url[0];
    var param= url[1];
    var param1 = param.split('&');
    for(let i=0;i<param1.length;i++){
        document.getElementById("param").innerHTML += param1[i].replace("=",":") + "<br>";       
    }
    
}


// Test Input #1:
// http://www.example.com

// Test Output
// http://www.example.com

// Test Input #2:
// http://www.example.com?name=r2d2

// Output
// http://www.example.com
// name: r2d2

// Test Input #3:
// http://www.example.com?name=r2d2&email=r2d2%40me.com&human=no

// Output
// http://www.example.com
// name: r2d2
// email: r2d2@me.com
// human: no
