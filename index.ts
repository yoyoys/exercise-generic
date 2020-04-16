import { MyGenerator, MyGenerator2, ApiConfig } from './options';

interface KeyedItem {
  id: string | number;
}

interface Book {
  id: string;
  name: string;
}

interface Author {
  id: string;
  name: string;
  gender: 'male'|'female';
}

interface User {
  name: string;
  gender: 'male'|'female';
}

interface GenericRes<T extends KeyedItem = KeyedItem> {
  code: number;
  list: T[];
}

function getCodeMessage(res: GenericRes) {
  switch (res.code) {
    case 1:
      return 'ok'
  }
}

function getItemIds(res: GenericRes) {
  return res.list.map(o => o.id)
}

class BookDAL {
  getBooks(): GenericRes<Book> {
    return {
      code: 200,
      list: [
        {
          id: '1',
          name: 'book 1'
        },
        {
          id: '2',
          name: 'book 2'
        },
        {
          id: '3',
          name: 'book 3'
        },
      ]
    }
  }

  getAuthors(): GenericRes<Author> {
    return {
      code: 200,
      list: [
        {
          id: '1',
          name: 'author 1',
          gender: 'male'
        },
        {
          id: '2',
          name: 'author 2',
          gender: 'male'
        },
        {
          id: '3',
          name: 'author 3',
          gender: 'male'
        },
      ],
    }
  }

  getUsers(): GenericRes<User> {
    return {
      code: 200,
      list: [
        {
          name: 'user 1',
          gender: 'male'
        },
        {
          name: 'user 2',
          gender: 'male'
        },
        {
          name: 'user 3',
          gender: 'male'
        },
      ],
    }

  }
}

const api = new BookDAL();

const books = api.getBooks();

const authors = api.getAuthors();


const gen1 = new MyGenerator();
const gen2 = new MyGenerator2();

const config1 = gen1.gen();
const config2 = gen2.gen();

class Component {
  data: ApiConfig
}