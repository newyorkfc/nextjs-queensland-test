export function convertTimeToAuFormat(dateStr: string | null): string | null {
  if (dateStr === null || dateStr === "") {
    return null;
  }
  const date = new Date(dateStr);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}