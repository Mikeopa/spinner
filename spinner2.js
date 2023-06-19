setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  process.stdout.write('\r\\   ');
}, 700);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 900);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 1100);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 1300);

setTimeout(() => {
  process.stdout.write('\r\\   ');
}, 1500);

setTimeout(() => {
  console.log(); // Output a newline character to move to the next line
}, 1700);



const spinnerChars = ['|', '/', '-', '\\'];
let delay = 100;

for (const char of spinnerChars) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, delay);
  
  delay += 200;
}

