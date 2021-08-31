var initialPrice = document.querySelector("#initial-Price");
var stocksQuantity = document.querySelector("#stocks-Quantity");
var currentPrice = document.querySelector("#current-Price");
var submitBtn = document.querySelector("#submit-btn");
var outputDiv = document.querySelector("#output-div");

function calculateProfitAndLoss(initial,quantity,current){

   
    if(initial === 0 || quantity === 0 || current === 0){
    
        showOutput("Enter Proper Values!");
    
   
    } else if(initial>current){
        var loss = (initial-current)*quantity;
        var lossPercentage = (loss/(initial*quantity)*100);
                 showOutput(`Hey the loss is ${loss} and the loss percentage is ${lossPercentage}%`);
        

    } else if (current>initial){
         
        var profit = (current-initial)*quantity;
        var profitPercentage = (profit/(initial*quantity))*100;
               showOutput(`Hey the profit is ${profit} and the profit percentage is ${profitPercentage}%`) 
    } else {
            
        showOutput( "No loss or Gain");
    }

}

function submitHandler() {

    var ip = Number(Number(initialPrice.value).toFixed(2));
    var qty = Number(Number(stocksQuantity.value).toFixed(2));
    var curr = Number(Number(currentPrice.value).toFixed(2));
    
    calculateProfitAndLoss(ip,qty,curr);
}

function showOutput(message){
  
   outputDiv.innerText = message;


}



submitBtn.addEventListener('click', submitHandler);