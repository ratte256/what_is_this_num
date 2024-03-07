function checkNumber() {
    var number = document.getElementById("numberInput").value;

    if (isPrime(number)) {
        document.getElementById("result").innerHTML = number + " は素数です。";
    } else {
        document.getElementById("result").innerHTML = number + " は素数ではありません。";
    }
}

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
