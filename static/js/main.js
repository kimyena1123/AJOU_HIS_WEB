const hoverNav = document.querySelector('.hoverNav');
console.log(hoverNav);
const navUl = document.querySelector('.navUl');
console.log(navUl);
const right_header = document.querySelector('.right-header');
console.log(right_header);

navUl.addEventListener("mouseover", function(event){
    console.log("mouseover");
    hoverNav.style.display = 'block';
});

navUl.addEventListener("mouseout", function(event){
    console.log("mouseout");
    hoverNav.style.display = 'none';
});

right_header.addEventListener("mouseover", function(event){
    console.log("mouseover");
    hoverNav.style.display = 'none';
});

hoverNav.addEventListener("mouseover", function(event){
    console.log("mouseover");
    hoverNav.style.display = 'block';
});

hoverNav.addEventListener("mouseout", function(event){
    console.log("mouseout");
    hoverNav.style.display = 'none';
});