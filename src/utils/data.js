export const NASA_URL = 'https://api.nasa.gov/';
export const API_KEY = import.meta.env.VITE_PUBLIC_NASA_API_KEY;
// formato ISO -> 2023-01-01
export const today = new Date(Date.now()).toISOString().slice(0, 10);

const todayDate = new Date(today);
todayDate.setDate(todayDate.getDate() - 2);

export const otherDay = todayDate.toISOString().slice(0, 10);

export const solDay = 100;

export const roverData = [
  {
    rover: 'curiosity',
    min_date: new Date('2012-08-06').toISOString().slice(0, 10),
    max_date: today,
    min_sol: 0,
  },
  {
    rover: 'spirit',
    min_date: new Date('2004-01-05').toISOString().slice(0, 10),
    max_date: new Date('2009-02-21').toISOString().slice(0, 10),
    min_sol: 0,
  },
  {
    rover: 'opportunity',
    min_date: new Date('2004-01-26').toISOString().slice(0, 10), // landing_date + 1
    max_date: new Date('2018-06-11').toISOString().slice(0, 10),
    min_sol: 0,
  },
];
