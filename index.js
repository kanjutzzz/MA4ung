const fetch = require('node-fetch');
const moment = require('moment');
const chalk = require('chalk');
const rs = require('readline-sync');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const GoStumble = (auth) => new Promise((resolve, reject) => {

  fetch('http://kitkabackend.eastus.cloudapp.azure.com:5010/round/finishv2/3', {
    method: 'GET',
    headers: {
      'authorization': auth
    }
  })
    .then(res => res.text())
    .then(data => {
      resolve(data);
    })
    .catch(err => {
      reject(err);
    });

});

(async () => {

  console.log(`Trophy And Crown Hack Safe! [ReEdit]
By : ${chalk.bold('Mr.Russel#0001')} - Credit : @dkmpostor & @Eskey ft @xDast#8745 also @kahfx
`);

  
  
  console.log(chalk.bgCyan('S T U M B L E H A C K S'));
  console.log('')
  console.log('')
  
  
  const auth = rs.question('Masukin code nya deck! : ');
  console.log('');

  while (true) {

    const result = await GoStumble(auth);
    if (!result) {

      console.log(chalk.red(`\r[ ${moment().format('HH:mm:ss')} ] CODE NYA SALAH DECK:`));break;
      

    } else if (result.includes('User')) {

      const data = JSON.parse(result);
      const username = data.User.Username;
      const country = data.User.Country;
      const trophy = data.User.SkillRating;
      const crown = data.User.Crowns;

console.log(chalk.bgRed('Status:Succes'));

console.log(chalk.bgWhite(`[ ${moment().format('HH:mm:ss')} ]`),)     
      
console.log{chalk.bgMagenta(`User : ${username}`)}

console.log{chalk.bgYellow(`Trophy : ${trophy}`)}

console.log{chalk.bgCyan(`Crown : ${crown}`)}`));
     
      
      await GoStumble(auth);
      await GoStumble(auth);
      await GoStumble(auth);
      await GoStumble(auth);
      console.log('')
      console.log('')
      await sleep(11000);
      
      

    } else if (result == 'BANNED') {
      console.log(chalk.bgRed(`Your Account has been Banned`));
     break;
    }
  }


})();
