import Product from "../models/product.model.js";

class ProductRepository {
    async createProduct(data) {
        const product = new Product(data);
        return product.save();
    }

    async getProductById(id) {
        return Product.findById(id);
    }

    async getAllProducts() {
        return Product.find();
    }

    async updateProduct(id, data) {
        return Product.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteProduct(id) {
        return Product.findByIdAndDelete(id);
    }
}

export default new ProductRepository();