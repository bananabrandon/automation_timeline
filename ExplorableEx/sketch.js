var timeline;
var year;
var data;
var yeardis;
var textytext = {
  x: 100,
  importyears: [1947,1980,2017,2004,1993,1967],
  textbub: function(){
    strokeWeight(10);
    fill(0,195,255,150);
    rect(this.x,50,200,250,25,25,25,25);

  }
};
var assembleet = {
  y: 400,
  x: 100,
  body: function() {
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

function preload() {
  data = loadJSON("ExploreEx.json");
}

function setup() {

  timeline = createSlider(0, 97, 0);
}

function draw() {
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
  text(year,yeardis, 350);
  assembleet.body();
  assembleet.onaroll();
  conveyertrack(linep);
  assembleet.hider();
  for (var i=0; i<=textytext.importyears.length;i++)
  //if (year == textytext.importyears[i]){
  if ((year <= textytext.importyears[i]+1)&&(year >= textytext.importyears[i]-1)){
  // if ((year+5 >= textytext.importyears[i])||(year-5 <= textytext.importyears[i])){
    textytext.x=yeardis-90;
    textytext.textbub();
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
