function scoreInput(){
    const score = parseInt(document.getElementById("score").value);
    let result = "F";
    

    if (score>=0 && score<=100) {
        if (score >= 90 && score <= 100) {
            result = "A";
        } else if (score >= 80 && score < 90) {
            result = "B";
        } else if (score >= 70 && score < 80) {
            result = "C";
        } else if (score >= 60 && score < 70) {
            result = "D";
        } else if (score >= 50 && score < 60) {
            result = "E";
        } else{
            result = "F";
        }
        console.log("The student's score is: " + score + " so, the result is: " + result);
        document.getElementById("result").textContent = ("The student's score is: " + score + " the result is: " + result);
    } else {
        console.log("Please check if everything is correct !");
        document.getElementById("result").textContent = ("Please check if everything is correct !");
    }
}


