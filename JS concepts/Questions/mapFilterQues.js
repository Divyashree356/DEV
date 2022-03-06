//Get the movie Names from this Array of Objects
// only get the movie name which has rating higher than or equal to 8
// use Filter and map  chaining to achieve the objective

var newReleases = [
    {
      id: 1,
      title: "Die Hard",
      rating: 9,
    },
    {
      id: 2,
      title: "Bad Boys",
      rating: 7,
    },
    {
      id: 3,
      title: "The Chamber",
      rating: 10,
    },
  ];


let movieName = newReleases.filter(function(n)
{
    if( n.rating>=8)
     return true;
}).map(function(v)
{
    return v.title;
})

console.log(movieName)