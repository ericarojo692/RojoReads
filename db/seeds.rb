# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User = Api::V1::User
Shelf = Api::V1::Shelf
Review = Api::V1::Review
Rating = Api::V1::Rating
Book = Api::V1::Book

puts "Creating users..."
user1 = User.create(name: 'Shawna', password: '123', fav_genre: 'Fantasy', bio: 'Love getting lost in my books!')
user2 = User.create(name: 'Natalie', password: '123', fav_genre: 'Horror', bio: "I dont allow myself to read these books at night!!")
user3 = User.create(name: 'Melissa', password: '123', fav_genre: 'Fiction', bio: 'These books give me life!')
user4 = User.create(name: 'Phil', password: '123', fav_genre: 'Biography', bio: 'There is something to learn about peoples lives.')
user5 = User.create(name: 'Gabe', password: '123', fav_genre: 'Romance', bio: 'Love me some love')

puts "Creating books..."
book1 = Book.create(title: 'Harry Potter and the Sorcerers Stone', author: 'J.K. Rowling', genre: 'Fantasy', pub_date: 'June 26, 1997', image:'https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg')
book2 = Book.create(title:'It', author: 'Stephen King', genre: 'Horror', pub_date: 'September 15, 1986', image:'https://upload.wikimedia.org/wikipedia/en/7/78/It_%28Stephen_King_novel_-_cover_art%29.jpg')
book3 = Book.create(title:'Bossy Pants', author: 'Tina Fey', genre: 'Biography', pub_date: 'April 5, 2011', image: 'https://m.media-amazon.com/images/I/418ITtRuOeL.jpg')
book4 = Book.create(title:'Yes Please', author: 'Amy Poehler', genre: 'Biography', pub_date: 'October 28, 2014', image: 'https://m.media-amazon.com/images/I/51scgPYHPHL.jpg')
book5 = Book.create(title:'Normal People', author: 'Sally Rooney', genre: 'Romance', pub_date: 'August 30, 2018', image: 'https://images-na.ssl-images-amazon.com/images/I/51L+Ln0s8dL._SX333_BO1,204,203,200_.jpg')
book6 = Book.create(title:'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance', pub_date: 'January 28, 1813', image: 'https://images-na.ssl-images-amazon.com/images/I/71Q1tPupKjL.jpg')
book7 = Book.create(title:'The Mexican Gothic', author: 'Silvia Moreno Garcia', genre: 'Horror', pub_date: 'June 30, 2020', image: 'https://cdn.shopify.com/s/files/1/0471/2156/3811/products/mexicangothicsilviamorenogarciapb_1500x.png?v=1622724614')
book8 = Book.create(title:'Becoming', author: 'Michelle Obama', genre: 'Biography', pub_date: 'November 13, 2018', image: 'https://images-na.ssl-images-amazon.com/images/I/81KGjsBXQ7L.jpg')
book9 = Book.create(title:'The Shining', author: 'Stephen King', genre: 'Horror', pub_date: 'January 28, 1977', image: 'https://images-na.ssl-images-amazon.com/images/I/91bjV4lqZpL.jpg')
book10 = Book.create(title:'A Game of Thrones', author: 'George R. R. Martin', genre: 'Fantasy', pub_date: 'August 1, 1996', image: 'https://images-na.ssl-images-amazon.com/images/I/91dSMhdIzTL.jpg')
book11 = Book.create(title:'Of Mice and Men', author: 'John Steinbeck', genre: 'Fiction', pub_date: 'November 23, 1937', image: 'https://images-na.ssl-images-amazon.com/images/I/41OmKxmMLIL._SX266_BO1,204,203,200_.jpg')
book12 = Book.create(title:'The Alchemist', author: 'Paulo Cohelho', genre: 'Fiction', pub_date: 'March 13, 1988', image: 'https://m.media-amazon.com/images/I/51Z0nLAfLmL.jpg')
book13 = Book.create(title:'Eleanor Oliphant is Completely Fine', author: 'Gail Honeyman', genre: 'Fiction', pub_date: 'August 4, 2017', image: 'https://target.scene7.com/is/image/Target/GUEST_8ae4f313-6422-421c-b18b-a3a5374caec2?wid=488&hei=488&fmt=pjpeg')
book14 = Book.create(title:'Wuthering Heights', author: 'Emily Bronte', genre: 'Romance', pub_date: 'December 7, 1847', image: 'https://images-na.ssl-images-amazon.com/images/I/91XdM7eQiOL.jpg')
book15 = Book.create(title:'Frankenstein', author: 'Mary Shelley', genre: 'Horror', pub_date: 'March 7, 1817', image: 'https://images-na.ssl-images-amazon.com/images/I/81z7E0uWdtL.jpg')
book16 = Book.create(title:'People We Meet on Vacation', author: 'Emily Henry', genre: 'Romance', pub_date: 'January 28, 2021', image: 'https://images-na.ssl-images-amazon.com/images/I/813QkLg2LaL.jpg')
book17 = Book.create(title:'Leave the World Behind', author: 'Rumaan Alam', genre: 'Fiction', pub_date: 'October 6, 2020', image: 'https://images-na.ssl-images-amazon.com/images/I/71YBjMz8GfL.jpg')
book18 = Book.create(title:'This Time Next Year', author: 'Sophia Cousens', genre: 'Romance', pub_date: 'August 1, 2020', image: 'https://images-na.ssl-images-amazon.com/images/I/81SDIpjqCkL.jpg')
book19 = Book.create(title:'Pet Sematary', author: 'Stephen King', genre: 'horror', pub_date: 'October 6, 2020', image: 'https://images-na.ssl-images-amazon.com/images/I/91ndIrptO4L.jpg')
book20 = Book.create(title:'The Vanishing Half', author: 'Brit Bennett', genre: 'Fiction', pub_date: 'June 2, 2020', image: 'https://images-na.ssl-images-amazon.com/images/I/71QMziWDpNL.jpg')




