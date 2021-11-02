
// "use strict"

const args = process.argv.splice(2).map(x => Number(x) * 1000);
console.log(args);

const alarmClock = function(args) {

  for (let ele of args) {
    // setTimeout(() => process.stdout.write('\x07'), ele);
    setTimeout(() => process.stdout.write('⏰⏰'), ele);
  }
  
}
alarmClock(args);

// setTimeout(() => process.stdout.write('\n'), ele + 300); 