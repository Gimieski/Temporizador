var date
var startTimer = '';

function test(dates){
  date = new Date(dates).getTime();

  const text=document.querySelector(".text");
  let textData=new Date(dates);
  const day= textData.getDate()+1;
  const mouth=textData.getMonth()+1;
  const year=textData.getFullYear();

	function updateTimer(date){
		var now = new Date().getTime();
		var distance = date - now;

		//calculando o tempo
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)+3);
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    const res=document.querySelector("#test");

    if(now>=date){
      res.innerHTML="Insira uma Data válida";
      text.innerHTML=" ";
      clearInterval(startTimer);
    }else{
      const msg=`${days}:${hours}:${minutes}:${seconds}`
      res.innerHTML=msg
      text.innerHTML=`${day}/${mouth}/${year}`
    }
	}
	startTimer = setInterval(function() { updateTimer(date); }, 1000);
}

