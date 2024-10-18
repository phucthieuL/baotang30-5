// const track = document.getElementById("slider");

// const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

// const handleOnUp = () => {
//   track.dataset.mouseDownAt = "0";  
//   track.dataset.prevPercentage = track.dataset.percentage;
// }

// const handleOnMove = e => {
//   if(track.dataset.mouseDownAt === "0") return;
  
//   const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
//         maxDelta = window.innerWidth / 2;
  
//   const percentage = (mouseDelta / maxDelta) * -100,
//         nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
//         nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
//   track.dataset.percentage = nextPercentage;
  
//   track.animate({
//     transform: `translate(${nextPercentage}%, -50%)`
//   }, { duration: 1200, fill: "forwards" });
  
//   for(const image of track.querySelectorAll("img")) {
//     image.animate({
//       objectPosition: `${100 + nextPercentage}% center`
//     }, { duration: 1200, fill: "forwards" });
//   }
// }

// /* -- Had to add extra lines for touch events -- */

// window.onmousedown = e => handleOnDown(e);

// window.ontouchstart = e => handleOnDown(e.touches[0]);

// window.onmouseup = e => handleOnUp(e);

// window.ontouchend = e => handleOnUp(e.touches[0]);

// window.onmousemove = e => handleOnMove(e);

// window.ontouchmove = e => handleOnMove(e.touches[0]);

// window.addEventListener('click', function(e){
	
// 	if (document.getElementById('img1').contains(e.target)){
//         window.location.href = "trangbaotang-1.html";
//   } 
// })

// window.addEventListener('click', function(e){
	
// 	if (document.getElementById('img2').contains(e.target)){
//         window.location.href = "trangbaotang-2.html";
//   } 
// })

// window.addEventListener('click', function(e){
	
// 	if (document.getElementById('img3').contains(e.target)){
//         window.location.href = "trangbaotang-3.html";
//   } 
// })

// window.addEventListener('click', function(e){
	
// 	if (document.getElementById('img4').contains(e.target)){
//         window.location.href = "trangbaotang-4.html";
//   } 
// })

// window.addEventListener('click', function(e){
	
// 	if (document.getElementById('img5').contains(e.target)){
//         window.location.href = "trangbaotang-5.html";
//   } 
// })

// window.addEventListener('click', function(e){
	
// 	if (document.getElementById('img6').contains(e.target)){
//         window.location.href = "trangbaotang-6.html";
//   } 
// })

// window.addEventListener('click', function(e){
	
// 	if (document.getElementById('img7').contains(e.target)){
//         window.location.href = "trangbaotang-7.html";
//   } 
// })

// window.addEventListener('click', function(e){
	
// 	if (document.getElementById('img8').contains(e.target)){
//         window.location.href = "trangbaotang-8.html";
//   } 
// })