console.log('Hello World');
let firstName = "bhosadike";
let lastName = "G";

console.log(firstName, lastName);

function greet(textString){
    console.log(textString);
};

greet('Yo whatsup?');

function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw')
        }
    };
}

const circle1 = createCircle(4);
console.log(circle1);