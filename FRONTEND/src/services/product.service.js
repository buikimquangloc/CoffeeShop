import createApiClient from "./api.service";

class ProductService {
    constructor(baseUrl = "/api/product") {
        this.api = createApiClient(baseUrl);
    }

    async create(data) {
        return (await this.api.post("/", data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })).data;
    }

    async all() {
        return (await this.api.get("/")).data;
    }

    async update(id, data) {
        return (await this.api.patch(`/${id}`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })).data;
    }

    async get(id) {
        return (await this.api.get(`/${id}`)).data;
    }

    async delete(id) {
        return (await this.api.delete(`/${id}`)).data;
    }

    async search(query) {
        try {
            const response = await this.api.get("/search", {
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
