export const NASA_URL = 'https://api.nasa.gov/';
export const API_KEY = import.meta.env.VITE_PUBLIC_NASA_API_KEY;
// formato ISO -> 2023-01-01
export const today = new Date(Date.now()).toISOString().slice(0, 10);

const todayDate = new Date(today);
todayDate.setDate(todayDate.getDate() - 2);

export const otherDay = todayDate.toISOString().slice(0, 10);
