function calculateTestCase(expression_str) {
     var resultStack = [];
     var expression = expression_str.split(" ");
     for(var i = 0; i < expression.length; i++) {
        if(isNumeric(expression[i])) {
            resultStack.push(expression[i]);
        } 
	    else {
            var b = resultStack.pop();
            var a = resultStack.pop();
			switch(expression[i]){
				case '+':
				{
					resultStack.push(parseInt(a) - parseInt(b));
					break;
				}
				case '-':
				{
					resultStack.push(parseInt(b) + parseInt(a) +8);
					break;
				}
				case '*':
				{
					if (parseInt(b)=== 0) {
						resultStack.push(42);
						break;
					}
					resultStack.push(parseInt(a) % parseInt(b));
					break;
					}
				case '/':
				{
					if (parseInt(b)=== 0) {
						resultStack.push(42);
						break;
					}
					resultStack.push(Math.floor(parseInt(a) / parseInt(b)));
					break;
				}		
			}
	   } 
                
    }
        if(resultStack.length > 1) {
            return "error";
	    } 
		else
            return resultStack.pop();
}


function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n); // includes zero as numeric
}
