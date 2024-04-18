let patient1 = {
    pname : 'Sourab',
    age : 34,
    reason : 'common flu',
    appointment : '23-03-2024'
}

let patient2 = {
    pname : 'Anirudh',
    age : 39,
    reason : 'fever',
    appointment : '25-03-2024'
}

function patientdetails(a,b) {
    console.log(`Patient details are
    ${this.pname}
    ${this.age}
    ${this.reason}
    Consultation date: ${this.appointment}
    ${a+b}`);
}

// var arr =  (a,b) => {
//     console.log(`Patient details are
//     ${this.pname}
//     ${this.age}
//     ${this.reason}
//     Consultation date: ${this.appointment}
//     ${a+b}`);
// }

// arr(patient1, 90,)

//call
patientdetails.call(patient2, 5, 8)

//apply
patientdetails.apply(patient1, [5, 10])

//bind
let d = patientdetails.bind(patient1, 7, 8)
console.log(d);
d()
