let spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|', ];
let time = 50;
for (let char of spinner) {
  setTimeout(() => {
    process.stdout.write('\r' + char + '   ');
  }, time)
  time += 200
}
let newLine = setTimeout(() => {console.log()}, time);