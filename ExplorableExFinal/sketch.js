var timeline;
var year;
var data;
var yeardis;
var img1;
var img2;
var img3;
var img4;
var img5;
var img6;//setting up varibles
var img7;
var allimgs;
var importyears;
var titles;
var information;
var colorsr;
var colorsg;
var colorsb;
var colorr;
var colorg;
var colorb;
var dotplaces;

function preload() {//loading my images and data
  data = loadJSON("ExploreEx.json");//https://media1.britannica.com/eb-media/99/96899-004-C23DA93F.jpg
  img1= loadImage("sufferage.jpg");//https://upload.wikimedia.org/wikipedia/commons/1/12/We_Can_Do_It%21.jpg
  img2=loadImage("ford.gif");
  img3=loadImage("roboarm.png");//https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwiNxc_e-ofYAhUY3GMKHeMTDOwQjBwIBA&url=https%3A%2F%2Fwww.shareicon.net%2Fdownload%2F2015%2F08%2F06%2F81159_glass_512x512.png&psig=AOvVaw20aTQdHGqlOOcgzbYKr0kV&ust=1513287845651172
  img4=loadImage("light.png");//https://d30y9cdsu7xlg0.cloudfront.net/png/1164-200.png
  img5=loadImage("Thumbup.png");//https://commons.wikimedia.org/wiki/Category:Thumbs_up_icons#/media/File:Thumbs_up_font_awesome.svg
  img6=loadImage("Thumbdown.png");//https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Thumbs_down_font_awesome.svg/2000px-Thumbs_down_font_awesome.svg.png
  img7=loadImage("clock.png");//https://d30y9cdsu7xlg0.cloudfront.net/png/1164-200.png
  allimgs= [img1, img2, img3, img4, img5, img6, img7];
}
//object that creates the bubble with the text
var textytext = {
  x: 100,
  textbub: function(){
  strokeWeight(10);
  fill(colorr,colorg,colorb,175);
  rect(this.x,50,200,250,25,25,25,25);

  }
};
var assembleet = {//this object holds all the functions to make the assembly line
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
  timeline = createSlider(0, 97, 0);//creates the slider
}

function draw() {
  importyears= [data.events[1].when, data.people[0].when, data.concepts[3].when, data.concepts[0].when, data.concepts[1].when, data.concepts[2].when, data.events[0].when];//these are arrays with all the data and needed images
  titles= [data.events[1].title, data.people[0].title, data.concepts[3].title, data.concepts[0].title, data.concepts[1].title, data.concepts[2].title, data.events[0].title];
  information=[data.events[1].info, data.people[0].info, data.concepts[3].info, data.concepts[0].info, data.concepts[1].info, data.concepts[2].info, data.events[0].info];
  colorsr= [255, 102, 102, 102, 102, 102, 255];
  colorsg= [255, 102, 255, 255, 255, 255, 255];
  colorsb= [102, 255, 255, 255, 255, 255, 102];
  dotplaces=[1,12,26,60,77,87,97];
  createCanvas(windowWidth, windowHeight);
  fill(0);//setting up the canvas
  background(255);
  timeline.position(100, 400);
  timeline.style('width', windowWidth-200+"px");//settings for the slider
  var times = timeline.value();
  var year = times+1920;
  var yeardis = map(times, 0, 97, 90, windowWidth-110);//defining some varibles based on the slider value
  noStroke();
  fill(0);
  linep=map(times, 0, 80, 105, 870);
  text(year,yeardis, 355);
  assembleet.main();
  assembleet.onaroll();// calling the functions from the objects
  conveyertrack(linep);
  assembleet.hider();
  datedot();
  for (var i=0; i<=importyears.length;i++){
    if ((year <= importyears[i]+1)&&(year >= importyears[i]-1)){//this line ws written by Ruby
      textytext.x=yeardis-90;
      noStroke();
      textytext.textbub();
      image(allimgs[i],yeardis-45,70,100,100);
      fill(0);
      text(titles[i],yeardis-70,50,200,20);//actully displying the information
      text(information[i],yeardis-76,180,185,300);
      colorr=colorsr[i];
      colorg=colorsg[i];
      colorb=colorsb[i];
    }
  }
}


function datedot(){//function for the important year markers
  for( var i=0;i<=dotplaces.length;i++){
    var dotplace = map(dotplaces[i], 0, 97, 90, windowWidth-110);
    stroke(3);
    fill(255,255,0);
    ellipse(dotplace,310,10,10);
  }
}

function conveyerline(x){
  strokeWeight(3);
  stroke(50);
  line(x-1000,381,x-1000,387);
}

function conveyertrack(p){//makes the animation
  for (var i = 1; i <= 80; i++){
    conveyerline(p);
    push();
    translate(i * 30 ,0);
    conveyerline(p);
    pop();
  }
}

/*sources:
"technological unemployment." Collins Dictionary of Economics, edited by C. L. Pass, et al., Collins, 4th edition, 2006. Credo Reference, https://lwhs.idm.oclc.org/login?url=http://search.credoreference.com/content/entry/collinsecon/technological_unemployment/0?institutionId=6530. Accessed 25 Oct 2017.
Deslippe, Dennis A. "Automation." Historical Encyclopedia of American Labor, edited by Robert E. Weir, and James P. Hanlan, ABC-CLIO, 1st edition, 2004. Credo Reference, https://lwhs.idm.oclc.org/login?url=http://search.credoreference.com/content/entry/abcamlabor/automation/0?institutionId=6530. Accessed 25 Oct 2017.
Cerasis_IT. “Industrial Automation: Brief History and Use in Manufacturing.” Transportation Management Company | Cerasis, 22 Oct. 2014, cerasis.com/2014/10/22/industrial-automation/.
“Henry Ford.” Biography.com, A&E Networks Television, 10 Aug. 2017, www.biography.com/people/henry-ford-9298747.
*/
