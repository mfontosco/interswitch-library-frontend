function greet() {
    var currentTime = new Date();
    var hour = currentTime.getHours();

    if (hour >= 6 && hour < 12) {
        return "Good morning!";
    } else if (hour >= 12 && hour < 18) {
        return "Good afternoon!";
    } else {
        return "Good evening!";
    }
}

export default greet;