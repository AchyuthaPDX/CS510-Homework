// https://css-tricks.com/snippets/javascript/random-hex-color/

function change() {
  var doc = document.getElementById("background");
  var color = ["#040404 ", "#1834EE", "#F3F513", "#13F515", "#F51713"];
  doc.style.backgroundColor = color[Math.floor(Math.random()*color.length)];
}
var interval = document.getElementById("interval").value;
setInterval(change, interval*1000);
function toggle(){
  if(document.getElementById("interval").disabled == true){
    document.getElementById("interval").enable == true;
    document.getElementById("tog").value = "Start";
  }
  else{
    document.getElementById("interval").enable == false;
    document.getElementById("tog").value = "Stop";
  }
}