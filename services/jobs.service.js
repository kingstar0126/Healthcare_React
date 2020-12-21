export const JobsService = {
    filters: async () => {
        return fetch('/api/filters').then(res => res.json());
    },
    query: async (keyword, sortKey, sortDirection) => {
        return fetch(`/api/jobs?keyword=${keyword}&sortKey=${sortKey}&sortDirection=${sortDirection}`).then(res => res.json());
    }
};
