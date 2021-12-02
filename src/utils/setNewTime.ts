export const setNewTime = (timeDate: any) => {
    const date = new Date(timeDate);
  
    const days = date.getUTCDate();
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();
  
    return { days, hours, minutes, seconds };
  };