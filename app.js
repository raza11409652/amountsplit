// /**
//  * Read json file 
//  */


// const csvToList  =require('objects-to-csv')
// // const fs = require('fs')
// // const obj
// const input = require('./input.json')
// // console.log(input);

// var totalAmount  = 0 ;
// var amountA = 0 , amountB = 0 , amountC = 0  , amountD = 0, amountE=0 ; 

// var amtATA = 0 , amtATB = 0 , amtATC = 0 , amtATD  = 0 , amtATE = 0 ;
// var amtBTA = 0 , amtBTB = 0 , amtBTC = 0 , amtBTD  = 0 , amtBTE = 0 ;
// var amtCTA = 0 , amtCTB = 0 , amtCTC = 0 , amtCTD  = 0 , amtCTE = 0 ;

// var amtDTA = 0 , amtDTB = 0 , amtDTC = 0 , amtDTD  = 0 , amtDTE = 0 ;
// var amtETA = 0 , amtETB = 0 , amtETC = 0 , amtETD  = 0 , amtETE = 0 ;




// const listA = [] ; 


// try{
//     for(let i=0;i<input.length ; i++){
//         const element  = input[i]
//         //get date
//         const keys = Object.keys(element)
//         const _date = new Date(keys[0])
//         console.warn(_date);

//         const values = Object.values(element)
//         // console.warn(values);
//         for(let j = 0 ;j<values.length ; j++){
//             const transaction = values[j]
//             // console.warn(transaction);
//             const transactedBy = Object.keys(transaction)
//             const transactionValues  =Object.values(transaction)

//             /**
//              * transactedBy can be grouped
//              */
//             for(let k=0;k<transactedBy.length ; k++){
//                 // console.warn(transactedBy[k]);
//                 const splitArray = transactionValues[k].expense.split
//                 const amountNeedToSplit = transactionValues[k].expense.amount
                
//                 if(transactedBy[k]=="A"){
//                     amountA = amountA + transactionValues[k].expense.amount 
//                     //now get  split array element
//                     const individualAmount = amountNeedToSplit /splitArray.length
//                     console.warn(individualAmount);
//                     for (let index = 0; index < splitArray.length; index++) {
//                         const element = splitArray[index];
//                         console.warn(element);
//                         if(element=="A"){
//                             amtATA = amtATA +individualAmount

//                         }
                        
//                         if(element=="B"){
//                             amtATB = amtATB +individualAmount
//                         }

//                         if(element=="C"){
//                             amtATC = amtATC +individualAmount
//                         }
//                         if(element=="D"){
//                             amtATD = amtATD +individualAmount
//                         }

//                         if(element=="E"){
//                             amtATE = amtATE +individualAmount
//                         }
                        
//                     }

//                 }
//                 if(transactedBy[k]=="B"){
//                     amountB = amountB +transactionValues[k].expense.amount 
//                     const individualAmount = amountNeedToSplit /splitArray.length
//                     console.warn(individualAmount);
//                     for (let index = 0; index < splitArray.length; index++) {
//                         const element = splitArray[index];
//                         console.warn(element);
//                         if(element=="A"){
//                             amtBTA = amtBTA +individualAmount
//                             // var item  = {
//                             //     "person":element,
//                             //     "amount":amtBTA,
//                             //     "reciever":"B"
                                
//                             // }
//                             // listA.push(item)
//                         }
                        
//                         if(element=="B"){
//                             amtBTB = amtBTB +individualAmount
//                         }

//                         if(element=="C"){
//                             amtBTC = amtBTC +individualAmount
//                         }
//                         if(element=="D"){
//                             amtBTD = amtBTD +individualAmount
//                         }

//                         if(element=="E"){
//                             amtBTE = amtBTE +individualAmount
//                         }
                        
//                     }
//                 }
//                 if(transactedBy[k]=="C"){
//                     amountC = amountC +transactionValues[k].expense.amount 


//                     const individualAmount = amountNeedToSplit /splitArray.length
//                     // console.warn(individualAmount);
//                     for (let index = 0; index < splitArray.length; index++) {
//                         const element = splitArray[index];
//                         // console.warn(element);
//                         if(element=="A"){
//                             amtCTA = amtCTA +individualAmount
//                             // listA.push(amtCTA)
//                             // var item  = {
//                             //     "person":element,
//                             //     "amount":amtCTA,
//                             //     "reciever":"C"
                                
//                             // }
//                             // listA.push(item)
//                         }
                        
//                         if(element=="B"){
//                             amtCTB = amtCTB +individualAmount
//                         }

//                         if(element=="C"){
//                             amtCTC = amtCTC +individualAmount
//                         }
//                         if(element=="D"){
//                             amtCTD = amtCTD +individualAmount
//                         }

//                         if(element=="E"){
//                             amtCTE = amtCTE +individualAmount
//                         }
                        
