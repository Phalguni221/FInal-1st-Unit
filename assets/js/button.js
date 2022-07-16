{/* <button id="playButton" type="button" class="btn btn-default btn-xs">
Play
<span class="glyphicon glyphicon-pause"></span>
<!-- <span class="glyphicon glyphicon-play"></span> -->
</button>
<button id="pauseButton" type="button" class="btn btn-default btn-xs">
Pause
<span class="glyphicon glyphicon-pause"></span>
</button> */}


<input type="button" id="Button"
       onclick="Buttontoggle();">
       </input>
function Buttontoggle()

{
  var t = document.getElementById("Button");
  if(t.value=="Play"){
      t.value="Pause";}

  else if(t.value=="Pause"){
      t.value="Play";}
}
