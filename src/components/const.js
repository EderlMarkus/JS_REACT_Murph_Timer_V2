//convert minutes to seconds
export function getSeconds(minutes) {
  return minutes * 60;
}

//convert seconds to minutes
export function getMinutes(seconds) {
  return seconds / 60;
}

//convert minutes to hours
export function getHours(seconds) {
  let minutes = getMinutes(seconds);
  return minutes / 60;
}

//convert seconds to 00:00:00 Timestamp
export function getTimeFormat(hours, minutes, seconds) {
  return (
    ('0' + hours).slice(-2) +
    ':' +
    ('0' + minutes).slice(-2) +
    ':' +
    ('0' + seconds).slice(-2)
  );
}

export function getTimeFormatFromSeconds(seconds) {
  let minutes = 0;
  let hours = 0;
  if (seconds >= 3600) {
    hours = Math.floor(seconds / 3600);
    minutes = Math.floor((seconds - hours * 3600) / 60);
    seconds = seconds - hours * 3600 - minutes * 60;
  }
  if (seconds < 3600 && seconds >= 60) {
    minutes = Math.floor(seconds / 60);
    seconds = seconds - minutes * 60;
  }

  return (
    ('0' + hours).slice(-2) +
    ':' +
    ('0' + minutes).slice(-2) +
    ':' +
    ('0' + seconds).slice(-2)
  );
}
