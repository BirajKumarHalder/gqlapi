exports.Product = {
    category: ({ categoryId: categoryId }, args, { categories }) => {
        return categories.find(c => c.id === categoryId);
    },
    reviews: ({ id: productId }, args, { reviews }) => {
        return reviews.filter(r => r.productId === productId);
    }
}