var imageCount = 0;
var currentImage = 0;
var images = new Array();

images[0] = '../images/cyberpunk2.png';
images[1] = '../images/cyberpunk3.png';
images[2] = '../images/cyberpunk.jpg';
images[3] = '../images/cyberpunk4.jpg';
images[4] = '../images/cyberpunk5.jpg';

var preLoadImages = new Array();
for (var i = 0; i < images.length; i++)
{
if (images[i] == "")
    break;

preLoadImages[i] = new Image();
preLoadImages[i].src = images[i];
imageCount++;
}

function startSlideShow()
{
if (document.body && imageCount > 0)
{
    document.body.style.transition = '3s';
    document.body.style.backgroundImage = "url("+images[currentImage]+")";    
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundRepeat = "repeat";
    document.body.style.backgroundPosition = "left top";

    currentImage = currentImage + 1;
    if (currentImage > (imageCount-1))
    { 
        currentImage = 0;
    }
    setTimeout('startSlideShow()', 5000);
}
}
startSlideShow();