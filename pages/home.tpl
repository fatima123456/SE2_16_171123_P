<!DOCTYPE html>
<html>
    <head>
        <meta charset = "utf-8">
        <title>UniInfo</title>
        <link rel="stylesheet" type="text/css" href="../css/styleHome.css" />
    </head>
    <body>
        <img src="http://www.fossili.it/immagini/italia.gif" id="ItaliaImage" style="display:none">
        <div class="canvasContainer">
            <canvas id="myCanvas" width="400" height="500" style="z-index:1; position:absolute"> 
            Your browser does not support the HTML5 canvas tag.
            </canvas>
            <button style="z-index:2;background-color:red; position:absolute; top:45px; left:150px; height:15px; width:10px; border-radius:10px"></button>
            <button style="z-index:2;background-color:red; position:absolute; top:255px; left:180px; height:15px; width:10px; border-radius:10px"></button>
        </div>
        <script>
            //devo togliere questo script inline
            window.onload = function() {
            var canvas = document.getElementById("myCanvas");
            var ctx = canvas.getContext("2d");
            var img = document.getElementById("ItaliaImage");
            ctx.drawImage(img, 0, 0,400,500);
            };
        </script>
        
    </body>
</html>