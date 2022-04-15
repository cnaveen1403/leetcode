// var a = [1,2,1,1,0,0,0];

// let count = 0;
// a.filter((val) =>{
//     if(val == 1)
//         count ++
// })
// for (var i =0 ; i < a.length; i++){
//     if(a[i] == 1)
//         count ++;
// }

// console.log("count after filter >>>> " + count);

// let obj1;
// obj1= {a:404}
// obj2= obj1
// obj2.a = 103;
// console.log(obj1);
// console.log(obj2);
// let obj1;
//Deep copy how will you do ?
//shallow copy ?

const lodash = require('lodash');

let dev1 = {
    name: "Naveen",
    skills: {
        primary: "Back end",
        technology: "Node JS"
    },
    calculateAge: function () {
        return 34;
    },
    joiningDate: new Date()
}
// dev2 = dev1;

//using object.assign
// dev2 = Object.assign({},dev1); // deepcopy not possible

//using ES6 spread operator
// dev2 = {...dev1}; // deep copy not done

// dev2 = JSON.parse(JSON.stringify(dev1)); //functions are not copied and object types of date is lost using this technique
/* 
output for JSON copy methods
{
  name: 'Naveen',
  skills: { primary: 'Back end', technology: 'Node JS' },
  calculateAge: [Function: calculateAge],
  joiningDate: 2022-03-12T06:04:42.932Z
}
{
  name: 'Vishnu',
  skills: { primary: 'Front end', technology: 'Node JS' },
  joiningDate: '2022-03-12T06:04:42.932Z'
}
*/


//Using Lodash
dev2 = lodash.cloneDeep(dev1);
/* 
* out put for lodash
{
  name: 'Naveen',
  skills: { primary: 'Back end', technology: 'Node JS' },
  calculateAge: [Function: calculateAge],
  joiningDate: 2022-03-12T06:05:28.559Z
}
{
  name: 'Vishnu',
  skills: { primary: 'Front end', technology: 'Node JS' },
  calculateAge: [Function: calculateAge],
  joiningDate: 2022-03-12T06:05:28.559Z
}

*/

dev2.name = "Vishnu";
dev2.skills.primary = "Front end";
console.log(dev1);
console.log(dev2);

// for (let i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log("Time", i);
//     });
// }

//    console.log (null == undefined);
//    console.log (null === undefined);

//    console.log(4+"3"+6+2)