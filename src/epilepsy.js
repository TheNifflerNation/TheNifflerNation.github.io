function epilepsy() {
    document.body.style.backgroundColor = "rgb(" + Math.random() * 256 + ", " + Math.random() * 256 + ", " + Math.random() * 256 + ")"
    setInterval(() => {
        document.body.style.backgroundColor = "rgb(" + Math.random() * 256 + ", " + Math.random() * 256 + ", " + Math.random() * 256 + ")"
    }, 1000);
}