function openFirstOne(){
    const feature = document.getElementById("feature");
    const content = document.getElementById("content");
    const content2 = document.getElementById('content-2');
    const image = document.getElementById('image')
    if (content.style.display === "none" && image.src.match("images/icon-arrow-down.svg") ||content2.style.display === "block") {
        content.style.display = "block";
        image.setAttribute("src", "images/icon-arrow-up.svg");
        content2.style.display = "none"
      } else {
        content.style.display = "none";
        image.setAttribute("src", "images/icon-arrow-down.svg");
      }
}
function openSecondOne(){
    const content2 = document.getElementById('content-2');
    const image2 = document.getElementById('image-2');
    const content = document.getElementById("content");
    if (content2.style.display === "none" && image2.src.match("images/icon-arrow-down.svg") || content.style.display === "block") {
        content2.style.display = "block";
        image2.setAttribute("src", "images/icon-arrow-up.svg");
        content.style.display = "none";
      }else {
        content2.style.display = "none";
        image2.setAttribute("src", "images/icon-arrow-down.svg");
      }
}
 
const openNav = () =>{
  const overall = document.getElementById('all');
  overall.style.width="200px"

}
const closeNav = () =>{
  const overall = document.getElementById('all');
  overall.style.width = "0%"
}
  