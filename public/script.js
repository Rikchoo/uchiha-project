function startLoading() {
    document.getElementById("loginContainer").style.display = "none";

    document.getElementById("loadingSpinner").style.display = "block";

    setTimeout(function () {
        document.getElementById("loadingSpinner").style.display = "none";
        document.getElementById("otherContainer").style.display = "block"; 
    }, 5000);

}