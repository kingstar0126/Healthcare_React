export const JobsService = {
    filters: async () => {
        return fetch('/api/filters').then(res => res.json());
    },
    query: async (keyword, sort) => {
        return fetch(`/api/jobs?keyword=${keyword}&sort=${sort}`).then(res => res.json());
    }
};
