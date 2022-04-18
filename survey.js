const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const responseArray = [];
rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  //console.log(`Thank you for your valuable feedback: ${answer}`);
  responseArray.push(answer);
  rl.question('What\'s an activity you like doing? ', (answer) => {
    responseArray.push(answer);
    rl.question('What do you listen to while doing that? ', (answer) => {
      responseArray.push(answer);
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
        responseArray.push(answer);
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          responseArray.push(answer);
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            responseArray.push(answer);
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              responseArray.push(answer);
              let response = `${responseArray[0]} loves listening to ${responseArray[2]} while ${responseArray[1]}, devouring ${responseArray[4]} for ${responseArray[3]}, prefers ${responseArray[5]} over any other sport, and is amazing at ${responseArray[6]}.`;
              console.log(response);
              rl.close();
            });
          });
        });
      });
    });
  });
});
