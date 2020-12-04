export const JobsService = {
    filters: async () => {
        return fetch('/api/filters').then(res => res.json());
    }
};
