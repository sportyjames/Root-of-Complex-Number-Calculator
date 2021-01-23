//output the selected form
function myFunction1(){
    var x = document.getElementById("mySelect").value;
    document.getElementById("Form").innerHTML = "You selected: " + x;
    
}

//calculate the value r and θ
function myFunction3() {

  var x = document.getElementById("a").value;
  var y = document.getElementById("b").value;
  var z = x*x + y*y;
  var sqrt = Math.sqrt(z);
  var argument = Math.atan(y/x);
  
  
  
  document.getElementById("output1").innerHTML = "You have r =" + sqrt + " which will be used in trignometric form";
  document.getElementById("output2").innerHTML = "You have θ =" + argument + " which will be used in trignometric form";


}

//use the value of r, θ, and the number of root to find the root
function myFunction4(val){
  
  var r = document.getElementById("valueR").value;
  var θ = document.getElementById("Valueθ").value;
  var roots = document.getElementById("numberOfRoots").value;
  var rpow = Math.pow(r, 1/roots);
  
  
  if(roots<=0)
  {
    document.getElementById("k").innerHTML = "Error, please enter a valid number";
    document.getElementById("root").innerHTML = "undefined";
  }
  else if(roots==1)
  {
    document.getElementById("k").innerHTML = "0";
    document.getElementById("root").innerHTML = "the same input complex number";
  }
  else{
    var k = new Array(roots);
    var index,elementValue;
    var text;
    var text2;
    var newR;
    var pi;
    var sign;

    
    
    text = "<ul>";
    for(index =0,elementValue=0; index< roots; index++,elementValue +=1)
		{
      k[index] = elementValue;
	    text +=  "<li>" + k[index] + "</li>";
		}
    text += "</ul>";
    
    pi = Math.PI;
    
    
    text2 = "<ol>";
    for(index =0,elementValue=0; index< roots; index++,elementValue +=1)
		{
      k[index] = elementValue;
      
      if(Math.sin((θ + 2 * pi * k[index])/roots)<0){
        sign = " ";
      }
      else{
        sign = " + ";
      }
      
      text2 +=  "<li>" + rpow * (Math.cos((θ + 2 * pi * k[index])/roots)) + sign + rpow * (Math.sin((θ + 2 * pi * k[index])/roots)) + " i " + "</li>";
    }
    text2 += "</ol>";
    
    
    
    document.getElementById("k").innerHTML = text;
    document.getElementById("root").innerHTML = text2;
  }
}
