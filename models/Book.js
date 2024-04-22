class Book {
    constructor(id, title, author, year, available = true) {
      this.id = id;
      this.title = title;
      this.author = author;
      this.year = year;
      this.available = available;
    }
  
    static getAll() {
      return [
        new Book(1, 'ksiazka1', 'Autor1', 2000, true),
        new Book(2, 'ksiazka2', 'Autor2', 2001, true),
        new Book(3, 'ksiazka3', 'Autor3', 2002, true),
        new Book(4, 'ksiazka4', 'Autor4', 2003, true),
        new Book(5, 'ksiazka5', 'Autor5', 2004, true),
      ];
    }
  }
  
  module.exports = Book;
  