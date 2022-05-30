document.querySelector("#nc").addEventListener("click", function () {
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);

    document.querySelector("#randomcolor").style.backgroundColor = `rgb(${red},${green},${blue})`;
});

var value = 1;
document.querySelector("#ap").addEventListener("click", function () {

    if(value<=16){
        document.querySelector(`.a${value}`).style.backgroundColor = `rgb(${red},${green},${blue})`;
        value = value + 1;
    }
    else{
        alert("Pallet is full please remove a color to add another color")
    }
});
