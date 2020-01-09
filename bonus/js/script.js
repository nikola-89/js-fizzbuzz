var i = 1;
while (i < 101) {
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
    i++;
}
