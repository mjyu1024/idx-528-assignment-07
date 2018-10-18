// add
const add = function(num1,num2){
    if (typeof num1 != "number"){
        return "Error";
    } 
    
    if (typeof num2 != "number"){
        return "Error";
    }

    let ans = num1 + num2;
    ans = (ans*1).toFixed(2);
    ans = parseFloat(ans);
    return ans;
}

// subtract
const subtract = function(num1,num2){
    if (typeof num1 != "number"){
        return "Error";
    } 
    
    if (typeof num2 != "number"){
        return "Error";
    }

    let ans = num1 - num2;
    ans = (ans*1).toFixed(2);
    ans = parseFloat(ans);
    return ans;
}

// multiple
const multiple = function(num1,num2){
    if (typeof num1 != "number"){
        return "Error";
    } 
    
    if (typeof num2 != "number"){
        return "Error";
    }

    let ans = num1 * num2;
    ans = (ans*1).toFixed(2);
    ans = parseFloat(ans);
    return ans;
}

// divide
const divide = function(num1,num2){
    if (typeof num1 != "number"){
        return "Error";
    } 
    
    if (typeof num2 != "number" || num2 == 0){
        return "Error";
    }

    let ans = num1 / num2;
    ans = (ans*1).toFixed(2);
    ans = parseFloat(ans);
    return ans;
}

// square
const square = function(num){
    if (typeof num != "number"){
        return "Error";
    } 

    let ans = num * num;
    ans = (ans*1).toFixed(2);
    ans = parseFloat(ans);
    return ans;
}

// cube
const cube = function(num){
    if (typeof num != "number"){
        return "Error";
    } 

    let ans = num;
    for (let counter = 0; counter < 2; counter++) {
       ans *= num; 
    }
    ans = (ans*1).toFixed(2);
    ans = parseFloat(ans);
    return ans;
}

// power
const power = function(base, exponent){
    if (typeof base != "number"){
        return "Error";
    } 

    if (typeof exponent != "number"){
        return "Error";
    } 

    if (exponent == 0) {
        base = 1;
    }

    let ans = base;
    for (let counter = 1; counter < exponent; counter++) {
       ans *= base; 
    }
    ans = (ans*1).toFixed(2);
    ans = parseFloat(ans);
    return ans;
}

// modulo
const modulo = function(num1, num2){
    if (typeof num1 != "number"){
        return "Error";
    } 

    if (typeof num2 != "number"){
        return "Error";
    } 

    if (num2 == 0){
        return NaN;
    } 

    let ans = num1 % num2;
    ans = (ans*1).toFixed(2);
    ans = parseFloat(ans);
    return ans;
}

// squareroot
const squareRoot = function(num){
    if (typeof num != "number" || num <= 0){
        return "Error";
    } 

    let accurate = 0.0000000001;

    function closer(guess){
        if( Math.abs(power(guess,2) - num) < accurate ){
            return true;
        } else{
            return false;
        }
    }

    function improve(guess){
        return ( guess + (num/guess)) / 2;
    }

    function answer(guess){
        if(closer(guess)){
            return guess;
        } else {
            return answer(improve(guess));
        }
    }

    let ans = answer(num);
    ans = Math.abs(ans);
    ans = (ans*1).toFixed(2);
    ans = parseFloat(ans);
    return ans;
}

// cuberoot
const cubeRoot = function(num){
    if (typeof num != "number"){
        return "Error";
    } 

    let accurate = 0.00001;

    function closer(guess){
        if( Math.abs(power(guess,3) - num) < accurate ){
            return true;
        } else{
            return false;
        }
    }

    function improve(guess){
        return ( (2 * guess) + (num / square(guess)) ) / 3;
    }

    function answer(guess){
        if(closer(guess)){
            return guess;
        } else {
            return answer(improve(guess));
        }
    }

    let ans = answer(num);
    ans = (ans*1).toFixed(2);
    ans = parseFloat(ans);
    return ans;
}

// root-babylonian method
const root = function(base, exponent){
    if (typeof base != "number" || base <= 0){
        return "Error";
    } 

    if (typeof exponent != "number"){
        return "Error";
    }     

    let accurate = 0.0000001;

    function closer(guess){
        if( Math.abs(power(guess,exponent) - base) < accurate ){
            return true;
        } else{
            return false;
        }
    }

    function improve(guess){
        return ( ((exponent-1) * guess) + (base / power(guess,(exponent-1))) ) / exponent;
    }

    function answer(guess){
        if(closer(guess)){
            return guess;
        } else {
            return answer(improve(guess));
        }
    }

    let ans = answer(base);
    ans = (ans*1).toFixed(2);
    ans = parseFloat(ans);
    return ans;
}
