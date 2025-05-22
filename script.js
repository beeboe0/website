console.log('javascript is rad');

var number = 10;
var string = 'hello there';
var isRad = true;
var groceries = ['Milk', 'Eggs', 'Cheese'];

if(number == 10){
    console.log('Yes!');
} else {
    console.log('Nope!');
}

//document.getElementById('box').innerHTML = string + "hey1";

for(var i=0; i < 10; i++){
    console.log(i);
}

function listgroceries(){
    for(var i = 0; i < groceries.length; i++){
        console.log(groceries[i]);
    }
}

listgroceries();

document.getElementById('box').addEventListener('click', function() {alert('I got clicked');} )