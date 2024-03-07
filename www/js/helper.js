
export function sayHello(name) {
    console.log(`Hello, ${name}!`);
}


export function getCurrentTimeFormat() {
  const options = {
      month: 'long',    // Full month name
      day: 'numeric',    // Day of the month
      hour: 'numeric',   // Hour (24-hour format)
      minute: 'numeric', // Minute
      hour12: false      // Use 24-hour format
  };

  const formatter = new Intl.DateTimeFormat('en-US', options);
  const currentTimeFormatted = formatter.format(new Date());

  return currentTimeFormatted;
}
