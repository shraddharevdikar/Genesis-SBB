/**
 * Formats a date using a simple template string (e.g., 'YYYY-MM-DD HH:mm:ss').
 * Supported tokens: YYYY, MM, DD, HH, mm, ss
 */
export function formatDate(date: Date | string | number, formatPattern = 'YYYY-MM-DD'): string {
  const d = new Date(date);
  if (isNaN(d.getTime())) return '';

  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  const seconds = String(d.getSeconds()).padStart(2, '0');

  return formatPattern
    .replace('YYYY', String(year))
    .replace('MM', month)
    .replace('DD', day)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds);
}

/**
 * Adds a specified number of days to a date.
 */
export function addDays(date: Date | string | number, days: number): Date {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

/**
 * Calculates the difference in full days between two dates (dateLeft - dateRight).
 */
export function differenceInDays(dateLeft: Date | string | number, dateRight: Date | string | number): number {
  const dLeft = new Date(dateLeft);
  const dRight = new Date(dateRight);

  // Use UTC to avoid daylight saving transitions skewing the day count
  const utcLeft = Date.UTC(dLeft.getFullYear(), dLeft.getMonth(), dLeft.getDate());
  const utcRight = Date.UTC(dRight.getFullYear(), dRight.getMonth(), dRight.getDate());

  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.floor((utcLeft - utcRight) / msPerDay);
}

/**
 * Checks if a given expiry date is in the past compared to a reference date (defaults to now).
 */
export function isExpired(expiryDate: Date | string | number, referenceDate: Date | string | number = new Date()): boolean {
  const expiry = new Date(expiryDate).getTime();
  const reference = new Date(referenceDate).getTime();
  return expiry < reference;
}
