/**
 * Stage 1 JS
 */

/* create an svg drawing */
var draw = SVG('drawing')

/* draw rectangle */
var rect = draw.rect(50,50).move(100,100).fill('#f09')

/* make rectangle jump and change color on mouse over */
rect.mouseover(function() {
    this.animate(1000, SVG.easing.elastic)
        .move(400 * Math.random(), 400 * Math.random())
        .rotate(-45 + 90 * Math.random())
        .fill({
            r: ~~(Math.random() * 255)
          , g: ~~(Math.random() * 255)
          , b: ~~(Math.random() * 255)
        })
})

/* write text at the back */
draw.text('svg.js playground\ntry to grab the rectangle!')
    .back()
    .fill('#ccc')
    .move('50%', '40%')
    .font({
        family: 'Source Sans Pro'
      , size: 18
      , anchor: 'middle'
    })

/* create clock */
draw.clock('15%').back().start().move('80%', '80%')
//
// var svgDocument;
//
// function on_load(evt){
//    O=evt.target;
//    svgDocument=O.ownerDocument;
// }
//
// function turn_on(id){
//    svgDocument.getElementById(id).setAttribute("visibility","visible");
// }
//
// function turn_off(id){
//    svgDocument.getElementById(id).setAttribute("visibility","hidden");
// }
//
// /* CONSTANTS */
// var initialTheta = 0; // The initial rotation angle, in degrees.
// var currentTheta = initialTheta; // The initial rotation angle to use when the animation starts.
// var thetaDelta = 0.5; // The amount to rotate the gears every ~16.7 milliseconds or so, in degrees.
// var angularLimit = 360; // The maximum number of degrees to rotate the gears.
//
// /* GLOBALS */
// var requestAnimationFrameID;
// var svgElement = document.getElementById('svgElement');
// var transformObject = svgElement.createSVGTransform(); // Create a generic SVG transform object so as to gain access to its methods and properties, such as setRotate().
// var gear0 = document.getElementById('gear0');
// var gear1 = document.getElementById('gear1');
//
// gear0.transform.baseVal.appendItem(transformObject); // Append the transform object to gear0, now the gear0 object has inherited all the transform object's goodness.
// gear1.transform.baseVal.appendItem(transformObject); // Append the same generic transform object to gear1 - we just want gear1 to inherit all of it's goodness.
//
// function startAnim() {
//   if (!startButton.startButtonClicked) // Don't allow multiple instance of the function specified by requestAnimationFrame to be invoked by the browser. Note that button.startButtonClicked will be undefined on first use, which is effectively the same as false.
//   {
//     /* Only do the following once per full animation: */
//     startButton.startButtonClicked = true; // A custom property is attached to the button object to track whether the button has been clicked or not.
//     requestAnimationFrameID = requestAnimationFrame(doAnim); // Start the animation loop.
//   }
// }
//
// function doAnim() {
//   if (currentTheta > angularLimit) {
//     startButton.startButtonClicked = false; // Let the user run the animation again if they choose.
//     currentTheta = initialTheta; // If we let the user run the animation multiple times, be sure to set currentTheta back to an appropriate value.
//     cancelAnimationFrame(requestAnimationFrameID); // Instruct the browser to stop calling requestAnimationFrame()'s callback.
//     return; // We have completed our animation, time to quit.
//   }
//
//   var gear0 = document.getElementById('gear0');
//   var gear1 = document.getElementById('gear1');
//
//   gear0.transform.baseVal.getItem(0).setRotate(currentTheta, -150, 0); // Rotate the 0th gear about the point (-150, 0).
//   gear1.transform.baseVal.getItem(0).setRotate(-currentTheta, 150, 0); // Rotate the 1st gear, note the minus sign on currentTheta, this rotates the gear in the opposite direction.
//   // gear0.setAttribute("transform", "rotate(" + currentTheta + ", -150, 0)"); // More cross-browser friendly, slightly less performant. Note that you don't technically need to append a transform object to each gear object, in init(), when using this line.
//   // gear1.setAttribute("transform", "rotate(" + -currentTheta + ", 150, 0)"); // More cross-browser friendly, slightly less performant. Note that you don't technically need to append a transform object to each gear object, in init(), when using this line.
//   currentTheta += thetaDelta; // Place this line here so that the gears are not over rotated on the last call to doAnim().
//   requestAnimationFrameID = requestAnimationFrame(doAnim); // Call the doAnim() function about every 16.7 milliseconds (i.e., about 60 frames per second).
// }

/**
 *  JS for Animations Object
 *
 *  This function will provide all the functions for SVGs
 *
//  */
// function Animations() {
//   this.x = 0;
//   this.y = 0;
//   this.scale = 0;
//
//   // Temp tests
//
// }
//
// /**
//  *  JS for Volcanoes
//  *
//  *  Setup for the volcano svg
//  *
//  */
// Animations.prototype.volcano function() {
//
// };
//
// /**
//  *  JS for Tornado
//  *
//  *  Setup for the tornado svg
//  *
//  */
// Animations.prototype.tornado function() {
//
// };
//
// /**
//  *  JS for Hurricane
//  *
//  *  Setup for the hurricane svg
//  *
//  */
// Animations.prototype.hurricane function() {
//
// };
//
// /**
//  *  JS for Earthquake
//  *
//  *  Setup for the earthquake svg
//  *
//  */
// Animations.prototype.earthquake function() {
//
// };
//
// /**
//  *  JS for Help Animations
//  *
//  *  This function will provide animations at the beginning of the page load to
//  *  help the user understand what he/she can interact with.
//  *
//  */
// Animation.prototype.help function() {
//
// };
//
// /**
//  *  JS for Information Boxes
//  *
//  *  This function will provide boxes of information to pop up next to the
//  *  SVGs on the page
//  *
//  */
// Animation.prototype.info function() {
//
// };
//
// // Define Objects
// var Charlotte = new Animation();

/* JS for data listing */

/* JS for disaster scales */

/* JS for svg area */

/* JS for top chart area */

/* JS for  */
