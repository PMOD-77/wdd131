const articles = [
    {
		id: 1,
        title: 'Chronicles of Thunder: Legends: The Tragical Life of Aurrkai de Zkarred',
        date: 'Coming Soon',
        description: 'Aurrkai must learn to heal, and find a community that accepts him, scars and all, along with his family.',
        imgSrc: 'hall_of_images/Screenshot_20251211_182300_Canvas.jpg',
        imgAlt: 'Book cover for Chronicles of Thunder: Legends',
        ages: '13+',
        genre: 'Fantasy',
        stars: '⭐⭐⭐⭐⭐'
    },
    {
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
		"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
		"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
	}
];

    let bookList = document.querySelector('#book-list');

    articles.forEach(item => {

    const article = document.createElement('article');
    article.className = 'book-item';

    let html = `
                <h2>${item.title}</h2>
                <img src='${item.imgSrc}' alt='${item.imgAlt}'>
                <p><strong>Release Date:</strong> '${item.date}'</p>
                <p><strong>Recommended Age:</strong> '${item.ages}'</p>
                <p><strong>Genre:</strong> '${item.genre}'</p>
                <p><strong>Rating:</strong> <span aria-label="${item.stars.length} out of 5 stars" role="img">${item.stars}</span></p>
                <p id='desc'>${item.description}</p>
            `

        article.innerHTML = html;
        bookList.appendChild(article);

});