//                     }
//                 }
//                 if(transactedBy[k]=="D"){
//                     amountD = amountD +transactionValues[k].expense.amount 

                    
//                     const individualAmount = amountNeedToSplit /splitArray.length
//                     // console.warn(individualAmount);
//                     for (let index = 0; index < splitArray.length; index++) {
//                         const element = splitArray[index];
//                         // console.warn(element);
//                         if(element=="A"){
//                             amtDTA = amtDTA +individualAmount
//                             // listA.push(amtDTA)
//                             // var item  = {
//                             //     "person":element,
//                             //     "amount":amtDTA,
//                             //     "reciever":"D"
                                
//                             // }
//                             // listA.push(item)
//                         }
                        
//                         if(element=="B"){
//                             amtDTB = amtDTB +individualAmount
//                         }

//                         if(element=="C"){
//                             amtDTC = amtDTC +individualAmount
//                         }
//                         if(element=="D"){
//                             amtDTD = amtDTD +individualAmount
//                         }

//                         if(element=="E"){
//                             amtDTE = amtDTE +individualAmount
//                         }
                        
//                     }
//                 }
//                 if(transactedBy[k]=="E"){
//                     amountE = amountE +transactionValues[k].expense.amount 


//                     const individualAmount = amountNeedToSplit /splitArray.length
//                     // console.warn(individualAmount);
//                     for (let index = 0; index < splitArray.length; index++) {
//                         const element = splitArray[index];
//                         // console.warn(element);
//                         if(element=="A"){
//                             amtETA = amtETA +individualAmount
//                             // listA.push(amtETA)
//                             // var item  = {
//                             //     "person":element,
//                             //     "amount":amtETA,
//                             //     "reciever":"E"
                                
//                             // }
//                             // listA.push(item)
//                         }
                        
//                         if(element=="B"){
//                             amtETB = amtETB +individualAmount
//                         }

//                         if(element=="C"){
//                             amtETC = amtETC +individualAmount
//                         }
//                         if(element=="D"){
//                             amtETD = amtETD +individualAmount
//                         }

//                         if(element=="E"){
//                             amtETE = amtETE +individualAmount
//                         }
                        
//                     }
//                 }
//                 // if(transactedBy[k]=="A"){
//                 //     amountA = amountA +transactionValues[k].expense.amount 
//                 // }
//                 // console.warn(transactionValues[k].expense.amount);
//                 // console.warn(transactionValues[k].expense.split);

//                 totalAmount =totalAmount + transactionValues[k].expense.amount
            
//             }

//         }


//     }



//     // listA.push()

    
//     var item = null ; 

//     console.warn("Total amount expended" , totalAmount);
//     console.warn("Total amount expended by A" , amountA);
//     console.warn("Total amount expended by B" , amountB);
//     console.warn("Total amount expended by C" , amountC);
//     console.warn("Total amount expended by D" , amountD);
//     console.warn("Total amount expended by E" , amountE);

//     console.log(`''''''''''''''''''''''''''''''''''''''''''''''''''`);

//     // console.log("Amount by A");

//     // console.log("Amount by A" ,amtATA);
//     // console.log("Amount by B" ,amtATB);
//     // console.log("Amount by C" ,amtATC);
//     // console.log("Amount by D" ,amtATD);
//     // console.log("Amount by E" ,amtATE);


//     // console.warn(`--------------------------------------------------------------------`);

//     // console.log('for B transaction');

//     item = {
//         "people":"A",
//         "action":amtBTA<0?"Will recieve":"Owes",
//         reciever:"B",
//         amount:Math.abs(amtBTA),
//     }
//     listA.push(item)
//     item = {
//         "people":"A",
//         "action":amtCTA<0?"Will recieve":"Owes",
//         reciever:"C",
//         amount:Math.abs(amtCTA),
//     }
//     listA.push(item)
 
//     item = {
//         "people":"A",
//         "action":amtDTA<0?"Will recieve":"Owes",
       
//         reciever:"D",
//         amount:Math.abs(amtDTA),
//     }
//     listA.push(item)

//     item = {
//          "people":"A",
//          "action":amtDTA<0?"Will recieve":"Owes",
//          reciever:"E",
//          amount:Math.abs(amtETA)
//     }
//     listA.push(item)


//     /**--------------------------------------------------------------------------------- */
    
//     item = {
//         "people":"B",
//         amount:Math.abs(amtATB),
//         reciever:"A",
//         "action":amtATB<0?"Will recieve":"Owes",

//     }
//     listA.push(item)
    
//     item = {
//         "people":"B",
//         amount:Math.abs(amtCTB),
//         reciever:"C",
//         "action":amtCTB<0?"Will recieve":"Owes",
        
//     }
//     listA.push(item)

    
//     item = {
//         "people":"B",
//         amount:Math.abs(amtDTB),
//         reciever:"D",
//         "action":amtDTB<0?"Will recieve":"Owes",

//     }
//     listA.push(item)

//     item = {
//         "people":"B",
//         amount:Math.abs(amtETB),
//         reciever:"E",
//         "action":amtETB<0?"Will recieve":"Owes",

//     }
//     listA.push(item)

//     /**
//      * 
//      * 
//      */

//      /**--------------------------------------------------------------------------------- */
    
