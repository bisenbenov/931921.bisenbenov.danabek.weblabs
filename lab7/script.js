const out = document.querySelector("#out");
const input = document.querySelector("input");

function placeFigure(figureName) {
    const value = input.value;
    for (let i = 0; i < value; i++) {
        let figure = document.createElement("div");
        figure.style.opacity = 0.5;
        switch(figureName) {
            case "square":
                figure.classList.add("square");
                genRandSquare(figure);
                break;
            case "circle":
                figure.classList.add("circle");
                genRandSquare(figure);
                break;    
            case "triangle":
                figure.classList.add("triangle");
                genRandTriangle(figure);
                break;
        }
        figure.addEventListener('dblclick', deleteFigure);
        generateRandomPos(figure);
        out.appendChild(figure); 
    }
}

function generateRandomPos(figureName) {
    let left = Math.floor((Math.random() * 400) + 1)+"px";
    let top = Math.floor((Math.random() * 400) + 1)+"px";
    let figureStyle = figureName.style;
    figureStyle.position = "absolute";
    figureStyle.top = top;
    figureStyle.left = left;
}

function genRandSquare(figure) {
    const a = Math.random() * 200;
    figure.style.height = a + 'px';
    figure.style.width = a + 'px';
    figure.addEventListener('click', (event)=>{event.target.style.backgroundColor = 'yellow'});
}

function genRandTriangle(figure) {
    const a = Math.random() * 200;
    figure.style.borderLeft = a / 2 + 'px solid transparent';
    figure.style.borderRight = a / 2 + 'px solid transparent';
    figure.style.borderBottom = a + 'px solid blue';
    figure.addEventListener('click', (event)=>{event.target.style.borderBottomColor = 'yellow'});
}

deleteFigure = (event)=>{
    let figureName = event.target.className;
    switch(figureName){
        case "square":
        case "circle": 
        case "triangle":
            event.target.style.display = "none";
            break;
        default:
            break;
    }
}
