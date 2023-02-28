/*const prices = [7,6,4,3,1];
//7,6,4,3,1    7,1,5,3,6,4
const pris = []
let max = 0

function func() {
    for(var i=0;i<prices.length; i++){
        for(var j=i+1;j<prices.length; j++){
         if(prices[j]-prices[i]>0){
             pris.push(prices[j]-prices[i])
             for(var x=0;x<pris.length; x++){
                if(max<pris[i]){
                    max = pris[i]
                }
            }
        }
    }
}
console.log(max)

 };

 func()
 console.log("-----------------------------------")
 function fun() {
 if(prices == null || prices.length <= 1) return 0;
 let minBuy = prices[0];
 let profit = 0;
 for(let i = 1; i < prices.length; i++) {
     minBuy = Math.min(minBuy, prices[i]);
     profit = Math.max(profit, prices[i] - minBuy);
 }
 console.log(profit);
}
fun()*/
console.log("--------------------------------")

const nums = [1,2,3,1]
function fun() {
    const a = nums.sort((a,b) => b-a);
    for(let i =0; i<nums.length; i++){
        if(nums[i] == nums[i+1]){
            console.log( true)
        } 
        
    }
    console.log( false)
    console.log( a)
};

fun()