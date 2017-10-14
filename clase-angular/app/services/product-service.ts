import {Injectable} from '@angular/core';

export class Product {
  constructor(
      public id: number,
      public nombre: string,
      public precio: number,
      public rating: number,
      public descripcion: string,
      public categorias: string[],
      public imagen:string) {
  }
}

export class Review {
  constructor(
      public id: number,
      public productId: number,
      public timestamp: Date,
      public usuario: string,
      public rating: number,
      public comentarios: string) {
  }
}

@Injectable()
export class ProductService {
  getProducts(): Product[] {
    return products.map(p => new Product(p.id, p.nombre, p.precio, p.rating, p.descripcion, p.categorias,p.imagen));
  }

  getProductById(productId: number): Product {
    return products.find(p => p.id === productId);
  }

  getReviewsForProduct(productId: number): Review[] {
    return reviews
        .filter(r => r.productId === productId)
        .map(r => new Review(r.id, r.productId, new Date(r.timestamp), r.usuario, r.rating, r.comentarios));
  }
}

var products = [
  {
    "id": 0,
    "nombre": "Balon",
    "imagen": "http://elsurdiario.com.ar/wp-content/uploads/2015/06/Constitucion-2-1024x678.jpg",
    "precio": 24.99,
    "rating": 4.3,
    "descripcion": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "categorias": ["electronics", "hardware"]
  },
  {
    "id": 1,
    "nombre": "Zapatos",
    "imagen": "http://elsurdiario.com.ar/wp-content/uploads/2015/06/Constitucion-2-1024x678.jpg",
    "precio": 64.99,
    "rating": 3.5,
    "descripcion": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "categorias": ["books"]
  },
  {
    "id": 2,
    "nombre": "Jersey",
    "imagen": "http://programaentrecopas.com.ar/wp-content/uploads/2017/10/telam-informo-que-paraguay-seria-sede-el-mundial-2030-_745_419_1530350.jpg",
    "price": 74.99,
    "rating": 4.2,
    "descripcion": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "categorias": ["electronics"]
  },
  {
    "id": 3,
    "nombre": "Calcetines",
    "imagen": "http://programaentrecopas.com.ar/wp-content/uploads/2017/10/telam-informo-que-paraguay-seria-sede-el-mundial-2030-_745_419_1530350.jpg",
    "precio": 84.99,
    "rating": 3.9,
    "descripcion": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "categorias": ["hardware"]
  },
  {
    "id": 4,
    "nombre": "shorts",
    "imagen": "http://elsurdiario.com.ar/wp-content/uploads/2015/06/Constitucion-2-1024x678.jpg",
    "precio": 94.99,
    "rating": 5,
    "descripcion": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "categorias": ["electronics", "hardware"]
  },
  {
    "id": 5,
    "nombre": "balon profesional",
    "imagen": "http://elsurdiario.com.ar/wp-content/uploads/2015/06/Constitucion-2-1024x678.jpg",
    "price": 54.99,
    "rating": 4.6,
    "descripcion": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "categorias": ["books"]
  }
];

var reviews = [
  {
    "id": 0,
    "productId": 0,
    "timestamp": "2014-05-20T02:17:00+00:00",
    "usuario": "Juanito",
    "rating": 5,
    "comentarios": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
  },
  {
    "id": 1,
    "productId": 1,
    "timestamp": "2017-05-20T02:53:00+00:00",
    "usuario": "Pedrito",
    "rating": 3,
    "comentarios": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
  },
  {
    "id": 2,
    "productId": 0,
    "timestamp": "2017-05-20T05:26:00+00:00",
    "usuario": "Sonia",
    "rating": 4,
    "comentarios": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
  },
  {
    "id": 3,
    "productId": 0,
    "timestamp": "2017-05-20T07:20:00+00:00",
    "usuario": "Cristina",
    "rating": 4,
    "comentarios": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
  },
  {
    "id": 4,
    "productId": 0,
    "timestamp": "2017-05-20T11:35:00+00:00",
    "user": "Pedro",
    "rating": 5,
    "comentarios": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
  },
  {
    "id": 5,
    "productId": 0,
    "timestamp": "2017-05-20T11:42:00+00:00",
    "usuario": "Pedro",
    "rating": 5,
    "comentarios": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
  }
];
