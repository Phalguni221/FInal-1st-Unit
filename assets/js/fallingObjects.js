window.onload=function() 
{
    var c= document.getElementById('canvas');
    var ctx =c.getContext('2d');

    arr= new Array();
    function draw() {
        ctx.fillRect(0,0,800,800);

    if (Math.random() < 0.1);
    {
        var square = new Object();
        square.x = Math.floor(Math.random()*600);
        square.y=0;
        arr.push(square);
    }



for (i=arr.length -1; i>0; i--)
{
arr[i].y++;


ctx.beginPath();
ctx.arc(arr[i].x, arr[i].y, 20,0, Math.PI*2,true);
ctx.fillStyle="red";
ctx.fill();

}

ctx.fillStyle = "blue";
}

setInterval(draw,1000);

}
