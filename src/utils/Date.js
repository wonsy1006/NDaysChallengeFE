const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

export const todayDate = `${year} / ${month} / ${day}`;
