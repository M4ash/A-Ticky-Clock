//construction part
function clocky(){
    var d, h, m, s, clock, clr;


    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();


    if(h <= 9) {
        h= "0"+h;
    }


    if(m <= 9) {
        m= "0"+m;
    }

    if(s <= 9) {
        s= "0"+s;
    }
    
    clock = h + ":" + m + ":" + s;
    clr = "#" + h + m + s;
    
    document.getElementById("clock").innerHTML = clock;
    document.body.style.backgroundColor = clr;
    setTimeout(clocky, 1000);
};


//calling part
clocky();

    