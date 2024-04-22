class User {
    constructor(id, login, borrowedBooks = []) {
      this.id = id;
      this.login = login;
      this.borrowedBooks = borrowedBooks;
    }
  
    static getAll() {
      return [
        new User(1, 'u1', []),
        new User(2, 'u2', []),
        new User(3, 'u3', []),
        new User(4, 'u4', []),
        new User(5, 'u5', []),
      ];
    }

    borrowBook(book) {
      this.borrowedBooks.push(book);
    }
  
    returnBook(bookId) {
      this.borrowedBooks = this.borrowedBooks.filter(book => book.id !== bookId);
    }
  
    static findBorrowedBookById(userId, bookId) {
      const user = User.getAll().find(user => user.id == userId);
      if (user) {
        return user.borrowedBooks.some(book => book.id == bookId);
      }
      return false;
    }
  }


  module.exports = User;
  