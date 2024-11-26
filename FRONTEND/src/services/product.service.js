import createApiClient from "./api.service";

class ProductService {
    constructor(baseUrl = "/api") {
        this.api = createApiClient(baseUrl);
    }

    async create(data) {
        return (await this.api.post("/product", data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })).data;
    }

    async all() {
        return (await this.api.get("/product")).data;
    }

    async update(id, data) {
        return (await this.api.patch(`/product/${id}`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })).data;
    }

    async get(id) {
        return (await this.api.get(`/product/${id}`)).data;
    }

    async delete(id) {
        return (await this.api.delete(`/product/${id}`)).data;
    }

    async search(query) {
        try {
            const response = await this.api.get("/product/search", {
                params: { q: query } // Gửi tham số tìm kiếm qua query string
            });
            return response.data; // Trả về dữ liệu từ API
        } catch (error) {
            console.error("Error searching products:", error);
            throw error;
        }
    }
}

export default new ProductService();
