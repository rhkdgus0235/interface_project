//aute : soojin seng
//reference:wedie


let table;
let numRows, numCols;
let date = [],
  gsml = [];
let diagramX, diagramY;

function preload() {
  table = loadTable("dataset.csv", "csv", "header");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER)
  numRows = table.getRowCount();
  numCols = table.getColumnCount();


  //load data
  for (let r = 0; r < table.getRowCount(); r++) {
    date[r] = table.getString(r, 0);
    gsml[r] = table.getNum(r, 1);
  }
  minMax();
}

let size = [];
function draw() {
  background(0);
  diagramX = (width / 4) * 2 - 400;
  diagramY = (height / 4)* 3 - 180;
  let radius = width / 5 - 230;
  let ang = 360 / numRows;
  

  //max value79.5min value-3.5
  for (let i = 0; i < numRows; i++) {
    size[i] = map(gsml[i] ,-3.5, 79.5, 0, 500);
    let pointx = (size[i] + radius) * cos(radians(ang * i)) + diagramX;
    let pointy = (size[i] + radius) * sin(radians(ang * i)) + diagramY;
    let cirx = radius*cos(radians(ang*i)) +diagramX;
    let ciry = radius*sin(radians(ang*i)) +diagramY;

    if(i % 12 ===0){
    strokeWeight(1);
    stroke('white')}
    else{
    //draw the line
    stroke('white')
    strokeWeight(0.2);}
    
    line(cirx, ciry, pointx, pointy)
    
    let datasize;
    let dis=dist(mouseX,mouseY,pointx,pointy);
    if(dis<6){
      fill('red')
      datasize = 10;
      noStroke();
      circle(pointx,pointy,datasize);
      textAlign(CENTER)
      textSize(18);
      fill('white')
      text(date[i],diagramX, diagramY-5)
      fill('white')
      rect(diagramX,diagramY+5,30,5)
      textSize(25);
      text(gsml[i],diagramX,diagramY+40)
    }else{
      fill('red')
      datasize = 3;
      noStroke();
      circle(pointx,pointy,datasize);
    }
    
    
//draw the data points
    fill('white');
    noStroke();
    circle(pointx, pointy,5);
    
  }
}



let dataMin,
  dataMax = 0;
function minMax() {
  for (let i = 0; i < numRows; i++) {
    if (table.getNum(i, 1) > dataMax) {
      dataMax = table.getNum(i, 1);
    }
  }
  dataMin = dataMax;
  for (let i = 0; i < numRows; i++) {
    if (table.getNum(i, 1) < dataMin) {
      dataMin = table.getNum(i, 1);
    }
  }
  print("max value" + dataMax + "min value" + dataMin);
}
