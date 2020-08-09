// function explain_callback(name, age,  task){
//     console.log('hello', name);
//     console.log('your age', age)
//    task();
// }
// function washHand(){
//     console.log('wash hand with soap')
// }
// function takeShower(){
//     console.log('take shower');
// }
// function scrollFacebook(){
//     console.log('scroll facebook but dont like any post');
// }

// explain_callback('sogir uddin', 17, washHand);
// explain_callback('jogir uddin', 13, takeShower);
// explain_callback('mugir uddin', 21, scrollFacebook);


function welcomeGuest(name, greetHandler){
    greetHandler(name);
}
const actorName = 'Tom hanks';

function greetEvening(name){
    console.log('good evening' , name);
}
welcomeGuest(actorName, greetEvening);
welcomeGuest('kate winslet', function(name){
    console.log('special welcome', name);
});



function handleClick(){
    console.log('someone punched me');

}
// document.getElementById('click').addEventListener('click', handleClick);
// document.getElementById('click').addEventListener('click',function(){
//          console.log('click click');
// });
