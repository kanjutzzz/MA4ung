const fetch = require('node-fetch');
const moment = require('moment');
const chalk = require('chalk');
const rs = require('readline-sync');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {

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



  
  
console.log(chalk.bgRed('W E L C O M E'));
  
console.log('')  

console.log(chalk.bgGreen('ϟS T U M B L E H A C K Sϟ'));  
  
console.log('')  
  
  console.log(`Trophy And Crown Hack Safe! [ReEdit]
By : ${chalk.bold('Mr.Russel#0001')} - Credit to special person : @dkmpostor & @Eskey ft @xDast#8745 
`);
	
console.log(`${chalk.green(`
1. GRIND TROPHY
2. GRIND CROWN
SILAHKAN PILIH`)} 
`);
const round = rs.question(`[+] Select Number  : `);
    console.log('');
    console.clear()
  
  
  
 
  const auth = rs.question('Masukin code nya deck! : ');
  console.log('');
  console.clear()

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
console.log(chalk.bgWhite(`♠Country : ${country}`))
console.log('')   
console.log(chalk.bgGreen(`♠Time : [ ${moment().format('HH:mm:ss')} ]`),)     
console.log('')     
console.log(chalk.bgMagenta(`♠ID : ${username}`))   
console.log('')
console.log(chalk.bgYellow(`♠Trophy : ${trophy}`))   
console.log('')
console.log(chalk.bgCyan(`♠Crown : ${crown}`))      
      
      await GoStumble(auth);
      

    } else if (result == 'BANNED') {
      console.log(chalk.bgRed(`Your Account has been Banned`));
     break;
    }
  }


})();
