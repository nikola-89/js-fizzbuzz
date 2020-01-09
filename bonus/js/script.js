for (var i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        document.getElementById('list_for').innerHTML += '<li class="color-fizzbuzz">' + 'FizzBuzz' + '</li>';
    }
    else if (i % 3 === 0) {
        document.getElementById('list_for').innerHTML += '<li class="color-fizz">' + 'Fizz' + '</li>';
    }
    else if (i % 5 === 0) {
        document.getElementById('list_for').innerHTML += '<li class="color-buzz">' + 'Buzz' + '</li>';
    }
    else {
        document.getElementById('list_for').innerHTML += '<li>' + i + '</li>';
    }
}

// **********************************************

var x = 1;
while (x < 101) {
    if (x % 3 === 0 && x % 5 === 0) {
        document.getElementById('list_while').innerHTML += '<li class="color-fizzbuzz">' + 'FizzBuzz' + '</li>';
    }
    else if (x % 3 === 0) {
        document.getElementById('list_while').innerHTML += '<li class="color-fizz">' + 'Fizz' + '</li>';
    }
    else if (x % 5 === 0) {
        document.getElementById('list_while').innerHTML += '<li class="color-buzz">' + 'Buzz' + '</li>';
    }
    else {
        document.getElementById('list_while').innerHTML += '<li>' + x + '</li>';
    }
    x++;
}
