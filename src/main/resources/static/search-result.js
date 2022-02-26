const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

function searchFunction() {
	 
	 // const airportCode = search-form.code.value;
	 
	 const queryString = window.location.search;
		console.log(queryString);
		const urlParams = new URLSearchParams(queryString);
		var airportCode = urlParams.get('code')
	 // var airportCode = getParam(code);
	 
		const http = new XMLHttpRequest();
     	//var params = 'username='+username+'&password='+password;
     	
      	http.open( 'GET', 'http://localhost:8080/airports/'+airportCode, true );
      	http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      	http.onreadystatechange = function() {//Call a function when the state changes.
    		if(http.readyState == 4 && http.status == 200) {
        		const obj = JSON.parse(http.responseText);
        		 let text = "<table border='1' cellspace='0'<th><tr><td>code</td><td>name</td><td>description</td></tr></th>"
			    text += "<tr><td>" + obj.code + "</td><td>" + obj.name + "</td><td>" + obj.description + " </td></tr>";
			  text += "</table>"  ;  
		  
          document.getElementById("res").innerHTML = text;
        	}
        	}
        	 http.send( null );
        	 
	
		}
		
