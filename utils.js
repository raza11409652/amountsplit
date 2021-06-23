
const populateTransaction = (input , users)=>{
    const result = []  
    const amount = input.amount
    const totalUser = input.split.length
    const individualAmount = parseFloat(amount)  / totalUser
    for (let index = 0; index < users.length; index++) {
        const element = users[index];
        // console.log(element);
       const flag =  input.split.includes(element)   
    //    console.log(flag);
     if(flag){
        const item = {
            date:input.date,
            user:element ,
            amount:individualAmount,
            expendedby:input.expendedby
        }
        result.push(item)
        }
    }
    // console.log("\n");
    return result 
}

module.exports =  {populateTransaction}