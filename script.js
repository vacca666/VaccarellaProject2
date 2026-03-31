        document.getElementById("submittitle").onclick = function() {
            var text = document.getElementById("userInput").value;
            
            document.getElementById("displayArea").innerHTML = text;
        }

        function myFunction() {
  var x = document.getElementById("concept");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function changeColor(){
  const colors = ['red', 'blue', 'green', 'purple', 'pink', 'yellow', 'orange', 'yellowgreen', 'seagreen', 'violet']
  const randomColor = colors[Math.floor(Math.random()* colors.length)]
  document.body.style.backgroundColor = randomColor;
  document.getElementById('colorName').textContent = 'Current Color: ${randomColor.charAt(0).toUpperCase()+ randomColor.slice(1)}';

}




