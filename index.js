@echo off & setlocal DisableDelayedExpansion
set counter=4
:Start
if %counter% equ 0 goto :LOCKOUT
Mode 50, 30 & color 0e
echo Enter Username and Password to access inside
set /p input= Username:

set "psCommand=powershell -Command "$pword = read-host 'Enter password' -AsSecureString ; ^
    $BSTR=[System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($pword); ^
      [System.Runtime.InteropServices.Marshal]::PtrToStringAuto($BSTR)""
        for /f "usebackq delims=" %%p in (`%psCommand%`) do set password=%%p
)

if %input%==YourUsername (
if %password%==YourPassword goto :Sucess
)
goto :2

:LOCKOUT
echo ACCOUNT LOCKED OUT TIMEOUT IN 80000
timeout /t 80000
goto :Start


:2
echo.
set /a counter -=1
echo.
@echo on
@echo off
color a0
echo INCORRECT USERNAME OR PASSWORD
echo.
if %counter% lss 4 echo %counter% attempts left
pause
goto :Start


:Sucess
Echo Correct Username and Password
color 0a
pause
goto :menu

:menu
echo 1)fb 
echo 2)gmail
echo 3)youtube

echo.
echo Please enter the number of your choice

set/p Choice=:
if %choice%==1 echo your facebook Username:xxxxxx , Password:zzzzzzzzz
if %choice%==2 echo your gmail Username:abc , Password: xyz
if %choice%==3 echo your youtube Username:yourusername , Password: yourpassword

echo.
pause
goto menu








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

  
  
console.log(chalk.red('W E L C O M E'));
  
console.log('')  

console.log(chalk.bgRed('S T U M B L E H A C K S'));  
  
console.log('')  
  
  console.log(`Trophy And Crown Hack Safe! [ReEdit]
By : ${chalk.bold('Mr.Russel#0001')} - Credit to special person : @dkmpostor & @Eskey ft @xDast#8745 
`);

  

console.log(`${chalk.red(`
1 Push Trophy
3 Push Crown
Choose to use the available number`)} 
`);
const round = rs.question(`[+] Select Number  : `);
    console.log('');
  
  
  
  
 
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

console.log(chalk.red('Status:Succes'));
console.log('') 
console.log(chalk.bgGreen(`Time : [ ${moment().format('HH:mm:ss')} ]`),)     
console.log('')     
console.log(chalk.bgMagenta(`User : ${username}`))   
console.log('')
console.log(chalk.bgYellow(`Trophy : ${trophy}`))   
console.log('')
console.log(chalk.bgCyan(`Crown : ${crown}`))   
     
      
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
