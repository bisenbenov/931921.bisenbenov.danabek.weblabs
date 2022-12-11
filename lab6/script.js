function resizePic(buttonNumber) {
    var imgContainer = document.getElementById("images-container");
    var catImg = document.getElementById("cat");
    var dogImg = document.getElementById("dog");

    switch(buttonNumber) {
        case 1:
            imgContainer.style = "grid-template-columns: 95% 5%;"
            catImg.style.visibility = "visible";
            dogImg.style.visibility = "hidden";
            catImg.style.width = "70%";
            break;

        case 2:
            imgContainer.style = "grid-template-columns: 50% 50%;"
            catImg.style.visibility = "visible";
            dogImg.style.visibility = "visible";
            catImg.style.width = "310px";
            dogImg.style.width = "310px";
            dogImg.style.marginLeft = "15px";
            break;
        
        case 3:
            imgContainer.style = "grid-template-columns: 5% 95%;"
            catImg.style.visibility = "hidden";
            dogImg.style.visibility = "visible";
            dogImg.style.width = "70%";
            break;
        
        default:
            break;
    }
}