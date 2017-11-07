var d, h, m, s;
function clock(){
    //angle finding
    d = new Date;
    
    h = 30 * ((d.getHours() % 12) + d.getMinutes() / 60);
    m = 6 * d.getMinutes();
    s = 6 * d.getSeconds();
    
    //hand movement
    setAttr('h-hand', h);
    setAttr('m-hand', m);
    setAttr('s-hand', s);
    setAttr('s-tail', s+180);
    //
    setTimeout(clock, 1000);
    
};

function setAttr(id,val){
    var t = 'rotate(' + val + ', 70, 70)';
    document.getElementById(id).setAttribute('transform', t);
};

window.onload=clock;