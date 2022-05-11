function getAdvice() {
    let xhtthp = new XMLHttpRequest();
    xhtthp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let myJsObject = JSON.parse(this.responseText);
            adviceId.innerText = "Advice # " + myJsObject.slip.id;
            adviceText.innerText = "“" + myJsObject.slip.advice + "”";
        }
    };
    xhtthp.open("GET", "https://api.adviceslip.com/advice");
    xhtthp.send();
}