//      item = {
//         "people":"C",
//         amount:Math.abs(amtATC),
//         reciever:"A",
//         "action":amtATC<0?"Will recieve":"Owes",
//     }
//     listA.push(item)
    
//     item = {
//         "people":"C",
//         amount:Math.abs(amtBTC),
//         reciever:"B",
//         "action":amtBTC<0?"Will recieve":"Owes",
        
//     }
//     listA.push(item)

    
//     item = {
//         "people":"C",
//         amount:Math.abs(amtDTC),
//         reciever:"D",
//         "action":amtDTC<0?"Will recieve":"Owes",

//     }
//     listA.push(item)

//     item = {
//         "people":"C",
//         amount:Math.abs(amtETC),
//         reciever:"E",
//         "action":amtETC<0?"Will recieve":"Owes",

//     }
//     listA.push(item)




//      /**--------------------------------------------------------------------------------- */
    
//      item = {
//         "people":"D",
//         amount:Math.abs(amtATD),
//         reciever:"A",
//         "action":amtATD<0?"Will recieve":"Owes",


//     }
//     listA.push(item)
    
//     item = {
//         "people":"D",
//         amount:Math.abs(amtBTD),
//         reciever:"B",
//         "action":amtBTD<0?"Will recieve":"Owes",


//     }
//     listA.push(item)

    
//     item = {
//         "people":"D",
//         amount:Math.abs(amtCTD),
//         reciever:"C",
//         "action":amtCTD<0?"Will recieve":"Owes",

//     }
//     listA.push(item)

//     item = {
//         "people":"D",
//         amount:Math.abs(amtETD),
//         reciever:"E",
//         "action":amtETD<0?"Will recieve":"Owes",

        
//     }
//     listA.push(item)

//      /**--------------------------------------------------------------------------------- */
    
//      item = {
//         "people":"E",
//         amount:Math.abs(amtATE),
//         reciever:"A",
//         "action":amtATE<0?"Will recieve":"Owes",

//     }
//     listA.push(item)
    
//     item = {
//         "people":"E",
//         amount:Math.abs(amtBTE),
//         reciever:"B",
//         "action":amtBTE<0?"Will recieve":"Owes",


//     }
//     listA.push(item)

    
//     item = {
//         "people":"E",
//         amount:Math.abs(amtCTE),
//         reciever:"C",
//         "action":amtCTE<0?"Will recieve":"Owes",

//     }
//     listA.push(item)

//     item = {
//         "people":"E",
//         amount:Math.abs(amtDTE),
//         reciever:"D",
//         "action":amtDTE<0?"Will recieve":"Owes",

//     }
//     listA.push(item)









//     // console.log("Amount by A" ,amtBTA);
//     // console.log("Amount by B" ,amtBTB);
//     // console.log("Amount by C" ,amtBTC);
//     // console.log("Amount by D" ,amtBTD);
//     // console.log("Amount by E" ,amtBTE);


//     // console.log(`------------------------------------------------------------------------------`);

    
//     // console.log('for C transaction');

//     // console.log("Amount by A" ,amtCTA);
//     // console.log("Amount by B" ,amtCTB);
//     // console.log("Amount by C" ,amtCTC);
//     // console.log("Amount by D" ,amtCTD);
//     // console.log("Amount by E" ,amtCTE);



//     // console.log(`------------------------------------------------------------------------------`);

    
//     // console.log('for D transaction');

//     // console.log("Amount by A" ,amtDTA);
//     // console.log("Amount by B" ,amtDTB);
//     // console.log("Amount by C" ,amtDTC);
//     // console.log("Amount by D" ,amtDTD);
//     // console.log("Amount by E" ,amtDTE);

//     // console.warn(`------------------------------------------------`);

    
//     // console.log(`------------------------------------------------------------------------------`);

    
//     // console.log('for E transaction');
 
//     // console.log("Amount by A" ,amtETA);
//     // console.log("Amount by B" ,amtETB);
//     // console.log("Amount by C" ,amtETC);
//     // console.log("Amount by D" ,amtETD);
//     // console.log("Amount by E" ,amtETE);



//     //console.log(listA);
//     /**
//      * Write into csv file
//      */

//     const csv = new csvToList(listA)

//     csv.toDisk('./output.csv' , {append:false})






// }catch(E){
//     console.warn(E.message);
// }

// //end of the program



const record = require('./data.json')
const { populateTransaction } = require('./utils')

//sort the records according to date asc order
const sorted  =record.sort((a,b)=>{
    if(new Date(a.date)>new Date(b.date)) return 1 
    else return -1
})

//get list of person who is expending 
var expendedBy  = []
sorted.forEach(element=>{
    expendedBy.push(element.expendedby)
})

//This will have ditinct list of user 
expendedBy =  expendedBy.filter((item, i, ar) => ar.indexOf(item) === i).sort();

const totalUser = expendedBy.length



// console.log(totalUser);

/**
 * list of first 7 days
 */

for (let index = 0; index < sorted.length; index++) {
    const element = sorted[index];
    const individual = populateTransaction(element , expendedBy)
    console.log(individual);
    
}





