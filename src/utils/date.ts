/**
 * Get Current date and time
 * 
 * @returns string
 */
export const currentDateTime = (): string => {
  return [
    currentDate(),
    currentTime(),
  ].join(' ');
}

/**
 * Get Current Date
 * 
 * @returns string
 */
export const currentDate = (): string => {
  const date = new Date();
  
  return [
    date.getDate().toString().padStart(2, '0'),
    (date.getMonth() + 1).toString().padStart(2, '0'),
    date.getFullYear(),
  ].join('/');
}

/**
 * Get Current Time
 * 
 * @returns string
 */
export const currentTime = (): string => {
  const date = new Date();

  return [
    date.getHours().toString().padStart(2, '0'),
    date.getMinutes().toString().padStart(2, '0'),
    date.getSeconds().toString().padStart(2, '0'),
  ].join(':');
}