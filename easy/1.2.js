/**Write a function that returns min and max numbers. 
 * For i.e. input [1,92,-5,25] should return {max:92, min:-5}. */

function min_max(val) {
    var val2 = val.split(' ');
    var arr = [];
    for(i of val2) {
        arr.push(parseInt(i));
    }

    var max = -Infinity;
    var min = Infinity;
    for (i of arr) {
        if (min > i) {
            min = i;  
        }
        if (max < i) {
            max = i;
        }
    }
    var demo = document.getElementById("demo");
    demo.innerHTML = "max:" + max + ", min:" + min;
}

function val() {
    var val = document.getElementById("aa").value;
    return val;
}

///////////////////////////////////////////////////
function min_max2(arr) {
    var max = -Infinity;
    var min = Infinity;
    for (i of arr) {
        if (min > i) {
            min = i;
        }
        if (max < i) {
            max = i;
        }
    }
    return "max:" + max + ", min:" + min;
}

console.log(min_max2([1,92,-5,25]));