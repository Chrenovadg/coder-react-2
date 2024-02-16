const products = [
    {
        id: '1',
        name: 'Latita 1',
        price: 1000,
        category: 'Bebida Tropical',
        img: 'https://media.istockphoto.com/id/179035469/es/foto/aluminio-pueden.jpg?s=612x612&w=0&k=20&c=d2EOkscxnwJiZTknPgtP5o3KZJApvmVqxn3N0FvXiEY=',
        stock: 25,
        description: 'descripcion de la latita'
    },
    {
        id: '2',
        name: 'Latita 2',
        price: 1000,
        category: 'Bebida Tropical',
        img: 'https://media.istockphoto.com/id/179035469/es/foto/aluminio-pueden.jpg?s=612x612&w=0&k=20&c=d2EOkscxnwJiZTknPgtP5o3KZJApvmVqxn3N0FvXiEY=',
        stock: 25,
        description: 'descripcion de la latita'
    },

    {
        id: '3',
        name: 'Latita 3',
        price: 1000,
        category: 'Bebida Tropical',
        img: 'https://media.istockphoto.com/id/179035469/es/foto/aluminio-pueden.jpg?s=612x612&w=0&k=20&c=d2EOkscxnwJiZTknPgtP5o3KZJApvmVqxn3N0FvXiEY=',
        stock: 25,
        description: 'descripcion de la latita'
    },
    
]/*  */

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

