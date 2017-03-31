
var elementHeight = []
var element = []
var check

window.addEventListener( "scroll", function() {

	var StratumTUM = document.getElementsByClassName('tum');
	for (var i = 0; StratumTUM.length > i; i++) {

		if (StratumTUM[i].parentElement.id == "stratuming") {
			elementHeight.push(StratumTUM[i].clientHeight);
			element.push(StratumTUM[i]);
			var y =  window.pageYOffset;

			if (y >  elementHeight[0]) {
				document.getElementById("stratuming").removeChild( element[i], null );
				document.getElementById("stratuming").insertBefore(element[i], null);
			 	check = true;
			 	console.log(check);
			} else if( check == true && y == 0) {
				check = false;
			 	console.log(check);
			}

		}
	}
	} ) ;


var sum  = function(arr) {
    var sum = 0;
    arr.forEach(function(elm) {
        sum += elm;
    });
    return sum;
};
