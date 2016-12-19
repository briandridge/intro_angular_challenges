console.log('challenge #2 -- app.js loaded!');

var app = angular.module("appTwo", []);
app.controller("WelcomeController", WelcomeController);
app.controller("ClassController", ClassController);

function WelcomeController(){
  this.full_name = "Brian Ridge",
  this.age = "30",
  this.city = "Golden",
  this.state = "Colorado"
}

function ClassController() {
	this.class_name = "WDI",
	this.enrolled_students = "me",
	this.start_date = "Halloween",
	this.end_date = "Feb 2nd",
	this.daysRemaining = function() {

	}
}
