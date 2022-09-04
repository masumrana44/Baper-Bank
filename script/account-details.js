// // For Deposite Field

//Step-1 add event listenner to the depsit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    //step-2 get the deposit amount from the deposit input field
    const depositInputField = document.getElementById('deposit-input');
    const newdepositValueString = depositInputField.value;
    const newdepositValue = parseFloat(newdepositValueString);
   
    //Step-3 get current deposit total
    const previousDeposit = document.getElementById('previous-value');
    const previousdepositvalueString = previousDeposit.innerText;
    const previousdepositvalue = parseFloat(previousdepositvalueString);
   
    // step-4 add Numbers to set the total deposit 
    const totalDepositeAmount = previousdepositvalue + newdepositValue;

    previousDeposit.innerText = totalDepositeAmount;

    // step-5: get ballance currnet total 
    const previousBalance = document.getElementById('previous-balance');
    const previousBalanceString = previousBalance.innerText;
    const previousTotalBalance = parseFloat(previousBalanceString);

    // step - 6:calculate current total ballance
    const newTotalBallance = newdepositValue + previousTotalBalance;

    // step-7:set ballance total
    previousBalance.innerText = newTotalBallance;

    //    step-8 clear the input site
    depositInputField.value = '';
})




// for withdraw field

document.getElementById('btn-withdraw').addEventListener('click', function (){
    // withdraw Input Field
    const withdrawInputField = document.getElementById('Withdraw-input');
    const withdrawInputFieldSting = withdrawInputField.value;
    const newwithdrawInputFieldValue = parseFloat(withdrawInputFieldSting);

    // show withdraw amount Bar 
    const previousWithdraw = document.getElementById('show-withdraw');
    const previousWithdrawValueString = previousWithdraw.innerText;
    const previousWithdrawValue = parseFloat(previousWithdrawValueString);
 
    const totalWithdrawBallance = newwithdrawInputFieldValue + previousWithdrawValue
    previousWithdraw.innerText = totalWithdrawBallance;
     

    // show withdraw Balance
    const previousBalanceValue = document.getElementById('previous-balance');
    const previousBalanceString = previousBalanceValue.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    const totalNewBalance = previousBalance - totalWithdrawBallance;
    previousBalanceValue.innerText = totalNewBalance;

    
})
