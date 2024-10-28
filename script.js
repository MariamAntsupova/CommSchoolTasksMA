
// 1.მოცემული გაქვთ მასივი, სადაც ერთ მასივად უნდა დააჯგუფოთ ერთი ავტორის ნაწარმოებები
// const books = [
//     { title: "The Hobbit", author: "J.R.R. Tolkien", yearPublished: 1937 },
//     { title: "1984", author: "George Orwell", yearPublished: 1949 },
//     { title: "The Lord of the Rings", author: "J.R.R. Tolkien", yearPublished: 1954 }
// ];

// შედეგად ბრუნდებოდეს მსგავსად.
// {
//     "J.R.R. Tolkien": [
//         { title: "The Hobbit", yearPublished: 1937 },
//         { title: "The Lord of the Rings", yearPublished: 1954 }
//     ],
//     "George Orwell": [
//         { title: "1984", yearPublished: 1949 }
//     ]
// }


const books = [
    { title: "The Hobbit", author: "J.R.R. Tolkien", yearPublished: 1937 },
    { title: "1984", author: "George Orwell", yearPublished: 1949 },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", yearPublished: 1954 }
];


const authorBooks = {};

for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const author = book.author;

    if (!(author in authorBooks)) {
        authorBooks[author] = [];
    }

    authorBooks[author].push({
        title: book.title,
        yearPublished: book.yearPublished
    });
}

console.log(authorBooks);
