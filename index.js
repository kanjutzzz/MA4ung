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

  
  
console.log(chalk.bgRed('W E L C O M E'));
  
console.log('')  

console.log(chalk.bgGreen('ϟS T U M B L E H A C K Sϟ'));  
  
console.log('')  
  
  console.log(`Trophy And Crown Hack Safe! [ReEdit]
By : ${chalk.bold('Mr.Russel#0001')} - Credit to special person : @dkmpostor & @Eskey ft @xDast#8745 
`);
	
console.log(`Choose what to grind`);
console.log(`1. Trophy only (Round 3 auth)`);
console.log(`2. Crown + Trophy (Winner auth)`);

const round = rs.question(`Choose : `)
console.log('');  
  
  
  
 
  const auth = rs.question('Masukin code nya deck! : ');
  console.log('');

  while (true) {

    const result = await GoStumble(auth);
    if (!result) {

      console.log(chalk.red(`\r[ ${moment().format('HH:mm:ss')} ] Codenya salah deck :`));
      

    } else if (result.includes('User')) {

      const data = JSON.parse(result);
      const username = data.User.Username;
      const country = data.User.Country;
      const trophy = data.User.SkillRating;
      const crown = data.User.Crowns;

console.log(chalk.bgRed('♠Status:Succes'));
console.log('') 
console.log(chalk.bgGreen(`♠Time : [ ${moment().format('HH:mm:ss')} ]`),)     
console.log('')     
console.log(chalk.bgMagenta(`♠User : ${username}`))   
console.log('')
console.log(chalk.bgYellow(`♠Trophy : ${trophy}`))   
console.log('')
console.log(chalk.bgCyan(`♠Crown : ${crown}`))   
     
      
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
