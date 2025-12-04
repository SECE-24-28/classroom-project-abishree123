const books = [
  {
    bookName: "JavaScript Guide",
    author: "John Doe",
    pages: 350,
    price: 499,
    rating: 4.3,
    category: "Programming",
    publishedYear: 2019,
  },
  {
    bookName: "React Mastery",
    author: "Siddharth Sharma",
    pages: 280,
    price: 599,
    rating: 4.8,
    category: "Programming",
    publishedYear: 2023,
  },
  {
    bookName: "History of India",
    author: "R. Sharma",
    pages: 420,
    price: 399,
    rating: 4.1,
    category: "History",
    publishedYear: 2015,
  },
  {
    bookName: "CSS Basics",
    author: "Meena Gupta",
    pages: 180,
    price: 199,
    rating: 3.9,
    category: "Design",
    publishedYear: 2020,
  },
  {
    bookName: "Node.js Deep Dive",
    author: "Alex Ron",
    pages: 510,
    price: 699,
    rating: 4.7,
    category: "Programming",
    publishedYear: 2021,
  },
];

// 1. Get all books name with rating greater than 4.5
// 2. Get the names of all books published after 2020
// 3. Calculate the total price of all Programming books
// 4. Find the average number of pages of all books in the Design category
// 5. Get a list of authors who have written books with a rating less than 4.0
// 6. Find the most expensive book in the collection
// 7. Get all books that have more than 300 pages and are priced below 500
// 8. Create a new array with book names and their respective authors

//5
let d = books.filter((element,index)=>{
    return element.rating<4.0
}).map((el,index)=>{
    return el.author
})
console.log(d);

//1
let a =books.filter((el,ind)=>{
    return el.rating<4.5
})
.map((el,ind)=>{
    return el.bookName
})
console.log(a);

//2
let m= books.filter((el,ind)=>{
    return el.publishedYear>2020
})
console.log(m);

//3
let j=books.filter((el,ind)=>{
return el.category==="Programming"
}).reduce((Sum,books)=> Sum+books.price,0);
console.log(j);

//4
let k=books.filter((el,ind)=>{
   return el.category==="Design"
})
let k1=k.reduce((sum,books) => sum+books.price,0)/k.length;
console.log(k1);

//6
let s=books.reduce((max,ind)=>{
   return ind.price >max.price ? ind:max;
})
console.log(s);

//7
let g=books.filter((el,ind)=>{
    return el.price<500 && el.pages>300;
})
console.log(g);

//8
let u=books.map((el,ind)=>{
   return {
    bookName:el.bookName,
    author:el.author
   };
});
console.log(u);
    

























