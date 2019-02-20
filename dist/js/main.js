// /*
// 	new techniques

// 	make an array of objects for students
// 		first
// 		last
// 		day
// 		month
// 		gender (string)

// 	array modifying
// 		filter
// 		sort
// 		map (haven't had birthday this year yet)
// 		map (full name)

// 	array forEach
// 	event current target vs target
// 	event bubbling
// */


// const states = [
// 	"Alabama",
// 	"Alaska",
// 	"American Samoa",
// 	"Arizona",
// 	"Arkansas",
// 	"California",
// 	"Colorado",
// 	"Connecticut",
// 	"Delaware",
// 	"District Of Columbia",
// 	"Federated States Of Micronesia",
// 	"Florida",
// 	"Georgia",
// 	"Guam",
// 	"Hawaii",
// 	"Idaho",
// 	"Illinois",
// 	"Indiana",
// 	"Iowa",
// 	"Kansas",
// 	"Kentucky",
// 	"Louisiana",
// 	"Maine",
// 	"Marshall Islands",
// 	"Maryland",
// 	"Massachusetts",
// 	"Michigan",
// 	"Minnesota",
// 	"Mississippi",
// 	"Missouri",
// 	"Montana",
// 	"Nebraska",
// 	"Nevada",
// 	"New Hampshire",
// 	"New Jersey",
// 	"New Mexico",
// 	"New York",
// 	"North Carolina",
// 	"North Dakota",
// 	"Northern Mariana Islands",
// 	"Ohio",
// 	"Oklahoma",
// 	"Oregon",
// 	"Palau",
// 	"Pennsylvania",
// 	"Puerto Rico",
// 	"Rhode Island",
// 	"South Carolina",
// 	"South Dakota",
// 	"Tennessee",
// 	"Texas",
// 	"Utah",
// 	"Vermont",
// 	"Virgin Islands",
// 	"Virginia",
// 	"Washington",
// 	"West Virginia",
// 	"Wisconsin",
// 	"Wyoming"
// ]


// let $state = document.querySelector(`[name="state"]`)
// let $suggestions = document.querySelector(`.suggestions`)

// console.log($state)

// $state.addEventListener("keyup", (e) => {
// 	console.log(`entered ${e.currentTarget.value}`)
// 	console.log(`entered ` + e.currentTarget.value)

// 	let entered = e.currentTarget.value.toLowerCase()

// 	let suggestions = states.filter(function (state) {
// 		if (state.toLowerCase().includes(entered)) return true;
// 		return false;
// 	})
// 	console.log(suggestions)

// 	$suggestions.innerHTML = '';

// 	suggestions.forEach(function(suggestion) {
// 		$suggestions.innerHTML += `<a href="#">${suggestion}</a>`;
// 	})
// })

// $suggestions.addEventListener("click", function(e) {
// 	// console.log(e.target)
// 	$suggestions.innerHTML = '';
// 	$state.value = e.target.innerHTML;
// })
"use strict";
//# sourceMappingURL=main.js.map
