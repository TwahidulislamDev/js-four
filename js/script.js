// function math(){
//     let x = 10
//     let y = 30
//     console.log(x*y);

// }
// math()
// Dynamic Data pass kora
// function person(name = "Twahidul Islam", age = 22){
//     console.log(`My name ss ${name}`);
//     console.log(`My am ${age} old`);

// }
// person()

let name = ["Twahidul", "Yousuf", "Rahim", "Tamim", "Yakub"];
function grattings(personsName) {
//   console.log(`Wellcome ${personsName}`);
}
for (let i = 0; i < name.length; i++) {
  grattings(name[i]);
}

// Loop using map 
// name.map(items =>{
//     console.log(items);
    
// })

let staf = ['karim', 'Rahim', 'Naim', 'Rabbi', 'Siam']
staf.map(items => {
    console.log(`wellcome ${items}`);
    
})