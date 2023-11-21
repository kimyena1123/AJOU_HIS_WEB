const main_logo = document.querySelectorAll('.bootstrapLogo');
console.log(main_logo);
console.log(main_logo[2]);
const main_logo_ex = document.querySelectorAll('.main-logo');
console.log("#");
console.log(main_logo_ex);
console.log("??",main_logo_ex[2]);

for(let i = 0; i < 9; i++){
    main_logo[i].addEventListener("mouseover", function(event){
        main_logo[i].style.color = 'rgb(255, 196, 54)';
        main_logo_ex[i].style.color = 'rgb(255, 196, 54)';
        main_logo_ex[i].style.fontWeight = '700';
    })

    main_logo_ex[i].addEventListener("mouseover", function(event){
        main_logo[i].style.color = 'rgb(255, 196, 54)';
        main_logo_ex[i].style.color = 'rgb(255, 196, 54)';
        main_logo_ex[i].style.fontWeight = '700';
    })

    main_logo[i].addEventListener("mouseout", function(event){
        main_logo[i].style.color = 'white';
        main_logo_ex[i].style.color = 'white';
        main_logo_ex[i].style.fontWeight = '400';
    })

    main_logo_ex[i].addEventListener("mouseout", function(event){
        main_logo[i].style.color = 'white';
        main_logo_ex[i].style.color = 'white';
        main_logo_ex[i].style.fontWeight = '400';
    })
}