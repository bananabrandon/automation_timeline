var timeline;
var year;
var data;
var yeardis;
var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var allimgs;
var importyears;
var titles;
var information;
function preload() {
  data = loadJSON("ExploreEx.json");
  img1= loadImage("sufferage.jpg");
  img2=loadImage("ford.gif");
  img3=loadImage("automationarm.jpg");
  img4=loadImage("light.png");
  img5=loadImage("Thumbup.png");
  img6=loadImage("Thumbdown.png");
  img7=loadImage("clock.png");
  allimgs= [img1, img2, img3, img4, img5, img6, img7];
}

var textytext = {
  x: 100,
  textbub: function(){
  strokeWeight(10);
  fill(0,195,255,150);
  rect(this.x,50,200,250,25,25,25,25);

  }
};
var assembleet = {
  y: 400,
  x: 100,
  main: function() {
    noStroke();
    fill(100);
    rect(this.x-15,this.y-20,windowWidth-170,60,10,10,10,10);
    fill(255,255,0);
    rect(this.x,this.y-3,windowWidth-200,30);
  },
  hider: function(){
    noStroke();
    fill(80);
    rect(this.x-15, this.y-30,20,75);
    rect(windowWidth-100,370,20,75);
    fill(255);
    rect(0,this.y-30,85,75);
    rect(windowWidth-80,this.y-30,1100,75);
  },
  onaroll: function(){
    for (var i = 0; i <= 12; i++){
      fill(130);
      ellipse(this.x+27,this.y+12,30,30);
      fill(100);
      ellipse(this.x+27,this.y+12,18,18);
      push();
      translate(i * 100 ,0);
      fill(130);
      ellipse(this.x+27,this.y+12,30,30);
      fill(100);
      ellipse(this.x+27,this.y+12,18,18);
      pop();
    }
  }
};

function setup() {

  timeline = createSlider(0, 97, 0);
}

function draw() {
  importyears= [data.events[1].when, data.people[0].when, data.concepts[3].when, data.concepts[0].when, data.concepts[1].when, data.concepts[2].when, data.events[0].when];
  titles= [data.events[1].title, data.people[0].title, data.concepts[3].title, data.concepts[0].title, data.concepts[1].title, data.concepts[2].title, data.events[0].title];
  information=[data.events[1].info, data.people[0].info, data.concepts[3].info, data.concepts[0].info, data.concepts[1].info, data.concepts[2].info, data.events[0].info];
  createCanvas(windowWidth, windowHeight);
  fill(0);
  background(255);
  timeline.position(100, 400);
  timeline.style('width', windowWidth-200+"px");
  var times = timeline.value();
  var year = times+1920;
  var yeardis = map(times, 0, 97, 90, windowWidth-110);
  noStroke();
  fill(0);
  linep=map(times, 0, 80, 105, 870);
  text(year,yeardis, 355);
  assembleet.main();
  assembleet.onaroll();
  conveyertrack(linep);
  assembleet.hider();
  for (var i=0; i<=importyears.length;i++){
  if ((year <= importyears[i]+1)&&(year >= importyears[i]-1)){
    textytext.x=yeardis-90;
    textytext.textbub();
    image(allimgs[i],yeardis-45,70,100,100);
    fill(0);
    text(titles[i],yeardis-70,50,200,20);
    text(information[i],yeardis-75,180,175,300);
  }
}

}



function conveyerline(x){
  strokeWeight(3);
  stroke(50);
  line(x-1000,381,x-1000,387);
}

function conveyertrack(p){
  for (var i = 1; i <= 80; i++){
    conveyerline(p);
    push();
    translate(i * 30 ,0);
    conveyerline(p);
    pop();
  }
}
