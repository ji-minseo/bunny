var namespace = "http://www.w3.org/2000/svg"
var currentStamp = 1
window.mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };

function stamp1(x, y) {
  
  if(window.mobileCheck()) makeImage(`../img/${weather}1.png`,x,y, 200, 200, 1)
  else makeImage(`../img/${weather}1.png`,x,y, 60, 60, 1)
}

function stamp2(x, y) {
    if(window.mobileCheck()) makeImage(`../img/${weather}2.png`,x,y, 200, 200, 1)
    else makeImage(`../img/${weather}2.png`,x,y, 60, 60, 1)
}

function stamp3(x, y) {
    if(window.mobileCheck()) makeImage(`../img/${weather}3.png`,x,y, 200, 200, 1)
    else makeImage(`../img/${weather}3.png`,x,y, 60, 60, 1)
  }


// This function is called whenever the mouse is clicked on the canvas.
// It figures out the x and y coordinates of where the mouse was clicked, and stores them in the variables xCoord and yCoord.
// No need to change the code that's already here, but you will need to CALL your stamp functions where it's commented below!
function stamp(event) {
  var pt = canvas.createSVGPoint()
  pt.x = event.clientX
  pt.y = event.clientY
  
  var svgPt = pt.matrixTransform(canvas.getScreenCTM().inverse())
  var xCoord = svgPt.x
  var yCoord = svgPt.y
  
  if (currentStamp == 1) {
stamp1(xCoord, yCoord)
    currentStamp++
    document.querySelector('.cursor').style.backgroundImage = `url('../img/${weather}2.png')`

  } else if (currentStamp == 2) {
    // CALL your second function here, passing in xCoord and yCoord for the parameters!
    stamp2(xCoord, yCoord)
    currentStamp++
    document.querySelector('.cursor').style.backgroundImage = `url('../img/${weather}3.png')`

  } else {
    stamp3(xCoord, yCoord)
    currentStamp = 1
    document.querySelector('.cursor').style.backgroundImage = `url('../img/${weather}1.png')`

  }

}





// !!!!!!!
// Don't edit the code below this line!
// !!!!!!!
function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}

// MOUSE CURSOR EFFECT
let mouseCursor = document.querySelector(".cursor");
//window 객체에 scroll & mouse 이벤트를 추가하고 cursor함수 실행되도록 함
//커스텀 커서의 left값과 top값을 커서의 XY좌표값과 일치시킴
const cursor = (e) => {
  mouseCursor.style.left = e.pageX + "px";
  mouseCursor.style.top = e.pageY + "px";
}
window.addEventListener("mousemove", cursor);


const API_KEY = '87dea9975e241adfef4372a94214a817';
let weather


window.addEventListener('DOMContentLoaded', () => {
    navigator.geolocation.getCurrentPosition(success);


    let today = new Date();   
    document.querySelector('.latitude').innerHTML = today
});

const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
  
    getWeather(latitude, longitude);
  };





  const getWeather = (lat, lon) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const temperature = json.main.temp;
        const place = json.name;
        weather = json.weather[0].main;
        document.querySelector('.longitude').innerText = place +' '+ lat +' '+ lon;
        // descSection.innerText = description;
        document.querySelector('.cursor').style.backgroundImage = `url('../img/${weather}1.png')`

        showPage()

      })
      .catch((error) => {
        alert(error);
      });
  }

  function showPage() {
    document.querySelector(".video-loader").style.display = "none";
  }