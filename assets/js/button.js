<input type="button" id="Button" onclick="Buttontoggle()"></input>

function Buttontoggle()

{
  var t = document.getElementById('playButton');
  if(t.value=="Play"){
      t.value="Pause";}

  else if(t.value=="Pause"){
      t.value="Play";}
}

