//const cv = require('opencv');

$(document).ready(function () {
  /*
  let elem = document.getElementById('image-size');
  let panzoom = Panzoom(elem, {
    maxScale: 5
  })
  panzoom.pan(10, 10)
  panzoom.zoom(2, { animate: true })
  */  
  var element = document.querySelector('#image-size');

  // And pass it to panzoom
  panzoom(element, {
    bounds: true,
    boundsPadding: 1,
    maxZoom: 2,
    minZoom: 1
  });

  //$('#image').wheelzoom();
  //wheelzoom(document.querySelector('#image-size'));
  wheelzoom(document.querySelector('#image-ratio'));
  wheelzoom(document.querySelector('#image-colour'));

  /*var pinchZoom = new PinchZoomCanvas({
    canvas: document.getElementById('image-size'),
    path: "/static/images/white_color.jpg",
    momentum: false,
    zoomMax: 2,
    doubletap: true,
    onZoomEnd: function (zoom, zoomed) {
      console.log("---> is zoomed: %s", zoomed);
      console.log("---> zoom end at %s", zoom);
    },
    onZoom: function (zoom) {
      console.log("---> zoom is %s", zoom);
    }
    });*/

  var sizeChart;
  var ratioChart;
  var colourChart;
  var imgSizePath = '/static/images/white_color.jpg';
  var imgRatioPath = '/static/images/white_color.jpg';
  var imgColourPath = '/static/images/white_color.jpg';

  /*
  let video = document.getElementById('pic1');
  let canvasOutput = document.getElementById('image');
  let canvasOutputCtx = canvasOutput.getContext('2d');
  var curImg = new Image;
  var curZoom = 0;
  curImg.src = 'http://phrogz.net/tmp/gkhead.jpg';

  trackTransforms(canvasOutputCtx);
  redraw(canvasOutput,canvasOutputCtx);
  var lastX=canvasOutput.width/2, lastY=canvasOutput.height/2;
  */
  //skeletonization.setup(256,256);

  $('.loader').hide();
  $('.error-msg').hide();
  //$('.alert_elems_count').hide();
  $('.size-number').hide();
  $('.size-media').hide();
  // size median
  $('.size-median').hide();
  // size mode
  $('.size-mode').hide();
  // size varianza
  $('.size-variance').hide();
  // size standard deviation
  $('.size-deviation').hide();
  // size skewness
  $('.size-skewness').hide();
  // size kurtosis
  $('.size-kurtosis').hide();
  // size kurtosis
  $('.size-variation').hide();

  $('.tab-button').hide();

  /*$('.btn-close').click(function () {
    //console.log('Click');
    $('.modal-wrapper').toggleClass('open');
    return false;
  });*/

  //canvas setup
  /*
  var dragStart,dragged;

  function redraw() {

    // Clear the entire canvas
    var p1 = canvasOutputCtx.transformedPoint(0, 0);
    var p2 = canvasOutputCtx.transformedPoint(canvasOutput.width, canvasOutput.height);
    canvasOutputCtx.clearRect(p1.x, p1.y, p2.x - p1.x, p2.y - p1.y);

    canvasOutputCtx.save();
    canvasOutputCtx.setTransform(1, 0, 0, 1, 0, 0);
    canvasOutputCtx.clearRect(0, 0, canvasOutput.width, canvasOutput.height);
    canvasOutputCtx.restore();

    canvasOutputCtx.drawImage(curImg, 0, 0);

  }

  var zoom = function (clicks) {
      var scaleFactor = 1.1;
      var factor = Math.pow(scaleFactor, clicks);
      if (clicks > 0) {
        factor = 1.25;
      } else {
        factor = 0.75;
      }

      curZoom += clicks;
      //curZoom *= factor;
      console.log('Clicks: ' + clicks);
      console.log('Factor: ' + factor);
      console.log('Zoom: ' + curZoom);
      if ((curZoom < 12) && (curZoom > 0)) {
        var pt = canvasOutputCtx.transformedPoint(lastX, lastY);
        canvasOutputCtx.translate(pt.x, pt.y);
        //var factor = Math.pow(scaleFactor, clicks);
        //curZoom *= factor;
        //console.log('Factor: ' + factor);
        //console.log('Zoom: ' + curZoom);
        canvasOutputCtx.scale(factor, factor);
        canvasOutputCtx.translate(-pt.x, -pt.y);
        redraw(canvasOutputCtx);
        console.log('Zooming');
      } else {
        curZoom -= clicks;
        console.log('Not zooming');
      }
  }

  var handleScroll = function (evt) {
      var delta = evt.wheelDelta ? evt.wheelDelta / 40 : evt.detail ? -evt.detail : 0;
      if (delta) zoom(delta);
      return evt.preventDefault() && false;
  };

  canvasOutput.addEventListener('mousedown',function(evt){
    document.body.style.mozUserSelect = document.body.style.webkitUserSelect = document.body.style.userSelect = 'none';
    lastX = evt.offsetX || (evt.pageX - canvasOutput.offsetLeft);
    lastY = evt.offsetY || (evt.pageY - canvasOutput.offsetTop);
    dragStart = canvasOutputCtx.transformedPoint(lastX,lastY);
    dragged = false;
},false);

canvasOutput.addEventListener('mousemove',function(evt){
    lastX = evt.offsetX || (evt.pageX - canvasOutput.offsetLeft);
    lastY = evt.offsetY || (evt.pageY - canvasOutput.offsetTop);
    dragged = true;
    if (dragStart){
      var pt = canvasOutputCtx.transformedPoint(lastX,lastY);
      canvasOutputCtx.translate(pt.x-dragStart.x,pt.y-dragStart.y);
      redraw(canvasOutput,canvasOutputCtx);
          }
},false);

canvasOutput.addEventListener('mouseup',function(evt){
    dragStart = null;
    if (!dragged) zoom(canvasOutputCtx,evt.shiftKey ? -1 : 1 );
},false);

canvasOutput.addEventListener('DOMMouseScroll',handleScroll,false);
canvasOutput.addEventListener('mousewheel',handleScroll,false);
*/
//end canvas setup

/*
//tabs setup
  $('#btn-size-graph').click(function () {
    //$('.modal-wrapper').toggleClass('open');
    //$('.page-wrapper').toggleClass('blur');
    $('#size-graph').hide();
    $('#size-info').show();
    return false;
  });

  $('#btn-size-info').click(function () {
    //$('.modal-wrapper').toggleClass('open');
    //$('.page-wrapper').toggleClass('blur');
    $('#size-graph').show();
    $('#size-info').hide();
    return false;
  });

  $('#btn-colour-graph').click(function () {
    //$('.modal-wrapper').toggleClass('open');
    //$('.page-wrapper').toggleClass('blur');
    $('#colour-graph').hide();
    $('#colour-info').show();
    return false;
  });

  $('#btn-colour-info').click(function () {
    //$('.modal-wrapper').toggleClass('open');
    //$('.page-wrapper').toggleClass('blur');
    $('#colour-graph').show();
    $('#colour-info').hide();
    return false;
  });

  $('#btn-img-demo').click(function () {
    $('.modal-wrapper').toggleClass('open');
    //$('.page-wrapper').toggleClass('blur');
    return false;
  });

  var tabWrapper = $('#tab-block'),
    tabMnu = tabWrapper.find('.tab-mnu  li'),
    tabContent = tabWrapper.find('.tab-cont > .tab-pane');

  tabContent.not(':first-child').hide();

  tabMnu.each(function (i) {
    $(this).attr('data-tab', 'tab' + i);
  });
  tabContent.each(function (i) {
    $(this).attr('data-tab', 'tab' + i);
  });

  tabMnu.click(function () {
    var tabData = $(this).data('tab');
    tabWrapper.find(tabContent).hide();
    tabWrapper.find(tabContent).filter('[data-tab=' + tabData + ']').show();
  });

  $('.tab-mnu > li').click(function () {
    var before = $('.tab-mnu li.active');
    before.removeClass('active');
    $(this).addClass('active');
  });
//end tabs  
*/

//tabs setup
// Show the first tab by default
$('.tabs-stage div').hide();
//$('.tabs-stage div:first').show();
var c = $('.tabs-stage div:first');
c.show();  
c.children().show(); 
//c.find('*').show();
//c.find('.tab-pane,.tab-image').show();
//c.children().children().show();
//c.children().children().children().show();
////$('.tab-info').show();
////$('.square-image').show();
c.find('.tab-info,.square-image').show();
////c.find('img').attr('src', imgSizePath);
//$('.tab-graph').show();
//$('.alert_elems_count').show();  
//var c = $('.tabs-stage div:first').children('div');
//var c = $('.tabs-stage div').children('div');  
//var n = c[1].childNodes;  
//c[0].show();  
//$('.tabs-stage > div).show(); 
//$('.tab-child div:first').show(); 
//$('.tab-child div:nth-child(2)').show();    
$('.tabs-nav li:first').addClass('tab-active');

// Change tab class and display content
$('.tabs-nav a').on('click', function(event){
  event.preventDefault();
  console.log($(this).attr('tab-toggle'));
  $('.tabs-nav li').removeClass('tab-active');
  $(this).parent().addClass('tab-active');
  $('.tabs-stage div').hide();

  $($(this).attr('href')).show(); 
  $($(this).attr('href')).children().show(); 
  //$('.tab-info').show();
  //$('.square-image').show();
  $($(this).attr('href')).find('.tab-info,.square-image').show();

  if ($(this).attr('href') == '#tab-1') {
    //$($(this).attr('href')).find('img').attr('src', imgSizePath);
  } else if ($(this).attr('href') == '#tab-2') {
    $($(this).attr('href')).find('img').attr('src', imgRatioPath);    
  } else if ($(this).attr('href') == '#tab-4') {
    $($(this).attr('href')).find('img').attr('src', imgColourPath);    
  } 

  //$($(this).attr('href') > div).show();
  //$($(this).attr('href')).children().children().show(); 
  
  //tabContent = $('#tab-block').find('.tabs-stage > .tab-child');
  //$('.tabs-stage > .tab-child').filter('[data-tab="1"]').show();
  //$('#tab-block').find(tabContent).filter('[data-tab=' + tabData + ']').show();
  //console.log('imgPath: ' + imgSizePath);
}); 

$('#btn-size-graph').click(function () {
  //$('.modal-wrapper').toggleClass('open');
  //$('.page-wrapper').toggleClass('blur');
  $('#size-graph').hide();
  $('#size-info').show();
  return false;
});

$('#btn-size-info').click(function () {
  //$('.modal-wrapper').toggleClass('open');
  //$('.page-wrapper').toggleClass('blur');
  $('#size-graph').show();
  $('#btn-size-graph').show();
  $('#size-info').hide();
  return false;
});

$('#btn-ratio-graph').click(function () {
  //$('.modal-wrapper').toggleClass('open');
  //$('.page-wrapper').toggleClass('blur');
  $('#ratio-graph').hide();
  $('#ratio-info').show();
  return false;
});

$('#btn-ratio-info').click(function () {
  //$('.modal-wrapper').toggleClass('open');
  //$('.page-wrapper').toggleClass('blur');
  $('#ratio-graph').show();
  $('#btn-ratio-graph').show();
  $('#ratio-info').hide();
  return false;
});

$('#btn-colour-graph').click(function () {
  //$('.modal-wrapper').toggleClass('open');
  //$('.page-wrapper').toggleClass('blur');
  $('#colour-graph').hide();
  $('#colour-info').show();
  return false;
});

$('#btn-colour-info').click(function () {
  //$('.modal-wrapper').toggleClass('open');
  //$('.page-wrapper').toggleClass('blur');
  $('#colour-graph').show();
  $('#btn-colour-graph').show();
  $('#colour-info').hide();
  return false;
});

var slider = document.getElementById("slider-thr");
var slider_val = document.getElementById("slider-val"); 

slider_val.innerHTML = slider.value + "%";

slider.oninput = function() {
  slider_val.innerHTML = this.value + "%";  
  //updateSelection(parseFloat(this.value) * 2.55) 
}

$('#btn-thr').click(function () {
  updateSelection(parseFloat(slider.value) * 2.55) 
  return false;
});

/*
let tabHeader = $('.tabs-nav');
let tabContent = $('.tab-child');
let attributevalue = tabContent.attr('data-tab');

tabHeader.click(function() {
  tabHeader.removeClass('active');
  tabContent.removeClass('active');
  $(this).addClass('active');
  let match1 = $('.active a').attr('tab-toggle');

  //$(`.tab-child[data-tab="${match1}"]`).toggleClass('active');
  $('.tab-child[data-tab="${match1}"]').show();
});
*/
/*
var tabWrapper = $('#tab-block'),
tabMnu = tabWrapper.find('.tabs-nav  li'),
//tabContent = tabWrapper.find('.tab-cont > .tab-pane');
tabContent = tabWrapper.find('.tabs-stage > .tab-child');

tabMnu.each(function (i) {
  $(this).attr('data-tab', 'tab' + i);
});
tabContent.each(function (i) {
  $(this).attr('data-tab', 'tab' + i);
});

tabMnu.click(function () {
  var tabData = $(this).data('tab');
  tabWrapper.find(tabContent).hide();
  tabWrapper.find(tabContent).filter('[data-tab=' + tabData + ']').show();
});

//$('.tab-mnu > li').click(function () {
$('.tabs-nav > li').click(function () {  
  //var before = $('.tab-mnu li.active');
  var before = $('.tabs-nav li.active');
  before.removeClass('active');
  $(this).addClass('active');
});*/
//end tabs
  
  /*
  //detección de bordes e indicación de dimensiones en cliente original
  function drawselection(image) {
    let imgElement = document.getElementById('image');
    var image = cv.imread(imgElement);
    //let selection = image.clone();
    let selection = new cv.Mat();
    //mode gray
    //cv.cvtColor(image, selection, cv.COLOR_BGR2GRAY, 0);
    //cv.threshold(selection, selection, 80, 255, cv.THRESH_BINARY);

    //mode hsv
    //let dst = new cv.Mat();
    cv.cvtColor(image, selection, cv.COLOR_BGR2HSV, 0);
    let low = new cv.Mat(selection.rows, selection.cols, selection.type(), [80, 0, 68, 255]);
    let high = new cv.Mat(selection.rows, selection.cols, selection.type(), [180, 255, 255, 255]);
    cv.inRange(selection, low, high, selection);

    var obj_areas = [];
    var obj_ratios = [];
    let contours = new cv.MatVector();
    let hierarchy = new cv.Mat();
    cv.findContours(selection, contours, hierarchy, cv.RETR_LIST, cv.CHAIN_APPROX_SIMPLE);
    console.log('Contours: ' + contours.size());
    var n = 0;
    for (let i = 0; i < contours.size(); ++i) {
      let cnt = contours.get(i);
      let area = cv.contourArea(cnt, false);
      //console.log('Contours: ' + area); 
      if (area > 2000 && area < 10000) {
        console.log('Contours ' + n + ': ' + area);
        cv.drawContours(image, contours, i, [0, 0, 255, 255], 3, cv.LINE_8);

        let rotatedRect = cv.minAreaRect(cnt);  
        let vertices = cv.RotatedRect.points(rotatedRect); 
        let contoursColor = new cv.Scalar(255, 0, 0); 
        let rectangleColor = new cv.Scalar(0, 255, 0); 
        // draw rotatedRect
        for (let i = 0; i < 4; i++) {
          cv.line(image, vertices[i], vertices[(i + 1) % 4], rectangleColor, 2, cv.LINE_AA, 0);
        }

        //(tl, tr, br, bl) = box
        //let tltrX, tltrY, blbrX, blbrY;
        //let tlblX, tlblY, trbrX, trbrY;
        //console.log('Vertice: ' + vertices[0] + vertices[1]);
        let [tltrX, tltrY] = midpoint(vertices[0], vertices[1]);
        let [blbrX, blbrY] = midpoint(vertices[2], vertices[3]);

        let [tlblX, tlblY] = midpoint(vertices[0], vertices[3]);
        let [trbrX, trbrY] = midpoint(vertices[1], vertices[2]);

        //draw the midpoints on the image
        let c1 = new cv.Point(Math.round(tltrX), Math.round(tltrY));
        cv.circle(image, c1, 5, [255, 0, 0, 255], -1);
        c1 = new cv.Point(Math.round(blbrX), Math.round(blbrY));
        cv.circle(image, c1, 5, [255, 0, 0, 255], -1);
        c1 = new cv.Point(Math.round(tlblX), Math.round(tlblY));
        cv.circle(image, c1, 5, [255, 0, 0, 255], -1);
        c1 = new cv.Point(Math.round(trbrX), Math.round(trbrY));
        cv.circle(image, c1, 5, [255, 0, 0, 255], -1);
    
        //draw lines between the midpoints
        let p1 = new cv.Point(Math.round(tltrX), Math.round(tltrY));
        let p2 = new cv.Point(Math.round(blbrX), Math.round(blbrY));
        cv.line(image, p1, p2, contoursColor, 2);

        let p3 = new cv.Point(Math.round(tlblX), Math.round(tlblY));
        let p4 = new cv.Point(Math.round(trbrX), Math.round(trbrY));
        cv.line(image, p3, p4, contoursColor, 2)

        //dA = cv.norm({x:tltrX, y:tltrY}, {x:blbrX, y:blbrY});
        //dB = cv.norm({x:tlblX, y:tlblY}, {x:trbrX, y:trbrY});
        dA = norm(diff(p1, p2));
        dB = norm(diff(p3, p4));
        //dA = cv.norm(p1, p2);
        //dB = cv.norm(p3, p4);

        //console.log('dA: ' + dA);
        //pixelmetric ancho imagen / tamaño en pixeles
        pixelsPerMetric = 0.13;

        //compute the size of the object
        dimA = dA * pixelsPerMetric;
        dimB = dB * pixelsPerMetric;

        //draw the object sizes on the image
        cv.putText(image, Math.round(dimA) + "mm",
            {x:Math.round(tltrX - 15), y:Math.round(tltrY - 10)}, cv.FONT_HERSHEY_SIMPLEX,
            0.65, [255, 255, 255, 255], 2);
        cv.putText(image, Math.round(dimB) + "mm",
            {x:Math.round(trbrX + 10), y:Math.round(trbrY)}, cv.FONT_HERSHEY_SIMPLEX,
            0.65, [255, 255, 255, 255], 2);

        obj_areas[n] = area;
        obj_ratios[n] = Math.max(dimA, dimB) / Math.min(dimA, dimB);
        ++n;    
        //console.log('Coords: ' + Math.round(tltrX) + ', ' + Math.round(tlblY));
      }
    }

    cv.imshow('image', image);
    $('.loader').hide();
    $('#image').fadeIn(600);

    $('#imageUpload').prop("disabled", false);
  }
  */
  //shows threshold area
  function drawSelection(lw_thr) {
    document.getElementById('img1').onload = function () {
      let imgElement = document.getElementById('img1');
      if (imgElement) {
      var image = cv.imread(imgElement);
      let selection = new cv.Mat();

      //mode gray
      //cv.cvtColor(image, selection, cv.COLOR_BGR2GRAY, 0);
      //cv.threshold(selection, selection, 80, 255, cv.THRESH_BINARY);

      //mode hsv
      //let dst = new cv.Mat();
      cv.cvtColor(image, selection, cv.COLOR_BGR2HSV, 0);
      let low = new cv.Mat(selection.rows, selection.cols, selection.type(), [0, 0, lw_thr, 255]);
      let high = new cv.Mat(selection.rows, selection.cols, selection.type(), [180, 255, 255, 255]);
      cv.inRange(selection, low, high, selection);

      let contours = new cv.MatVector();
      let hierarchy = new cv.Mat();
      //let addWeightedMat = new cv.Mat(image.rows, image.cols, image.type());
      cv.findContours(selection, contours, hierarchy, cv.RETR_LIST, cv.CHAIN_APPROX_SIMPLE);  
      //cv.drawContours(image, contours, -1, [255, 255, 255, 255], -1, cv.LINE_8);
      //cv.addWeighted(image, 0.75, selection, 0.25, 0, addWeightedMat);
      cv.drawContours(image, contours, -1, [10, 175, 241, 255], 2, cv.LINE_8);

      cv.imshow('image-size', image);
      } else {
        console.log('Img element not found 496');
      }
  }
  }

  function updateSelection(lw_thr) {
    //document.getElementById('img1').onload = function () {
      let imgElement = document.getElementById('img1');
      if (imgElement) {
      var image = cv.imread(imgElement);
      let selection = new cv.Mat();

      //mode gray
      //cv.cvtColor(image, selection, cv.COLOR_BGR2GRAY, 0);
      //cv.threshold(selection, selection, 80, 255, cv.THRESH_BINARY);

      //mode hsv
      //let dst = new cv.Mat();
      cv.cvtColor(image, selection, cv.COLOR_BGR2HSV, 0);
      let low = new cv.Mat(selection.rows, selection.cols, selection.type(), [0, 0, lw_thr, 255]);
      let high = new cv.Mat(selection.rows, selection.cols, selection.type(), [180, 255, 255, 255]);
      cv.inRange(selection, low, high, selection);

      let contours = new cv.MatVector();
      let hierarchy = new cv.Mat();
      //let addWeightedMat = new cv.Mat(image.rows, image.cols, image.type());
      cv.findContours(selection, contours, hierarchy, cv.RETR_LIST, cv.CHAIN_APPROX_SIMPLE);  
      //cv.drawContours(image, contours, -1, [255, 255, 255, 255], -1, cv.LINE_8);
      //cv.addWeighted(image, 0.75, selection, 0.25, 0, addWeightedMat);
      cv.drawContours(image, contours, -1, [10, 175, 241, 255], 3, cv.LINE_8);

      cv.imshow('image-size', image);
      } else {
        console.log('Img element not found 496');
      }
    //}
  }

  function drawSizeGraph(values) {
    var ctx = document.getElementById("chart-size").getContext('2d');
    var dataValues = values;
    var dataLabels = ['6', '7', '8', '9', '10', '11', '12', '13'];
    sizeChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: dataLabels,
        datasets: [{
          label: 'Cantidad: ',
          data: dataValues,
          backgroundColor: 'rgba(243, 156, 18)',
        }]
      },
      options: {
        legend: {
          display: false,
          labels: {
              fontColor: 'rgb(255, 99, 132)'
          }
       },
        tooltips: {
          enabled: true
       },
        scales: {
          xAxes: [{
            //display: false,
            //barPercentage: 1.3,
            //barPercentage: 1.3,
            //minBarLength: 20,
            ticks: {
              //max: 3,
              fontFamily: "Poppins"
            },
            scaleLabel: {
              display: true,
              labelString: 'Cuantiles',
              fontFamily: "Poppins",
              fontColor: "#596165"
            }
          /*}, {
            display: true,
            ticks: {
              autoSkip: false,
              max: 4,
            }*/
          }],
          yAxes: [{
            display: true,
            ticks: {
              beginAtZero: true,
              fontFamily: "Poppins",
              //max : 120,    
              //min : 80
            },
            scaleLabel: {
              display: true,
              labelString: 'Cantidad de granos',
              fontFamily: "Poppins",
              fontColor: "#596165"
            }
          }]
        }
      }
    });   
  }

  function drawRatioGraph(values) {
    var ctx = document.getElementById("chart-ratio").getContext('2d');
    var dataValues = values;
    var dataLabels = ['1', '1.50', '2', '2.50', '3'];
    ratioChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: dataLabels,
        datasets: [{
          label: 'Cantidad: ',
          data: dataValues,
          backgroundColor: 'rgba(52, 152, 219)',
        }]
      },
      options: {
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
       },
        scales: {
          xAxes: [{
            //display: false,
            //barPercentage: 1.3,
            //barPercentage: 1.3,
            //minBarLength: 20,
            ticks: {
              //max: 3,
              fontFamily: "Poppins"
            },
            scaleLabel: {
              display: true,
              labelString: 'Cuantiles',
              fontFamily: "Poppins",
              fontColor: "#596165"
            }
          /*}, {
            display: true,
            ticks: {
              autoSkip: false,
              max: 4,
            }*/
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              fontFamily: "Poppins",
              //max : 120,    
              //min : 80
            },
            scaleLabel: {
              display: true,
              labelString: 'Cantidad de granos',
              fontFamily: "Poppins",
              fontColor: "#596165"
            }
          }]
        }
      }
    });
  }

  function drawColourGraph(values) {
    var ctx = document.getElementById("chart-colour").getContext('2d');
    var dataValues = values;
    var dataLabels = ['98', '99', '100', '101', '102', '103', '104', '105'];
    colourChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: dataLabels,
        datasets: [{
          label: 'Cantidad: ',
          data: dataValues,
          backgroundColor: 'rgba(231, 76, 60)',
        }]
      },
      options: {
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
       },
        scales: {
          xAxes: [{
            //display: false,
            //barPercentage: 1.3,
            //barPercentage: 1.3,
            //minBarLength: 20,
            ticks: {
              //max: 3,
              fontFamily: "Poppins"
            },
            scaleLabel: {
              display: true,
              labelString: 'Cuantiles',
              fontFamily: "Poppins",
              fontColor: "#596165"
            }
          /*}, {
            display: true,
            ticks: {
              autoSkip: false,
              max: 4,
            }*/
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              fontFamily: "Poppins",
              //max : 120,    
              //min : 80
            },
            scaleLabel: {
              display: true,
              labelString: 'Cantidad de granos',
              fontFamily: "Poppins",
              fontColor: "#596165"
            }
          }]
        }
      }
    });
  }

  function getMean(values) {
    mean(values)
  }

  function drawBoxes(coords) {
    var cnv1 = document.getElementById("image");

    if (cnv1.getContext) {
      var ctx = cnv1.getContext('2d');
      let src = cv.imread('image');
      let dst = new cv.Mat();
      cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY);
    }
  }

  // to clear the canvas
  function clearCanvas() {
    var cnv1 = document.getElementById("image-size");
    var ctx = cnv1.getContext('2d'); // gets reference to canvas context
    ctx.beginPath(); // clear existing drawing paths
    ctx.save(); // store the current transformation matrix

    // Use the identity matrix while clearing the canvas
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, cnv1.width, cnv1.height);

    ctx.restore(); // restore the transform
  }

  function drawBBoxes(coords, color, size) {
    var cnv1 = document.getElementById("image");
    var w_scale = 1536 / cnv1.width;
    var h_scale = 1536 / cnv1.height;
    console.log(cnv1.width);
    console.log(cnv1.height);
    scale = 8;

    if (cnv1.getContext) {
      var ctx = cnv1.getContext('2d');
      //ctx.drawImage(img_elm, 0, 0, cnv1.width, cnv1.height);
      //for (let i = 0; i < coords.length; ++i) {
      for (let i = 0; i < coords.length; ++i) {
        console.log(coords[i][0][0]);
        console.log(coords[i][0][1]);
        console.log(coords[i][1][0]);
        console.log(coords[i][1][1]);

        //let rect = coords[i];
        //let xRatio = videoWidth/size.width;
        //let yRatio = videoHeight/size.height;
        ctx.lineWidth = 1;
        ctx.strokeStyle = color;
        //ctx.strokeRect(parseInt(coords[i][0][0]/w_scale), parseInt(coords[i][0][1]/h_scale),
        //parseInt(coords[i][1][0]/w_scale), parseInt(coords[i][1][1]/h_scale));

        ctx.moveTo(parseInt(coords[i][0][0] / w_scale), parseInt(coords[i][0][1] / h_scale));
        ctx.lineTo(coords[i][0][0] / w_scale, parseInt(coords[i][1][1] / h_scale));
        ctx.lineTo(coords[i][1][0] / w_scale, parseInt(coords[i][1][1] / h_scale));
        ctx.lineTo(coords[i][1][0] / w_scale, parseInt(coords[i][0][1] / h_scale));
        ctx.lineTo(parseInt(coords[i][0][0] / w_scale), parseInt(coords[i][0][1] / h_scale));
        ctx.stroke();
      }
    }
  }

  // add image img_elm in canvas
  function addImgCnv(img_elm) {
    var cnv1 = document.getElementById("image-size");

    if (cnv1.getContext) {
      var ctx = cnv1.getContext('2d');

      // get a reference to the image, then add it in canvas context
      //ctx.drawImage(img_elm, 0, 0, img_elm.width, img_elm.height);
      //ctx.drawImage(img_elm, 0, 0, 400, 400);
      ctx.drawImage(img_elm, 0, 0, cnv1.width, cnv1.height);


      //ctx.lineWidth = 8;
      //ctx.strokeStyle = 'red';
      //ctx.strokeRect(0, 100, 50, 120);
    }

    $('#image-size').hide();
    $('#image-size').fadeIn(650);
  }

  // points.length must be > 0
  function CalcAabb(points) {
    var aabbMin = points[0].clone();
    var aabbMax = points[0].clone();

    for (var i = 1; i < points.length; i++) {
      aabbMin.x = Math.min(aabbMin.x, points[i].x);
      aabbMin.y = Math.min(aabbMin.y, points[i].y);
      aabbMax.x = Math.max(aabbMax.x, points[i].x);
      aabbMax.y = Math.max(aabbMax.y, points[i].y);
    }

    return [aabbMin, new Vector(aabbMin.x, aabbMax.y), aabbMax, new Vector(aabbMax.x, aabbMin.y)];
  }

  function get_bbox_size(bbox) {
    let w = bbox[1][1] - bbox[0][1];
    let h = bbox[1][0] - bbox[0][0];
    let size = [w, h];
    //return (bbox[1][1] - bbox[0][1], bbox[1][0] - bbox[0][0]);
    return size;
  }

  function luminance(pixel) {
    //console.log('pixel 0: ' + pixel[0]);
    //console.log('pixel 1: ' + pixel[1]);
    //console.log('pixel 2: ' + pixel[2]);
    //let lum = 0.299 * pixel[0] + 0.587 * pixel[1] + 0.114 * pixel[2];
    //console.log('lum: ' + lum);
    return (0.299 * pixel[0] + 0.587 * pixel[1] + 0.114 * pixel[2]);
    //return 0.2126 * pixel[0] + 0.7152 * pixel[1] + 0.0722 * pixel[2];
  }

  function is_similar(pixel_a, pixel_b, threshold) {
    //let la = luminance(pixel_a);
    //let lb = luminance(pixel_b);
    //let dif = Math.abs(luminance(pixel_a) - luminance(pixel_b));
    //console.log('l a: ' + la);
    //console.log('l b: ' + lb);
    //console.log('dif: ' + dif);
    return Math.abs(Math.round(luminance(pixel_a)) - Math.round(luminance(pixel_b))) < threshold;
  }

  function getObjsColours(coords) {
    console.log('Starting objects colours!');

    //var path = img_path.substring(4, img_path.length);
    //$("#image").attr('src', path);
    //$('#image').hide();
    //$('#image').fadeIn(650);

    let imgElement = document.getElementById('image');
    var image = cv.imread(imgElement);
    console.log('Type: ' + image.type());

    drawselection(image);

    //let hsv = cv.Mat.zeros(image.cols, image.rows, cv.CV_8UC3);
    let hsv = new cv.Mat();
    let mask = new cv.Mat();
    let low = new cv.Mat(image.rows, image.cols, image.type(), [0, 0, 0, 255]);
    let high = new cv.Mat(image.rows, image.cols, image.type(), [0, 0, 70, 255]);
    cv.cvtColor(image, hsv, cv.COLOR_BGR2HSV, 0);
    //cv.inRange(hsv, low, high, mask);

    //let args = {invert:false, blur:10, threshold:160};
    //skeletonization.preprocess(image,args);
    
    /*
    # define range of blue color in HSV
    lower_blue = np.array([110,50,50])
    upper_blue = np.array([130,255,255])
  
    # Threshold the HSV image to get only blue colors
    mask = cv.inRange(hsv, lower_blue, upper_blue)
    # Bitwise-AND mask and original image
    res = cv.bitwise_and(frame,frame, mask= mask)
    */
    var obj_colours = [];
    var obj_red_mean = [];
    var obj_green_mean = [];
    var obj_blue_mean = [];
    var obj_h_mean = [];

    //THRESHOLD = 50;
    THRESHOLD = 50;

    for (let i = 0; i < coords.length; ++i) {
      //console.log('Coords: ' + coords[i]);
      //obtiene las dimensiones del bbox
      var obj_pixels_coords = [];
      var obj_pixels_base = [];
      var obj_pixels_h = [];
      var obj_red = [];
      var obj_green = [];
      var obj_blue = [];
      var cur_pixel = [];

      var m = 0;
      let bb_size = get_bbox_size(coords[i]);
      //console.log('Size w: ' + bb_size[0] + ', h: ' + bb_size[1]);

      //while (m < bb_size[1]) {
      while (m < bb_size[0]) {
        var n = 0;
        //while (n < bb_size[0]) {
        while (n < bb_size[1]) {
          //if (image.isContinuous()) {
          //let intensity = image.ucharAt[coords[i][0][1] + n, (coords[i][0][0] + m) * image.channels()];
          //original
          //et intensity = image.ucharPtr(coords[i][0][1] + n, coords[i][0][0] + m);

          //original
          //cur_pixel = [coords[i][0][0] + m, coords[i][0][1] + n];
          cur_pixel = [coords[i][0][0] + n, coords[i][0][1] + m];

          //let intensity = image.ucharPtr(coords[i][0][1] + m, coords[i][0][0] + n);
          //let intensity = image.ucharPtr(coords[i][0][0] + n, coords[i][0][1] + m);
          //let intensity = image.ucharPtr(coords[i][0][0] + m, coords[i][0][1] + n);
          //bgr
          //let intensity = image.ucharPtr(cur_pixel[1], cur_pixel[0]);
          //hsv
          let intensity = hsv.ucharPtr(cur_pixel[1], cur_pixel[0]);
          //console.log('Intensity ' + intensity);

          //let blue = intensity[0];
          //let green = intensity[1];
          //let red = intensity[2];

          //obj_red.push(intensity[0]);
          //obj_green.push(intensity[1]);
          //obj_blue.push(intensity[2]);

          //if (is_similar(intensity, [255, 255, 255], THRESHOLD) !== true) {
          //h 120 64 limite inferior máximo 84 color fondo blanco 4/6
          if (intensity[0] < 116) {
            //if (intensity[0] > 64) {
            //base grano color 38  
            if (intensity[0] < 40 && intensity[0] > 37) {
              obj_pixels_base.push(new Vector(coords[i][0][0] + n, coords[i][0][1] + m));

              cv.rectangle(image, { x: cur_pixel[0], y: cur_pixel[1] },
                { x: cur_pixel[0], y: cur_pixel[1] },
                [255, 0, 0, 255], 2);

            }

            //grano 
            if (intensity[0] > 82) {
              //console.log('Similar colour!');
              //console.log('Intensity ' + intensity);
              //console.log('Intensity ' + intensity[0]);
              //let point = new cv.Point(coords[i][0][1] + n, coords[i][0][0] + m);
              //let point = new Vector(coords[i][0][1] + n, coords[i][0][0] + m);
              //let point = new Vector(coords[i][0][1] + m, coords[i][0][0] + n);
              //let point = new Vector(coords[i][0][0] + n, coords[i][0][1] + m);
              //original
              //let point = new Vector(coords[i][0][0] + m, coords[i][0][1] + n);
              let point = new Vector(coords[i][0][0] + n, coords[i][0][1] + m);
              //let point = new Vector(cur_pixel[1], cur_pixel[0]);
              //obj_pixels_coords.push(((coords[i][0][1] + n), (coords[i][0][0] + m)));
              obj_pixels_coords.push(point);
              //cambia el color del pixel actual
              //image.ucharPtr((coords[i][0][1] + n), (coords[i][0][0] + m)) = [0, 0, 0];

              //cv.rectangle(image, {x : (coords[i][0][1]) + n, y : (coords[i][0][0] + m)}, 
              //{x : (coords[i][0][1]) + n + 0, y : (coords[i][0][0]) + m + 0}, 
              //[0, 0, 255, 255], 1);

              //draw similar pixel detected
              //cv.rectangle(image, {x : (coords[i][0][1]) + m, y : (coords[i][0][0] + n)}, 
              //{x : (coords[i][0][1]) + m + 0, y : (coords[i][0][0]) + n + 0}, 
              //[0, 0, 255, 255], 1);

              //cv.rectangle(image, {x : (coords[i][0][0]) + m, y : (coords[i][0][1] + n)}, 
              //{x : (coords[i][0][0]) + m + 1, y : (coords[i][0][1]) + n + 1}, 
              //[0, 0, 255, 255], 2);

              obj_pixels_h.push(intensity[0]);



              //cv.rectangle(image, {x : cur_pixel[0], y : cur_pixel[1]}, 
              //{x : cur_pixel[0], y : cur_pixel[1]}, 
              //[0, 0, 0, 255], 1);
            }

          }
          //else {
          //draw pixel for debugging
          //cv.rectangle(image, {x : (coords[i][0][1]) + n, y : (coords[i][0][0] + m)}, 
          //{x : (coords[i][0][1]) + n + 0, y : (coords[i][0][0]) + m + 0}, 
          //[0, 0, 255, 255], 1);
          /*
          cv.rectangle(image, {x : cur_pixel[0], y : cur_pixel[1]}, 
          {x : cur_pixel[0], y : cur_pixel[1]}, 
          //[intensity[0], 100, intensity[2], 255], 1);
          [100, 0, 0, 255], 1);
          */
          //cv.rectangle(image, {x : (coords[i][0][0]) + m, y : (coords[i][0][1] + n)}, 
          //{x : (coords[i][0][0]) + m + 0, y : (coords[i][0][1]) + n + 0}, 
          //[intensity[0], intensity[1], intensity[2], 255], 1);
          //[0, 0, 255, 255], 1);

          //cv.rectangle(image, {x : (coords[i][0][1]) + n, y : (coords[i][0][0] + m)}, 
          //{x : (coords[i][0][1]) + n + 0, y : (coords[i][0][0]) + m + 0}, 
          //[intensity[0], intensity[1], intensity[2], 255], 1);
          //[0, 0, 255, 255], 1);
          //}

          //}
          n = n + 1;
        }
        m = m + 1;
      }

      //console.log('Iniciando bbox ' + i);

      /*
      let area = cv.matFromArray(obj_pixels_coords.length, 2, cv.CV_8UC1, obj_pixels_coords);
      //let rotatedRect = cv.minAreaRect(cv.Mat(obj_pixels_coords.length, 2, cv.CV_8UC1, obj_pixels_coords));
      let rotatedRect = cv.minAreaRect(area);
      console.log(rotatedRect);
      let vertices = cv.RotatedRect.points(rotatedRect);
      let rectangleColor = new cv.Scalar(0, 140, 60);
  
      console.log('Presentando bbox');
      for (let i = 0; i < 4; i++) {
          cv.line(image, vertices[i], vertices[(i + 1) % 4], rectangleColor, 2, cv.LINE_AA, 0);
      }
      */

      /*//do oobb computations
      if (obj_pixels_base.length > 4) {
      var base_convexHull = CalcConvexHull(obj_pixels_base);
      var base_oobb = CalcOmbb(base_convexHull); // draws OOBB candidates
      //console.log('Oobb 0: ' + oobb[0].x + ', ' + oobb[0].y + ' | 1: '
      // + oobb[1].x + ', ' + oobb[1].y + ' | 2: '
      // + oobb[2].x + ', ' + oobb[2].y);
      // draw oobb rotated
      //let rectangleColor = new cv.Scalar(0, 250, 60); 
      for (let i = 0; i < 4; i++) {
        let p1 = new cv.Point(Math.round(base_oobb[i].x), Math.round(base_oobb[i].y));
        let p2 = new cv.Point(Math.round(base_oobb[(i + 1) % 4].x), Math.round(base_oobb[(i + 1) % 4].y));
        cv.line(image, p1, p2, [0, 200, 200, 255], 3, cv.LINE_AA, 0);
      }
    } else {
      console.log('Objeto sin base detectada');
    }*/

      //do oobb computations
      var convexHull = CalcConvexHull(obj_pixels_coords);
      var oobb = CalcOmbb(convexHull); // draws OOBB candidates
      //console.log('Oobb 0: ' + oobb[0].x + ', ' + oobb[0].y + ' | 1: '
      // + oobb[1].x + ', ' + oobb[1].y + ' | 2: '
      // + oobb[2].x + ', ' + oobb[2].y);
      // draw oobb rotated
      //let rectangleColor = new cv.Scalar(0, 250, 60); 
      for (let i = 0; i < 4; i++) {
        let p1 = new cv.Point(Math.round(oobb[i].x), Math.round(oobb[i].y));
        let p2 = new cv.Point(Math.round(oobb[(i + 1) % 4].x), Math.round(oobb[(i + 1) % 4].y));
        cv.line(image, p1, p2, [0, 200, 20, 255], 3, cv.LINE_AA, 0);
      }

      //get min enclosing circle
      let c = makeCircle(obj_pixels_coords);
      let c1 = new cv.Point(c.x, c.y);
      cv.circle(image, c1, c.r, [100, 100, 0, 255], 3);

      //get convex hull centroid
      let ch = convexhull.makeHull(obj_pixels_coords);
      //console.log(ch);
      let centroid = get_polygon_centroid(ch);
      //console.log(centroid);
      let p1 = new cv.Point(0, 0);
      let p2 = new cv.Point(Math.round(centroid.x), Math.round(centroid.y));
      //cv.line(image, p1, p2, [0, 100, 80, 255], 2, cv.LINE_AA, 0);

      /*
          //draw bbox
          cv.rectangle(image, {x : (coords[i][0][0]), y : (coords[i][0][1])}, 
          {x : (coords[i][1][0]), y : (coords[i][1][1])}, 
          [255, 0, 0, 255], 3);
      */
      //cv.imshow('image', image);
      //stores object mean colours value
      /*
      obj_red_mean.push(Math.round(ss.mean(obj_red)));
      obj_green_mean.push(Math.round(ss.mean(obj_green)));
      obj_blue_mean.push(Math.round(ss.mean(obj_blue)));
  
      console.log('Object colour mean');
      console.log('R: ' + obj_red_mean[i]);
      console.log('G: ' + obj_green_mean[i]);
      console.log('B: ' + obj_blue_mean[i]);
      */

      let h_mean = ss.mean(obj_pixels_h);
      //obj_h_mean.push(h_mean);
      obj_h_mean.push(Math.round(h_mean));
      //console.log('Mean: ' + h_mean);
    }

    if (obj_h_mean.length > 10) {
      //simple-statistics library
      let colour_mean = ss.mean(obj_h_mean);
      let colour_mode = ss.mode(obj_h_mean);
      let colour_median = ss.median(obj_h_mean);
      let colour_variance = ss.variance(obj_h_mean);
      let colour_std_deviation = ss.standardDeviation(obj_h_mean);
      let colour_min = ss.min(obj_h_mean);
      let colour_max = ss.max(obj_h_mean);
      let colour_skewness = ss.sampleSkewness(obj_h_mean);
      let colour_kurtosis = ss.sampleKurtosis(obj_h_mean);

      let h = histogram(obj_h_mean, 1);
      //console.log('Histogram: ' + h);
      drawColourGraph(h);

      // colour count
      document.querySelector('.colour-number p').innerHTML = obj_h_mean.length;
      $('.colour-number').show();
      // colour media
      document.querySelector('.colour-media p').innerHTML = colour_mean.toFixed(4);
      $('.colour-media').show();
      // colour median
      document.querySelector('.colour-median p').innerHTML = colour_median.toFixed(4);
      $('.colour-median').show();
      // colour mode
      document.querySelector('.colour-mode p').innerHTML = colour_mode.toFixed(4);
      $('.colour-mode').show();
      // colour varianza
      document.querySelector('.colour-variance p').innerHTML = colour_variance.toFixed(4);
      $('.colour-variance').show();
      // colour standard deviation
      document.querySelector('.colour-deviation p').innerHTML = colour_std_deviation.toFixed(4);
      $('.colour-deviation').show();
      // colour min
      document.querySelector('.colour-min p').innerHTML = colour_min.toFixed(4);
      $('.colour-min').show();
      // colour max
      document.querySelector('.colour-max p').innerHTML = colour_max.toFixed(4);
      $('.colour-max').show();
      // colour skewness -sesgo 0 distribución simétrica
      document.querySelector('.colour-skewness p').innerHTML = colour_skewness.toFixed(4);
      $('.colour-skewness').show();
      // colour kurtosis - valor positivo concentración en torno a la media - valor negativo dispersión de valores
      document.querySelector('.colour-kurtosis p').innerHTML = colour_kurtosis.toFixed(4)
      $('.colour-kurtosis').show();

      $('#size-graph').hide();
      $('#size-info').show();

    } else {
      console.log('Insuficiente cantidad de elementos detectados');

      // size media
      //document.querySelector('.alert_elems_count p').innerHTML = colour_mean;
      $('.alert_elems_count').show();
    }

    var w_scale = 1;
    var h_scale = 1;

    var obj_areas = [];
    var obj_ratios = []

    for (let i = 0; i < coords.length; ++i) {
      //console.log(obj_coords[i]);
      let w_scale = 1;
      let h_scale = 1;

      cv.rectangle(image, { x: (coords[i][0][0] / w_scale), y: (coords[i][0][1] / h_scale) },
        { x: (coords[i][1][0] / w_scale), y: (coords[i][1][1] / h_scale) },
        [255, 0, 0, 255], 3);

      let x;
      let y;
      let w;
      let h;

      //get top left corner
      if (coords[i][1][0] > coords[i][0][0]) {
        x = coords[i][0][0];
        w = (coords[i][1][0] / w_scale) - (coords[i][0][0] / w_scale);
      } else {
        x = coords[i][1][0];
        w = (coords[i][0][0] / w_scale) - (coords[i][1][0] / w_scale);
      }

      if (coords[i][1][1] > coords[i][0][1]) {
        y = coords[i][1][1];
        h = (coords[i][1][1] / h_scale) - (coords[i][0][1] / h_scale);
      } else {
        y = coords[i][0][1];
        h = (coords[i][0][1] / h_scale) - (coords[i][1][1] / h_scale);
      }

      obj_areas[i] = Math.round(w * h);
      obj_ratios[i] = w / h;

      /*skeletonization.skeletonize(image, {
        preprocess: true, // whether or not to preprocess the
                          // source image (blur, threshold, etc.)
          blur: 10,        // if preprocess, radius of blurring to apply
          threshold: 160, // if preprocess, binary threshold to apply
          invert: false,  // if preprocess, invert the image (foreground
                          // should be white, background should be black)
        bbox: [coords[i][0][0], coords[i][0][1], w, h], // bounding box (xmin,ymin,xmax,ymax) of
                             // the region to apply skeletonization,
                             // leave undefined to apply to whole image
      });*/

      //font = cv.FONT_HERSHEY_SIMPLEX
      //cv.putText(mat,'O',(x,y), font, 4,(255,255,255),2,cv.LINE_AA);
      cv.putText(image, obj_h_mean[i].toFixed(2), { x: (coords[i][0][0] + (w / 5)), y: coords[i][0][1] - 4 }, cv.FONT_HERSHEY_SIMPLEX, 0.8, [0, 20, 160, 255], 2, cv.LINE_AA);
    }

    //verifica cantidad mínima de elementos detectados
    if (coords.length > 10) {
      //simple-statistics library
      let size_mean = ss.mean(obj_areas);
      let size_mode = ss.mode(obj_areas);
      let size_median = ss.median(obj_areas);
      let size_variance = ss.variance(obj_areas);
      let size_std_deviation = ss.standardDeviation(obj_areas);
      let size_min = ss.min(obj_areas);
      let size_max = ss.max(obj_areas);
      let size_skewness = ss.sampleSkewness(obj_h_mean);
      let size_kurtosis = ss.sampleKurtosis(obj_areas);

      //
      let h = histogram(obj_areas, 1000);
      //console.log('Histogram size: ' + h);
      drawSizeGraph(h);

      //console.log('Mean: ' + size_mean);
      //console.log('Mode: ' + size_mode);
      //console.log('Median: ' + size_median);
      //console.log('Variance: ' + size_variance);
      //console.log('Standard Deviation: ' + size_std_deviation);

      // size number
      document.querySelector('.size-number p').innerHTML = coords.length;
      $('.size-number').show();
      // size media
      document.querySelector('.size-media p').innerHTML = size_mean.toFixed(2);
      $('.size-media').show();
      // size median
      document.querySelector('.size-median p').innerHTML = size_median.toFixed(2);
      $('.size-median').show();
      // size mode
      document.querySelector('.size-mode p').innerHTML = size_mode.toFixed(2);
      $('.size-mode').show();
      // size varianza
      document.querySelector('.size-variance p').innerHTML = size_variance.toFixed(2);
      $('.size-variance').show();
      // size standard deviation
      document.querySelector('.size-deviation p').innerHTML = size_std_deviation.toFixed(2);
      $('.size-deviation').show();
      // size min
      document.querySelector('.size-min p').innerHTML = size_min.toFixed(2);
      $('.size-min').show();
      // size max
      document.querySelector('.size-max p').innerHTML = size_max.toFixed(2);
      $('.size-max').show();
      // size skewness
      document.querySelector('.size-skewness p').innerHTML = size_skewness.toFixed(4);
      $('.size-skewness').show();
      // size kurtosis - valor positivo concentración en torno a la media - valor negativo dispersión de valores
      document.querySelector('.size-kurtosis p').innerHTML = size_kurtosis.toFixed(4);
      $('.size-kurtosis').show();

      $('#colour-graph').hide();
      $('#colour-info').show();

    } else {
      console.log('Insuficiente cantidad de elementos detectados');

      // size media
      //document.querySelector('.alert_elems_count p').innerHTML = size_mean;
      $('.alert_elems_count').show();
    }

    cv.imshow('image', image);
    //cv.imshow('image', hsv);
  }

  function showAreaInfo(data) {
    //verifica cantidad mínima de elementos detectados
    if (data.length > 10) {
      //simple-statistics library
      let size_mean = ss.mean(data);
      let size_mode = ss.mode(data);
      let size_median = ss.median(data);
      let size_variance = ss.variance(data);
      let size_std_deviation = ss.standardDeviation(data);
      let size_min = ss.min(data);
      let size_max = ss.max(data);
      let size_skewness = ss.sampleSkewness(data);
      let size_kurtosis = ss.sampleKurtosis(data);
      let size_variation = 0;
      if ((size_std_deviation >= 0)  && (size_mean != 0)) {
        size_variation = (size_std_deviation / size_mean) * 100;
      } 

      let h = histogram(data, 1000);
      //console.log('Histogram size: ' + h);
      drawSizeGraph(h);

      // size number
      document.querySelector('.size-number p').innerHTML = data.length;
      $('.size-number').show();
      // size media
      document.querySelector('.size-media p').innerHTML = size_mean.toFixed(2);
      $('.size-media').show();
      // size median
      document.querySelector('.size-median p').innerHTML = size_median.toFixed(2);
      $('.size-median').show();
      // size mode
      document.querySelector('.size-mode p').innerHTML = size_mode.toFixed(2);
      $('.size-mode').show();
      // size varianza
      document.querySelector('.size-variance p').innerHTML = size_variance.toFixed(2);
      $('.size-variance').show();
      // size standard deviation
      document.querySelector('.size-deviation p').innerHTML = size_std_deviation.toFixed(2);
      $('.size-deviation').show();
      // size min
      document.querySelector('.size-min p').innerHTML = size_min.toFixed(2);
      $('.size-min').show();
      // size max
      document.querySelector('.size-max p').innerHTML = size_max.toFixed(2);
      $('.size-max').show();
      // size skewness
      document.querySelector('.size-skewness p').innerHTML = size_skewness.toFixed(4);
      $('.size-skewness').show();
      // size kurtosis - valor positivo concentración en torno a la media - valor negativo dispersión de valores
      document.querySelector('.size-kurtosis p').innerHTML = size_kurtosis.toFixed(4);
      $('.size-kurtosis').show();
      // size variation
      document.querySelector('.size-variation p').innerHTML = size_variation.toFixed(2) + "%";
      $('.size-variation').show();

      $('#size-graph').hide();
      $('#size-info').show();
      //$('#btn-size-info').show();
      //('.tab-spacer').show();
    } else {
      console.log('Insuficiente cantidad de elementos detectados');

      // size media
      //document.querySelector('.alert_elems_count p').innerHTML = size_mean;
      $('.alert_elems_count').show();
    }
  }

  function showRatioInfo(data) {
    //verifica cantidad mínima de elementos detectados
    if (data.length > 10) {
      //simple-statistics library
      let ratio_mean = ss.mean(data);
      let ratio_mode = ss.mode(data);
      let ratio_median = ss.median(data);
      let ratio_variance = ss.variance(data);
      let ratio_std_deviation = ss.standardDeviation(data);
      let ratio_min = ss.min(data);
      let ratio_max = ss.max(data);
      let ratio_skewness = ss.sampleSkewness(data);
      let ratio_kurtosis = ss.sampleKurtosis(data);
      let ratio_variation = 0;
      if ((ratio_std_deviation >= 0) && (ratio_mean != 0)) {
        ratio_variation = (ratio_std_deviation / ratio_mean) * 100;
      } 

      let h = histogram(data, 0.5);
      //console.log('Histogram: ' + h);
      drawRatioGraph(h);

      // size number
      document.querySelector('.ratio-number p').innerHTML = data.length;
      $('.ratio-number').show();
      // size media
      document.querySelector('.ratio-media p').innerHTML = ratio_mean.toFixed(2);
      $('.ratio-media').show();
      // size median
      document.querySelector('.ratio-median p').innerHTML = ratio_median.toFixed(2);
      $('.ratio-median').show();
      // size mode
      document.querySelector('.ratio-mode p').innerHTML = ratio_mode.toFixed(2);
      $('.ratio-mode').show();
      // size varianza
      document.querySelector('.ratio-variance p').innerHTML = ratio_variance.toFixed(2);
      $('.ratio-variance').show();
      // size standard deviation
      document.querySelector('.ratio-deviation p').innerHTML = ratio_std_deviation.toFixed(2);
      $('.ratio-deviation').show();
      // size min
      document.querySelector('.ratio-min p').innerHTML = ratio_min.toFixed(2);
      $('.ratio-min').show();
      // size max
      document.querySelector('.ratio-max p').innerHTML = ratio_max.toFixed(2);
      $('.ratio-max').show();
      // size skewness
      document.querySelector('.ratio-skewness p').innerHTML = ratio_skewness.toFixed(4);
      $('.ratio-skewness').show();
      // size kurtosis - valor positivo concentración en torno a la media - valor negativo dispersión de valores
      document.querySelector('.ratio-kurtosis p').innerHTML = ratio_kurtosis.toFixed(4);
      $('.ratio-kurtosis').show();
      // colour variation
      document.querySelector('.ratio-variation p').innerHTML = ratio_variation.toFixed(2) + "%";
      $('.ratio-variation').show();

      $('#ratio-graph').hide();
      $('#ratio-info').show();
    } else {
      console.log('Insuficiente cantidad de elementos detectados');

      // size media
      //document.querySelector('.alert_elems_count p').innerHTML = colour_mean;
      $('.alert_elems_count').show();
    }        
  }

  function showColourInfo(data) {
    //verifica cantidad mínima de elementos detectados
    if (data.length > 10) {
      //simple-statistics library
      let colour_mean = ss.mean(data);
      let colour_mode = ss.mode(data);
      let colour_median = ss.median(data);
      let colour_variance = ss.variance(data);
      let colour_std_deviation = ss.standardDeviation(data);
      let colour_min = ss.min(data);
      let colour_max = ss.max(data);
      let colour_skewness = ss.sampleSkewness(data);
      let colour_kurtosis = ss.sampleKurtosis(data);
      let colour_variation = 0;
      if ((colour_std_deviation >= 0) && (colour_mean != 0)) {
        colour_variation = (colour_std_deviation / colour_mean) * 100;
      } 

      let h = histogram(data, 1);
      //console.log('Histogram: ' + h);
      drawColourGraph(h);

      // size number
      document.querySelector('.colour-number p').innerHTML = data.length;
      $('.colour-number').show();
      // size media
      document.querySelector('.colour-media p').innerHTML = Math.round(colour_mean) * 2;
      $('.colour-media').show();
      // size median
      document.querySelector('.colour-median p').innerHTML = Math.round(colour_median) * 2;
      $('.colour-median').show();
      // size mode
      document.querySelector('.colour-mode p').innerHTML = Math.round(colour_mode) * 2;
      $('.colour-mode').show();
      // size varianza
      document.querySelector('.colour-variance p').innerHTML = Math.round(colour_variance) * 2;
      $('.colour-variance').show();
      // size standard deviation
      document.querySelector('.colour-deviation p').innerHTML = colour_std_deviation.toFixed(2);
      $('.colour-deviation').show();
      // size min
      document.querySelector('.colour-min p').innerHTML = Math.round(colour_min) * 2;
      $('.colour-min').show();
      // size max
      document.querySelector('.colour-max p').innerHTML = Math.round(colour_max) * 2;
      $('.colour-max').show();
      // size skewness
      document.querySelector('.colour-skewness p').innerHTML = colour_skewness.toFixed(4);
      $('.colour-skewness').show();
      // size kurtosis - valor positivo concentración en torno a la media - valor negativo dispersión de valores
      document.querySelector('.colour-kurtosis p').innerHTML = colour_kurtosis.toFixed(4);
      $('.colour-kurtosis').show();
      // colour variation
      document.querySelector('.colour-variation p').innerHTML = colour_variation.toFixed(2) + "%";
      $('.colour-variation').show();

      $('#colour-graph').hide();
      $('#colour-info').show();
    } else {
      console.log('Insuficiente cantidad de elementos detectados');

      // size media
      //document.querySelector('.alert_elems_count p').innerHTML = colour_mean;
      $('.alert_elems_count').show();
    }    
  }

  // Get detected objects dimensions
  function getObjsDims(img_path, obj_coords) {
    console.log('Starting objects dimensions!');
    console.log('Image path: ' + img_path);
    console.log('Coords: ' + obj_coords);

    //var coords_int = obj_coords.map(function(v) {
    //  return parseInt(v, 10);
    //});

    //var coords_int = obj_coords.map(Number);
    /*
          var coords_int = obj_coords.split(',').map(function(item) {
            return parseInt(item, 10);
          });
    
          console.log('Coords: ' + coords_int);
    */
    /*let src = cv.imread('canvasInput');
    let dst = cv.Mat.zeros(src.cols, src.rows, cv.CV_8UC3);
    cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);
    cv.threshold(src, src, 120, 200, cv.THRESH_BINARY);
    let contours = new cv.MatVector();
    let hierarchy = new cv.Mat();
    // You can try more different parameters
    cv.findContours(src, contours, hierarchy, cv.RETR_CCOMP, cv.CHAIN_APPROX_SIMPLE);
    // draw contours with random Scalar
    for (let i = 0; i < contours.size(); ++i) {
      let color = new cv.Scalar(Math.round(Math.random() * 255), Math.round(Math.random() * 255),
                            Math.round(Math.random() * 255));
    cv.drawContours(dst, contours, i, color, 1, cv.LINE_8, hierarchy, 100);
    }
    cv.imshow('canvasOutput', dst);*/

    var path = img_path.substring(4, img_path.length);
    $("#image").attr('src', path);
    $('#image').hide();
    $('#image').fadeIn(650);

    let scale = 2.56;
    let imgElement = document.getElementById('image');
    let mat = cv.imread(imgElement);
    //let img_gray = new cv.Mat();
    let dst = new cv.Mat();
    let ksize = new cv.Size(3, 3);
    //cv.cvtColor(mat, img_gray, cv.COLOR_RGBA2GRAY);
    //cv.GaussianBlur(img_gray, dst, ksize, 0, 0, cv.BORDER_DEFAULT);
    //cv.Canny(dst, dst, 75, 200, 3, false);
    //cv.threshold(dst, dst, 80, 255, cv.THRESH_BINARY_INV);	
    //cv.imwrite(path, mat)
    //mat.save('/static/images/myNewImage.jpg');
    //cv.rectangle(dst, ((obj_coords[0][0][0]/scale), (obj_coords[0][0][1]/scale)), ((obj_coords[0][1][0]/scale), (obj_coords[0][1][1]/scale)), (255,0,0), 3);
    //cv.line(dst, (obj_coords[0], obj_coords[1]), (obj_coords[3], obj_coords[4]), (0, 0, 255), 2)
    //cv2.putText(dst,'OpenCV',(10,500), font, 4,(255,255,255),2,cv2.LINE_AA);
    //font = cv.FONT_HERSHEY_SIMPLEX
    //cv.putText(img_gray, 'a', ((obj_coords[0][0][0]/scale), (obj_coords[0][0][1]/scale)), font, 1, (0,0,255), 2)
    //cv.line(img_gray, (0,100), (10,40), (0,0,255), 2);
    //drawBBoxes(obj_coords, 'red', 2);
    //cv.rectangle(img_gray, {x : (obj_coords[0][0][0]/scale), y : (obj_coords[0][0][1]/scale)}, 
    //{x : (obj_coords[0][1][0]/scale), y : (obj_coords[0][1][1]/scale)}, 
    //[255, 140, 80, 255]);

    //var w_scale = 1536 / 300;
    //var h_scale = 1536 / 150;

    /*
    //dibuja contornos
    cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);
    cv.equalizeHist(src, src);
    cv.GaussianBlur(src, src, ksize, 7, 7, cv.BORDER_DEFAULT);
    //cv.threshold(src, src, 100, 255, cv.THRESH_BINARY);
    cv.threshold(src, src, 200, 255, cv.THRESH_BINARY);

    let contours = new cv.MatVector();
    let hierarchy = new cv.Mat();
    // You can try more different parameters
    //cv.findContours(src, contours, hierarchy, cv.RETR_CCOMP, cv.CHAIN_APPROX_SIMPLE);
    cv.findContours(src, contours, hierarchy, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);
    let cnt = contours.get(1);

    let rectangleColor = new cv.Scalar(255, 0, 0);
    let rect = cv.boundingRect(cnt);
    let point1 = new cv.Point(rect.x, rect.y);
    let point2 = new cv.Point(rect.x + rect.width, rect.y + rect.height);
    cv.rectangle(dst, point1, point2, rectangleColor, 2, cv.LINE_AA, 0);

    // draw contours with random Scalar
    for (let i = 0; i < contours.size(); ++i) {
      let color = new cv.Scalar(0, 255, 0);
      cv.drawContours(dst, contours, i, color, 1, cv.LINE_8, hierarchy, 100);
    }
    */
    //let box = new cv.Mat();
    var w_scale = 1;
    var h_scale = 1;

    var obj_areas = [];
    var obj_ratios = [];

    for (let i = 0; i < obj_coords.length; ++i) {
      //console.log(obj_coords[i]);
      cv.rectangle(mat, { x: (obj_coords[i][0][0] / w_scale), y: (obj_coords[i][0][1] / h_scale) },
        { x: (obj_coords[i][1][0] / w_scale), y: (obj_coords[i][1][1] / h_scale) },
        [255, 0, 0, 255], 3);

      let x;
      let y;
      let w;
      let h;

      //get top left corner
      if (obj_coords[i][1][0] > obj_coords[i][0][0]) {
        x = obj_coords[i][0][0];
        w = (obj_coords[i][1][0] / w_scale) - (obj_coords[i][0][0] / w_scale);
      } else {
        x = obj_coords[i][1][0];
        w = (obj_coords[i][0][0] / w_scale) - (obj_coords[i][1][0] / w_scale);
      }

      if (obj_coords[i][1][1] > obj_coords[i][0][1]) {
        y = obj_coords[i][1][1];
        h = (obj_coords[i][1][1] / h_scale) - (obj_coords[i][0][1] / h_scale);
      } else {
        y = obj_coords[i][0][1];
        h = (obj_coords[i][0][1] / h_scale) - (obj_coords[i][1][1] / h_scale);
      }

      //console.log('w ' + w + ', h ' + h);
      //recorta imagen bbox
      //let w = (obj_coords[i][1][0]/w_scale) - (obj_coords[i][0][0]/w_scale);
      //let h = (obj_coords[i][1][1]/h_scale) - (obj_coords[i][0][1]/h_scale);

      obj_areas[i] = w * h;
      obj_ratios[i] = w / h;

      let box = new cv.Mat();
      let rect = new cv.Rect(x, y, w, h);
      //console.log(rect.width + ',' + rect.height);

      //font = cv.FONT_HERSHEY_SIMPLEX
      //cv.putText(mat,'O',(x,y), font, 4,(255,255,255),2,cv.LINE_AA);
      cv.putText(mat, w.toString(), { x: (obj_coords[i][0][0] + (w / 3)), y: obj_coords[i][0][1] }, cv.FONT_HERSHEY_SIMPLEX, 0.8, [0, 20, 160, 255], 2, cv.LINE_AA);
      cv.putText(mat, h.toString(), { x: obj_coords[i][1][0], y: (obj_coords[i][1][1] - (h / 3)) }, cv.FONT_HERSHEY_SIMPLEX, 0.8, [20, 90, 50, 255], 2, cv.LINE_AA);
      //box = mat.roi(rect);
      //cv.imshow('image', box);
      //box.delete();
      //rect.delete();
    }

    //verifica cantidad mínima de elementos detectados
    if (obj_coords.length > 10) {
      //simple-statistics library
      let size_mean = ss.mean(obj_areas);
      let size_mode = ss.mode(obj_areas);
      let size_median = ss.median(obj_areas);
      let size_variance = ss.variance(obj_areas);
      let size_std_deviation = ss.standardDeviation(obj_areas);
      let size_min = ss.min(obj_areas);
      let size_max = ss.max(obj_areas);
      let size_skewness = ss.sampleSkewness(obj_h_mean);
      let size_kurtosis = ss.sampleKurtosis(obj_areas);

      //console.log('Mean: ' + size_mean);
      //console.log('Mode: ' + size_mode);
      //console.log('Median: ' + size_median);
      //console.log('Variance: ' + size_variance);
      //console.log('Standard Deviation: ' + size_std_deviation);

      // size number
      document.querySelector('.size-number p').innerHTML = obj_coords.length;
      $('.size-number').show();
      // size media
      document.querySelector('.size-media p').innerHTML = size_mean;
      $('.size-media').show();
      // size median
      document.querySelector('.size-median p').innerHTML = size_median;
      $('.size-median').show();
      // size mode
      document.querySelector('.size-mode p').innerHTML = size_mode;
      $('.size-mode').show();
      // size varianza
      document.querySelector('.size-variance p').innerHTML = size_variance;
      $('.size-variance').show();
      // size standard deviation
      document.querySelector('.size-deviation p').innerHTML = size_std_deviation;
      $('.size-deviation').show();
      // size min
      document.querySelector('.size-min p').innerHTML = size_min;
      $('.size-min').show();
      // size max
      document.querySelector('.size-max p').innerHTML = size_max;
      $('.size-max').show();
      // size skewness
      document.querySelector('.size-skewness p').innerHTML = size_skewness;
      $('.size-skewness').show();
      // size kurtosis - valor positivo concentración en torno a la media - valor negativo dispersión de valores
      document.querySelector('.size-kurtosis p').innerHTML = size_kurtosis;
      $('.size-kurtosis').show();

    } else {
      console.log('Insuficiente cantidad de elementos detectados');

      // size media
      document.querySelector('.alert_elems_count p').innerHTML = size_mean;
      $('.alert_elems_count').show();
    }

    //var cur_coords;
    //for (cur_coords in obj_coords) {
    //  cv.rectangle(img_gray, (parseInt(cur_coords[0][0]/scale), parseInt(cur_coords[0][1]/scale)), (parseInt(cur_coords[1][0]/scale), parseInt(cur_coords[1][1]/scale)), (255,0,0), 3);
    //}
    /*
        obj_coords.forEach(myFunction);
    
        function myFunction(value) {
          cv.rectangle(img_gray, (parseInt(value[0][0]/scale), parseInt(value[0][1]/scale)), (parseInt(value[1][0]/scale), parseInt(value[1][1]/scale)), (255,0,0), 3); 
        }*/

    cv.imshow('image', mat);
    //addImgCnv(img_gray);
  }

  // Upload Preview
  function readURL(input) {
    console.log('Selected file!');
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        //$('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
        //$('#imagePreview').hide();
        //$('#imagePreview').fadeIn(650);

        //$('#image').css('background-image', 'url(' + e.target.result + ')');
        $('.tab-button').hide();
        ////$('.tab-image').attr('style', 'border: 2px solid var(--white-color)');

        imgSizePath = e.target.result;
        imgRatioPath = e.target.result;
        imgColourPath = e.target.result;

        $("#image-size").attr('src', e.target.result);
        $('#image-size').hide();
        $('#image-size').fadeIn(650);

        $("#image-colour").attr('src', e.target.result);
        $('#image-colour').hide();
        $('#image-colour').fadeIn(650);
        //
      }
      reader.readAsDataURL(input.files[0]);
    }

    drawSelection(160); 
  }

  // Upload Preview
  function showImage(input) {
    console.log('Selected file!');
    if (input.files && input.files[0]) {
      //value for canvas zoom pan
      //curImg.src = window.URL.createObjectURL(input.files[0])
      // create <img> with a blob-url address of the "file", made with createObjectURL()
      // Generated URL will be like: blob:http://localhost/7514bc74-65d4-4cf0-a0df-3de016824345
      document.getElementById('pic1').innerHTML = '<img src="' + window.URL.createObjectURL(input.files[0]) + '" alt="Image" id="img1" style="display:none" />';

      // after the image is loaded
      document.getElementById('img1').onload = function () {
        // check allowed image width /height
        var img1 = document.getElementById('img1');
        //if(img1.width <= max_size.width && img1.height <= max_size.height) {
        addImgCnv(img1); // add image in canvas
        //document.getElementById('sbm1').removeAttribute('disabled'); // enable the submit button
        //document.getElementById('pic1').innerHTML = file_up.value.substring(file_up.value.lastIndexOf('/') + 1).substring(file_up.value.lastIndexOf('\\') + 1) +' - Size: '+ img1.width +' / '+ img1.height;
        //}
      }
    }

    drawSelection(parseFloat(slider.value) * 2.55); 
  }

  // Upload Preview
  function showEditedImage(image) {
    //console.log('Selected file!');
    if (image) {
      // create <img> with a blob-url address of the "file", made with createObjectURL()
      // Generated URL will be like: blob:http://localhost/7514bc74-65d4-4cf0-a0df-3de016824345
      document.getElementById('pic1').innerHTML = '<img src="' + image + '" alt="Image" id="img1" style="display:none" />';

      // after the image is loaded
      document.getElementById('img1').onload = function () {
        // check allowed image width /height
        var img1 = document.getElementById('img1');
        //if(img1.width <= max_size.width && img1.height <= max_size.height) {
        addImgCnv(img1); // add image in canvas
        //document.getElementById('sbm1').removeAttribute('disabled'); // enable the submit button
        //document.getElementById('pic1').innerHTML = file_up.value.substring(file_up.value.lastIndexOf('/') + 1).substring(file_up.value.lastIndexOf('\\') + 1) +' - Size: '+ img1.width +' / '+ img1.height;
        //}
      }
    }
  }

  $("#imageUpload").change(function () {
    console.log('Selecting file...');

    $('.alert_elems_count').hide();
    // size number
    document.querySelector('.size-number p').innerHTML = '';
    $('.size-number').hide();
    // size media
    document.querySelector('.size-media p').innerHTML = '';
    $('.size-media').hide();
    // size median
    document.querySelector('.size-median p').innerHTML = '';
    $('.size-median').hide();
    // size mode
    document.querySelector('.size-mode p').innerHTML = '';
    $('.size-mode').hide();
    // size varianza
    document.querySelector('.size-variance p').innerHTML = '';
    $('.size-variance').hide();
    // size standard deviation
    document.querySelector('.size-deviation p').innerHTML = '';
    $('.size-deviation').hide();
    // size min
    document.querySelector('.size-min p').innerHTML = '';
    $('.size-min').hide();
    // size max
    document.querySelector('.size-max p').innerHTML = '';
    $('.size-max').hide();
    // size kurtosis
    document.querySelector('.size-skewness p').innerHTML = '';
    $('.size-skewness').hide();
    // size kurtosis
    document.querySelector('.size-kurtosis p').innerHTML = '';
    $('.size-kurtosis').hide();
    // size variation
    document.querySelector('.size-variation p').innerHTML = '';
    $('.size-variation').hide();

    if (sizeChart) {
      sizeChart.clear();
    }

    // colour number
    document.querySelector('.ratio-number p').innerHTML = '';
    $('.ratio-number').hide();
    // colour media
    document.querySelector('.ratio-media p').innerHTML = '';
    $('.ratio-media').hide();
    // colour median
    document.querySelector('.ratio-median p').innerHTML = '';
    $('.ratio-median').hide();
    // colour mode
    document.querySelector('.ratio-mode p').innerHTML = '';
    $('.ratio-mode').hide();
    // colour varianza
    document.querySelector('.ratio-variance p').innerHTML = '';
    $('.ratio-variance').hide();
    // colour standard deviation
    document.querySelector('.ratio-deviation p').innerHTML = '';
    $('.ratio-deviation').hide();
    // colour min
    document.querySelector('.ratio-min p').innerHTML = '';
    $('.ratio-min').hide();
    // colour max
    document.querySelector('.ratio-max p').innerHTML = '';
    $('.ratio-max').hide();
    // colour kurtosis
    document.querySelector('.ratio-skewness p').innerHTML = '';
    $('.ratio-skewness').hide();
    // colour kurtosis
    document.querySelector('.ratio-kurtosis p').innerHTML = '';
    $('.ratio-kurtosis').hide();
    // colour variation
    document.querySelector('.ratio-variation p').innerHTML = '';
    $('.ratio-variation').hide();

    if (ratioChart) {
      ratioChart.clear();
    }

    //$("canvas#chart-colour").remove();

    // colour number
    document.querySelector('.colour-number p').innerHTML = '';
    $('.colour-number').hide();
    // colour media
    document.querySelector('.colour-media p').innerHTML = '';
    $('.colour-media').hide();
    // colour median
    document.querySelector('.colour-median p').innerHTML = '';
    $('.colour-median').hide();
    // colour mode
    document.querySelector('.colour-mode p').innerHTML = '';
    $('.colour-mode').hide();
    // colour varianza
    document.querySelector('.colour-variance p').innerHTML = '';
    $('.colour-variance').hide();
    // colour standard deviation
    document.querySelector('.colour-deviation p').innerHTML = '';
    $('.colour-deviation').hide();
    // colour min
    document.querySelector('.colour-min p').innerHTML = '';
    $('.colour-min').hide();
    // colour max
    document.querySelector('.colour-max p').innerHTML = '';
    $('.colour-max').hide();
    // colour kurtosis
    document.querySelector('.colour-skewness p').innerHTML = '';
    $('.colour-skewness').hide();
    // colour kurtosis
    document.querySelector('.colour-kurtosis p').innerHTML = '';
    $('.colour-kurtosis').hide();
    // colour variation
    document.querySelector('.colour-variation p').innerHTML = '';
    $('.colour-variation').hide();

    if (colourChart) {
      colourChart.clear();
    }
    //$("canvas#chart-size").remove();

    //$('.image-section').show();

    //clearCanvas();
    $('.error-msg').hide();
    $('#size-graph').hide();
    $('#size-info').hide();
    $('#colour-graph').hide();
    $('#colour-info').hide();

    //let elem2 = $('.tabs-nav a').attr("href", "#tab-2");
    //elem2.attr("disabled", "disabled");
    //let elem3 = $('.tabs-nav a').attr("href", "#tab-3");
    //elem3.attr("disabled", "disabled"); 
    
    $("a[href$='#tab-2']").attr("disabled", "disabled"); 
    $("a[href$='#tab-3']").attr("disabled", "disabled");     
    //disable tabs
    //$('#tab-2').attr("disabled", "disabled");
    //$('#tab-3').attr("disabled", "disabled");

    ////$('.image-wrapper').show();
    //$('#btn-predict').show();
    //$('.image-display').show();
    $('#btn-predict').prop("disabled", false);
    $('#slider-thr').prop("disabled", false);
    $('#btn-thr').prop("disabled", false);
    $('#slider-val-div').attr('style', 'width:40px; color: var(--btn-border-color); font-weight: 500; font-size: 0.76em;)');
    //$('#result').text('');
    //$('#result').hide();

    //readURL(this);

    showImage(this);
  });

  // Predict
  $('#btn-predict').click(function () {
    console.log('Starting prediction...');
    //threshold value
    thr = Math.round(parseFloat(slider.value) * 2.55);

    var form_data = new FormData($('#upload-file')[0]);
    //var form_data = new FormData();
    form_data.append("file", $('input[type=file]')[0].files[0]);
    form_data.append("thr", thr.toString());
    //console.log('thr: ' + thr);

    // Show loading animation
    //$(this).hide();
    $('.loader').show();

    //
    //$('#status_info').fadeIn(600);
    //$('#status_info').text('Realizando detección...');

    $('#imageUpload').prop("disabled", true);
    $('#btn-predict').prop("disabled", true);
    $('#imageUpload').val('');

    //disable threshold slider
    $('#slider-thr').prop("disabled", true);
    $('#btn-thr').prop("disabled", true);
    $('#slider-val-div').attr('style', 'width: 40px; color: var(--disabled-color); font-weight: 500; font-size: 0.76em;');

    //client side detection
    //drawselection(image);
    //

    // Make prediction by calling api /predict
    $.ajax({
      type: 'POST',
      url: '/predict',
      data: form_data,
      contentType: false,
      cache: false,
      processData: false,
      async: true,
      success: function (data) {
        console.log('Success! Received data: ');
        //console.log('Count: ' + data['count']);
        //console.log('Original path: ' + data['orig_path']);
        //console.log('Edited path: ' + data['edited_path']);
        //console.log('Coords: ' + data['coords']);

        console.log('Original path: ' + data['orig_path']);
        console.log('Areas path: ' + data['path_areas']);
        console.log('Ratios path: ' + data['path_ratios']);
        console.log('Colours path: ' + data['path_colours']);
        //console.log('Objects areas: ' + data['objects_areas']);
        //console.log('Objects ratios: ' + data['objects_ratios']);
        //console.log('Objects colours: ' + data['objects_colours']);

        // Get detected objects dimensions
        //getObjsDims(data['orig_path'], data['coords']);

        // Get and display the result
        //$('.loader').hide();

        // size media
        //const smedia = data['count'];
        //document.querySelector('.size-media p').innerHTML = smedia;
        //$('.size-media').show();
        // size varianza
        //const svarianza = data['count'];
        //document.querySelector('.size-varianza p').innerHTML = svarianza;
        //$('.size-varianza').show();
        //
        $('.tab-button').show();
        //$("#image-size").attr('src', data['path_areas']);
        //$("#image-colour").attr('src', data['path_colours']);
        showEditedImage(data['path_areas']);
        $('.loader').hide();
        $('#image-size').fadeIn(640);
        //$('#image-colour').fadeIn(640);
        //$("#image").attr('src', data['edited_path']);
        
        imgSizePath = data['path_areas'];
        imgRatioPath = data['path_ratios'];
        imgColourPath = data['path_colours'];

        showAreaInfo(data['objects_areas']);
        showRatioInfo(data['objects_ratios']);
        showColourInfo(data['objects_colours']);

        $('#imageUpload').prop("disabled", false);
        //$('#tab-2').prop("disabled", "false");
        //$('#tab-3').prop("disabled", "false");

        //enable tabs
        //$('#tab-2').attr("disabled", "false");
        //$('#tab-3').attr("disabled", "false");
   
        //$("a[href$='#tab-2']").attr("disabled", "false"); 
        //$("a[href$='#tab-3']").attr("disabled", "false");

        /*
        $("a[href$='#tab-2']").attr('style', 'background-color: var(--tab-b-color); border-bottom-color: transparent;' + 
        ' color: var(--white-color); cursor: pointer; pointer-events: auto');
        $("a[href$='#tab-3']").attr('style', 'background-color: var(--tab-b-color); border-bottom-color: transparent;' +
        ' color: var(--white-color); cursor: pointer; pointer-events: auto');
        $("a[href$='#tab-4']").attr('style', 'background-color: var(--tab-b-color); border-bottom-color: transparent;' +
        ' color: var(--white-color); cursor: pointer; pointer-events: auto');
        */
        $("a[href$='#tab-2']").attr('style', 'cursor: pointer; pointer-events: auto');
        $("a[href$='#tab-3']").attr('style', 'cursor: pointer; pointer-events: auto');
        $("a[href$='#tab-4']").attr('style', 'cursor: pointer; pointer-events: auto');
        //background-color: var(--tab-b-color);
        //pointer-events: auto;
        //cursor: pointer;
        // Get detected objects dimensions
        //getObjsDims(data['orig_path'], data['coords']);
        //se desactiva
        //getObjsColours(data['coords']);
        //curImg.src = data['edited_path']
        //showEditedImage(data['edited_path'])

        console.log('Success!');
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        console.log(textStatus);
        console.log(errorThrown);

        $('.loader').hide();
        //$('.image-wrapper').hide();
        $('.error-msg').show();

        $('#imageUpload').prop("disabled", false);
      }
    });
    
    //end prediction call
  });

});