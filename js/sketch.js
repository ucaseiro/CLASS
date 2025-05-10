let myFont;
let img=[];
let carte;
let proba;
let cse
let saute
function preload() {
myFont = loadFont("font/gamay.otf");
for(i=15; i<35; i++){
	img[i-15] = loadImage('img/Cartes/carte'+i+'.png');
}
}

function setup() {

textFont(myFont);
createCanvas(windowWidth,windowHeight);
background(0)
carte = loadImage('img/Cartes/Fond-cartes.png')
proba = int(random(0,100))
fill(255)
textSize(50)
text(proba,110,110)
cse =int(random(0,58))
saute = int(random(1,4))


}

function draw() {
    background(0)
image(carte, windowWidth/2-carte.width/4,windowHeight/2-carte.height/4,carte.width/2,carte.height/2);

if(proba <= 5){

    image (img[0],windowWidth/2-img[0].width/4,windowHeight/2-img[0].height/4,img[0].width/2,img[0].height/2)
}
else if(proba > 5 && proba<=11){
    
    image (img[1],windowWidth/2-img[1].width/4,windowHeight/2-img[1].height/4,img[1].width/2,img[1].height/2)
}
else if(proba > 11 && proba<=18){
  
    image (img[2],windowWidth/2-img[2].width/4,windowHeight/2-img[2].height/4,img[2].width/2,img[2].height/2)
}
else if(proba > 18 && proba<=24){
    
    image (img[3],windowWidth/2-img[3].width/4,windowHeight/2-img[3].height/4,img[3].width/2,img[3].height/2)
}
else if(proba > 24 && proba<=28){

    image (img[4],windowWidth/2-img[4].width/4,windowHeight/2-img[4].height/4,img[4].width/2,img[4].height/2)
}
else if(proba > 28 && proba<=32){
   
    image (img[5],windowWidth/2-img[5].width/4,windowHeight/2-img[5].height/4,img[5].width/2,img[5].height/2)
}
else if(proba > 32 && proba<=36){
    
    image (img[6],windowWidth/2-img[6].width/4,windowHeight/2-img[6].height/4,img[6].width/2,img[6].height/2)
    
}
else if(proba > 36 && proba<=41){
    
    image (img[7],windowWidth/2-img[7].width/4,windowHeight/2-img[7].height/4,img[7].width/2,img[7].height/2)
    
}
else if(proba > 41 && proba<=46){
    
    image (img[8],windowWidth/2-img[8].width/4,windowHeight/2-img[8].height/4,img[8].width/2,img[8].height/2)
}
else if(proba > 46 && proba<=51){
    
    image (img[9],windowWidth/2-img[9].width/4,windowHeight/2-img[9].height/4,img[9].width/2,img[9].height/2)
}
else if(proba > 51 && proba<=57){
    
    image (img[10],windowWidth/2-img[10].width/4,windowHeight/2-img[10].height/4,img[10].width/2,img[10].height/2)
}
else if(proba > 57 && proba<=61){
    
    image (img[11],windowWidth/2-img[11].width/4,windowHeight/2-img[11].height/4,img[11].width/2,img[11].height/2)
}

else if(proba > 61 && proba<=65){
    
    image (img[12],windowWidth/2-img[12].width/4,windowHeight/2-img[12].height/4,img[12].width/2,img[12].height/2)
}
else if(proba > 65 && proba<=70){
   
    image (img[13],windowWidth/2-img[13].width/4,windowHeight/2-img[13].height/4,img[13].width/2,img[13].height/2)
   
}
else if(proba > 70 && proba<=75){
   
    image (img[14],windowWidth/2-img[14].width/4,windowHeight/2-img[14].height/4,img[14].width/2,img[14].height/2)
   
}
else if(proba > 75 && proba<=78){
   
    image (img[15],windowWidth/2-img[15].width/4,windowHeight/2-img[15].height/4,img[15].width/2,img[15].height/2)
   
}
else if(proba > 78 && proba<=84){
   
    image (img[16],windowWidth/2-img[16].width/4,windowHeight/2-img[16].height/4,img[16].width/2,img[16].height/2)
   
}
else if(proba > 84 && proba<=89){
   
    image (img[16],windowWidth/2-img[17].width/4,windowHeight/2-img[17].height/4,img[17].width/2,img[17].height/2)
   
}
else if(proba > 89 && proba<=94){
   
    image (img[13],windowWidth/2-img[18].width/4,windowHeight/2-img[18].height/4,img[18].width/2,img[18].height/2)
   
}

else {
   
    image (img[19],windowWidth/2-img[14].width/4,windowHeight/2-img[14].height/4,img[14].width/2,img[14].height/2)
    // textSize(20)
    // text(cse,windowWidth/2+img[6].width/7, windowHeight/2+img[6].height/4.9)
}
}