function show_time() {
	var curtime=new Date();
	var h= curtime.gethours();
	var m= curtime.getminutes();
	var s= curtime.getseconds();

	var format="AM"

	if(h>12){
		h=h-12;
		format="PM"
	}
	if(h<10){
		h = "0"+ h
	}
	if(m<10){
		m = "0"+ m
	}
	if (s<10){
		s= "0"+ s
	}
	if (h===0){
		h=12;
	}
	var time = h +":"+m +":"+ s +format;
	document.getElementById("digitalclock").innertext= time;
	document.getElementById("digitalclock").textcontent= time;
	show_time();
	setInterval(show_time, 1000)
}