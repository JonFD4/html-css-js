// using doms to make variables of html elements
let progress= document.getElementById('progress');
let prev= document.getElementById('prev');
let next= document.getElementById('next');
let circles= document.querySelectorAll('.circle');
/* adding eventlistener to buttons*/
let currentActive=1;
next.addEventListener('click', ()=>{
    currentActive++ /* increment it by 1 */
if(currentActive > circles.length){
    currentActive = circles.length;
}
update()
})


prev.addEventListener('click', ()=>{
    currentActive-- /* increment it by 1 */
if(currentActive < 1){
    currentActive = 1;
}
update()
})
/*function for update for behaviour of buttons 

for each cirle, if the index is less than currentActive=1, add the class active, else remove it.
*/
function update() {
    circles.forEach((circle, idx /*index of each circle */)=>{
        if(idx <currentActive){
            circle.classList.add('active');
        } else{
            circle.classList.remove('active');
        }

    } )

    /*actives represnts all circles and their potential to have the active class.
    matching the changes of circles with line  (progress.style.width).

    */
    const actives=document.querySelectorAll('.active');
progress.style.width= (actives.length-1)/(circles.length-1) * 100 + '%';

/* if currentActive is truly equal to 1, disable previous button, else if currentActive 
equals the number of circles, disable next button.
otherwise, keep both buttons functioning. */
if(currentActive===1){
    prev.disabled = true;
} else if(currentActive === circles.length){
 next.disabled = true;

} else {
    prev.disabled = false;
    next.disabled = false;
}

 
}