puts "Creating shelves..."
shelf1 = Shelf.create(user_id: 1, book_id: book1.id)
shelf2 = Shelf.create(user_id: 2, book_id: book2.id)
shelf3 = Shelf.create(user_id: 3, book_id: book3.id)
shelf4 = Shelf.create(user_id: 4, book_id: book4.id)
shelf5 = Shelf.create(user_id: 5, book_id: book5.id)
shelf6 = Shelf.create(user_id: 1, book_id: book6.id)
shelf7 = Shelf.create(user_id: 2, book_id: book7.id)
shelf8 = Shelf.create(user_id: 3, book_id: book8.id)
shelf9 = Shelf.create(user_id: 4, book_id: book9.id)
shelf10 = Shelf.create(user_id: 5, book_id: book10.id)
shelf11 = Shelf.create(user_id: 1, book_id: book11.id)
shelf12 = Shelf.create(user_id: 2, book_id: book12.id)
shelf13 = Shelf.create(user_id: 3, book_id: book13.id)
shelf14 = Shelf.create(user_id: 4, book_id: book14.id)
shelf15 = Shelf.create(user_id: 5, book_id: book15.id)
shelf16 = Shelf.create(user_id: 1, book_id: book16.id)
shelf17 = Shelf.create(user_id: 2, book_id: book17.id)
shelf18= Shelf.create(user_id: 3, book_id: book18.id)
shelf19 = Shelf.create(user_id: 4, book_id: book19.id)
shelf20 = Shelf.create(user_id: 5, book_id: book20.id)



puts "Creating reviews..."
review1 = Review.create(book_id: book1.id, content: 'Literally cried the whole time')
review2 = Review.create(book_id: book2.id, content: 'Best book ever')
review3 = Review.create(book_id: book3.id, content: 'Was this written by a child?')
review4 = Review.create(book_id: book4.id, content: "Changed my outlook of life! Absolutely amazing!!")
review5 = Review.create(book_id: book5.id, content: "I have no idea what I just read..")
review6 = Review.create(book_id: book6.id, content: 'Hated it. Feel asleep on the first page.')
review7 = Review.create(book_id: book7.id, content: 'The character development wasnt where I wanted to be.')
review8 = Review.create(book_id: book8.id, content: 'Good read but not sure if I would recommend it')
review9 = Review.create(book_id: book9.id, content: "The kind of book you read and your sad that its over")
review10 = Review.create(book_id: book10.id, content: "Not the ending I was rooting for")
review11 = Review.create(book_id: book11.id, content: 'Hilarious but Im not sure if it was suppose to be...')
review12 = Review.create(book_id: book12.id, content: 'WOWWWWW')
review13 = Review.create(book_id: book13.id, content: 'Impressive!')
review14 = Review.create(book_id: book14.id, content: "Not what I was expecting but overall good")
review15 = Review.create(book_id: book15.id, content: "Dude I couldnt put this down")
review16 = Review.create(book_id: book16.id, content: 'Decent. Would recommend.')
review17 = Review.create(book_id: book17.id, content: 'I dunno about the best book ever but really damn good.')
review18 = Review.create(book_id: book18.id, content: 'This auther shoud never write again')
review19 = Review.create(book_id: book19.id, content: "Helped me come out of a dark place")
review20 = Review.create(book_id: book20.id, content: "Absolute garbage")

puts "Creating ratings..."
Rating.create(book_id: book1.id, rating: 5)
Rating.create(book_id: book1.id, rating: 5)
Rating.create(book_id: book1.id, rating: 3)
Rating.create(book_id: book2.id, rating: 4)
Rating.create(book_id: book7.id, rating: 4)
Rating.create(book_id: book7.id, rating: 2)
Rating.create(book_id: book12.id, rating: 3)
Rating.create(book_id: book15.id, rating: 4)
Rating.create(book_id: book15.id, rating: 5)
Rating.create(book_id: book2.id, rating: 1)
Rating.create(book_id: book3.id, rating: 5)
Rating.create(book_id: book4.id, rating: 2)
Rating.create(book_id: book5.id, rating: 3)
Rating.create(book_id: book10.id, rating: 2)
Rating.create(book_id: book12.id, rating: 5)
Rating.create(book_id: book17.id, rating: 5)
Rating.create(book_id: book18.id, rating: 4)
Rating.create(book_id: book19.id, rating: 1)
Rating.create(book_id: book19.id, rating: 4)
Rating.create(book_id: book20.id, rating: 3)



