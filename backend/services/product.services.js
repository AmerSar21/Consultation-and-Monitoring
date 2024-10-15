import ProductRepository from "../repository/product.repository.js";

class ProductService {
    async createProduct(data) {
        return ProductRepository.createProduct(data);
    }

    async getProductById(id) {
        return ProductRepository.getProductById(id);
    }

    async getAllProducts() {
        return ProductRepository.getAllProducts();
    }

    async updateProduct(id, data) {
        return ProductRepository.updateProduct(id, data);
    }

    async deleteProduct(id) {
        return ProductRepository.deleteProduct(id);
    }
}

export default new ProductService();