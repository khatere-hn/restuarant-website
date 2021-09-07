let logo = document.querySelectorAll(".header_2 svg");

 logo[0].addEventListener('click', function (){
    logo[0].classList.toggle('d_none');
    logo[1].classList.toggle('d_none');
    document.body.style.backgroundColor = '#1d2521' ;
});
 logo[1].addEventListener('click', function (){
     logo[0].classList.toggle('d_none');
     logo[1].classList.toggle('d_none');
     document.body.style.backgroundColor = '#FBFEFD' ;
 });