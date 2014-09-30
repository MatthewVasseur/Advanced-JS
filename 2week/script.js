//WEEK 2 HACKYALE ADVANCED JAVASCRIPT

/*
console.log('HI');
console.log('BYE');
*/

var people= [];

var myPerson = {
  firstname: "John",
  lastname: "Smith",
  age: 23,

  fullname: function(){
    return this.firstname + " " + this.lastname;
  }
}

var niceBoy = {
  firstname: "Leo",
  lastname: "Shimonaka",
  age: 18,

  fullname: function(){
    return this.firstname + " " + this.lastname;
  },

  setname: function(name) {
    this.firstname = name;
  }
}

people.push(myPerson);

/*
console.log(myPerson.age);
console.log(myPerson.firstname);
console.log(myPerson.fullname());

console.log(people[0].age);
console.log(myPerson["age"]);
*/

myPerson["firstname"];
var property = "lastname";
myPerson[property];

people[0];

niceBoy.fullname();

var setName = function(person,name) {
  person.firstname = name;
}

niceBoy.setname("hola");
//setName(myPerson);

var myClickHandler = function(e) {
  alert("You've been cliked!");
}

//$("#myButton").click(myClickHandler);