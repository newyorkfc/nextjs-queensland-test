export function convertDateToAuFormat(dateStr: string): string {
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear();
  
    return `${day}/${month}/${year}`;
  }
  
  export function convertDateFromAuFormat(dateStr: string): string {
    const parts = dateStr.split("/");
    const day = parts[0];
    const month = parts[1];
    const year = parts[2];
    return `${year}-${month}-${day}`;
  }