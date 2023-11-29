export function formatTime(time: number) {
  return `${Math.floor(time)}`.padStart(2, "0");
}
