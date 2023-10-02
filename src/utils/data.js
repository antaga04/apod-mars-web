import { toISOFormat } from './functions';
export const NASA_URL = 'https://api.nasa.gov/';
export const API_KEY = import.meta.env.VITE_PUBLIC_NASA_API_KEY;
// formato ISO -> 2023-01-01
export const today = toISOFormat(new Date(Date.now()));

const todayDate = new Date(today);
todayDate.setDate(todayDate.getDate() - 2);

export const otherDay = toISOFormat(todayDate);

export const solDay = 100;

export const roverData = [
  {
    rover: 'curiosity',
    min_date: toISOFormat(new Date('2012-08-06')),
    max_date: today,
    min_sol: 0,
  },
  {
    rover: 'spirit',
    min_date: toISOFormat(new Date('2004-01-05')),
    max_date: toISOFormat(new Date('2009-02-21')),
    min_sol: 0,
  },
  {
    rover: 'opportunity',
    min_date: toISOFormat(new Date('2004-01-26')), // landing_date + 1
    max_date: toISOFormat(new Date('2018-06-11')),
    min_sol: 0,
  },
];

export const mrpText = `View the image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars on a specific date.`;
export const apodText = `Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.`;
