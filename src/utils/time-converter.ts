export const formatEpochToDateTime = (epochTime: number): string => {
  if (!epochTime) return "N/A";
  
  const date = new Date(epochTime);
  const pad = (num: number): string => String(num).padStart(2, '0');

  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());
  
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  const seconds = pad(date.getSeconds());
  return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
};