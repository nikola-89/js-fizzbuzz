for (var i = 1; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        document.getElementById('list').innerHTML += '<li>' + 'FizzBuzz' + '</li>';
    }
    else if (i % 3 == 0) {
        document.getElementById('list').innerHTML += '<li>' + 'Fizz' + '</li>';
    }
    else if (i % 5 == 0) {
        document.getElementById('list').innerHTML += '<li>' + 'Buzz' + '</li>';
    }
    else {
        document.getElementById('list').innerHTML += '<li>' + i + '</li>';
    }
}
