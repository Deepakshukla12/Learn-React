// This is a simple Express server that serves a list of products.
// It supports an optional search query parameter (e.g., /api/products?search=metal)
// to filter products by name (case-insensitive). If no search is provided,
// it returns all products.


import express from 'express';

const app = express();

const products = [
    { id: 1, name: 'Metal', price: 10.99 },
    { id: 2, name: 'Plastic', price: 9.99 },
    { id: 3, name: 'Wooden', price: 12.99 },
    { id: 4, name: 'Nylon', price: 11}
];

app.get('/api/products', (req, res) => {
    const search = req.query.search;

    if (search) {
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(search.toLowerCase())
        );
        return res.json(filteredProducts);
    }

    res.json(products);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`✅ Server is running on port ${port}`);
});
