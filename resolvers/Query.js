const { products, categories } = require('./../db');

exports.Query = {
    products: (parent, args, { products }) => products,
    categories: (parent, args, { categories }) => categories,
    product: (parent, {id}, { products }) => {
        return products.find(p => p.id === id);
    },
    category: (parent, {id}, { categories }) => {
        return categories.find(c => c.id === id);
    }
}