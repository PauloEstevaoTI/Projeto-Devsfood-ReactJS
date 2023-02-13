let BASE = 'https://api.b7web.com.br/devsfood/api'

export default {
    getCategories: async () => {
        // GET / categories
        const res = await fetch(BASE+'/categories');
        const json = await res.json();

        return json;
    },

    getProducts: async () => {
        // GET /products ([search, page, category])
        const res = await fetch(BASE+'/products');
        const json = await res.json();

        return json;
    }
};