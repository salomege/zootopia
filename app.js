	// var click = document.getElementsByClassName('click');
	// var promotionsImg = document.getElementsByClassName('promotions-img');
	// var l = 0;
	// click[1].onclick = ()=>{
	// 	l++;
	// 	for(var i of promotionsImg)
	// 	{
	// 		if (l==0) {i.style.left = "0px";}
	// 		if (l==1) {i.style.left = "-202px";}
	// 		if (l==2) {i.style.left = "-404px";}
	// 		if (l==3) {i.style.left = "-606px";}
	// 		if (l==4) {i.style.left = "-808px";}
    //         if (l==5) {i.style.left = "-1010px";}
	// 		if (l==6) {i.style.left = "-1212px";}
	// 		if (l>6) {l=6;}
	// 	}
	// }
	// click[0].onclick = ()=>{
	// 	l--; 
	// 	for(var i of promotionsImg)
	// 	{	
	// 		if (l==0) {i.style.left = "0px";}
	// 		if (l==1) {i.style.left = "-202px";}
	// 		if (l==2) {i.style.left = "-404px";}
	// 		if (l==3) {i.style.left = "-606px";}
    //         if (l==4) {i.style.left = "-808px";}
	// 		if (l==5) {i.style.left = "-1010px";}
			
	// 		if (l < 0) {l=0;}
	// 	}
	// }
	


	var click = document.getElementsByClassName('click');
	var promotionsImg = document.getElementsByClassName('promotions-img');
	var l = 0;
	click[1].onclick = ()=>{
		l++;
		for(var i of promotionsImg)
		{
			if (l==0) {i.style.left = "0px";}
			if (l==1) {i.style.left = "-740px";}
			if (l==2) {i.style.left = "-1480px";}
			if (l==3) {i.style.left = "-2220px";}
			if (l==4) {i.style.left = "-2960px";}
			if (l>4) {l=4;}
		}
	}
	click[0].onclick = ()=>{
		l--; 
		for(var i of promotionsImg)
		{	
			if (l==0) {i.style.left = "0px";}
			if (l==1) {i.style.left = "-740px";}
			if (l==2) {i.style.left = "-1480px";}
			if (l==3) {i.style.left = "-2220px";}
			if (l < 0) {l=0;}
		}
	}