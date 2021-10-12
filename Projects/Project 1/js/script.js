/*
let baseSalary = 30000;
let overTime = 10;
let rate = 20;

function getwage(baseSalary, overTime, rate) {
    return baseSalary + (overTime * rate);
}
//-----------------------------------------
let employee = {
    baseSalary: 30000,
    overTime: 10,
    rate: 20,
    getwage: function() {
        return this.baseSalary + (this.overTime * this.rate);
    }
};
//-----------------------------------------
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log('draw circle')
    }
};
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log('draw circle')
    }
};
*/
//----------------------------------------
function createCircle(radius) {
    this.radius = radius;

    this.draw = function() {
        return console.log('draw circle');
    }
}

let c1 = new createCircle(20);
c1.draw();