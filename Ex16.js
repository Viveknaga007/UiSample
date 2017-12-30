////////// Default arguments////////

function fetchRepos (language, minStars, maxStars = null, createdBefore, createdAfter ) {

}

///
function fetchRepos ({language, minStars, maxStars, createdBefore, createdAfter }) {

}
///
fetchRepos('JavaScript', 100, 1000, new Date('01/01/2017').getTime(), null);

///

fetchRepos ({
    language:'JavaScript',
    maxStars: null,
    createdAfter: null,
    createdBefore: new Date('01/01/2017').getTime(),
    minStars:100
})

fetchRepos({language, minStars, maxStars, createdBefore})

/////

///////////Spread operator//////////

let a = [1,2,3];
let b = [...a, 4, 5]
console.log(b);

////////Rest operator////////

function test(a,b, ...Rest){
    console.log(a, b);
    console.log(...Rest);
}

test (1,2,3,4,5)
