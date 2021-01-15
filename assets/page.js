function show() {
    switch(document.getElementById("theme").value)
    {
        case "first option": document.getElementById("body").classList.remove('black');document.getElementById("body").classList.remove('blue');document.getElementById("body").classList.add('white');break;   

        case "second option": document.getElementById("body").classList.add('black');document.getElementById("body").classList.remove('blue');break;

        case "third option": document.getElementById("body").classList.add('blue');break;
}
}
