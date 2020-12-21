export function weekDistance(dateFrom, dateTo = new Date()) {
    const distanceInMs = Math.abs(dateTo - new Date(dateFrom.replace(' ', 'T')));
    const seconds = Math.floor(distanceInMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    return Math.floor(days / 7);
}
