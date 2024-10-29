// Create an array of movie objects. Each movie should have a title, rating, and hasWatched properties. Iterate through the array and print out something that looks like:
// You have watched "In Bruges" - 5 stars
// You have not seen "Frozen" - 4.5 stars
// You have seen "Mad Max Fury Road" - 5 stars
// You have not seen "Les Miserables" - 3.5 stars

const movies = [
    {title: "In Burges", rating: 5, hasWatched: true},
    {title: "Frozen", rating: 4.5, hasWatched: false},
    {title: "Mad Max Fury Road", rating: 5, hasWatched: true},
    {title: "Les Miserables", rating: 3.5, hasWatched: false},
];

movies.forEach(movie => {
    if (movie.hasWatched) {
        console.log(`You have watched "${movie.title}" - ${movie.rating} stars`);
    }
    else {
        console.log(`You have not seen "${movie.title}" - ${movie.rating} stars`);
    }
});