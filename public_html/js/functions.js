
function snapShot() {
   if (localMediaStream) {
   ctx.drawImage(video, 0, 0);}
   snapShotControler = true;
 }

function donwloadImage(){
if (snapShotControler === false)    
    return alert ("Take e picture first");    
else{
var imag = canvas.toDataURL("image/jpeg");
imag = imag.replace("image/jpeg", "image/octet-stream");
document.location = imag;	
};}

function notImplementedYet ()
{
    alert ("This functionality is not implemented yet\n\
                    Comming soon!!");
}