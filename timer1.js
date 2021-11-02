
// "use strict"

const args = process.argv.splice(2).map(x => Number(x) * 1000);

const alarmClock = function(args) {

  if (!args) return process.exit();
  for (let element of args) {
    if (element === NaN || element < 0) {
      continue;
    } 
    setTimeout(() => process.stdout.write('⏰⏰'), element);
    // setTimeout(() => process.stdout.write('\x07'), ele);
  }
};

alarmClock(args);

// setTimeout(() => process.stdout.write('\n'), ele + 300); 