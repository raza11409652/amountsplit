const record = require('./data.json')
const writeToCsv = require('objects-to-csv')
const { populateTransaction , isValidRange } = require('./utils')

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


var result = [] 

for (let index = 0; index < sorted.length; index++) {
    const element = sorted[index];
    const individual = populateTransaction(element , expendedBy)
    // console.log(individual);
    individual.forEach(item=>{
        result.push(item)
    })
    
}

/**
 * result array is containg all the transaction with date and individual amount 
 * with expended by 
 */

/**
 * @todo need to group by 1 weak
 * transaction 
 */


var transactionDates = [] 
result.forEach(element=>{
    transactionDates.push(element.date) 
})
transactionDates  = transactionDates.filter((item, i, ar) => ar.indexOf(item) === i)
// console.log(transactionDates);

// const _data = [] ; 

var startDate = transactionDates[0]
var endDate = transactionDates[transactionDates.length-1]
// console.log(n , endDate);
startDate = new Date(startDate)
startDate  =new Date( startDate.setDate(startDate.getDate() + 1))
endDate = new Date(endDate)
endDate = new Date(endDate.setDate(endDate.getDate() +1 ))

// console.log(result);
// console.log(startDate , endDate);



var  getDateArrays = (startDate , endDate) =>{
    for (var arr=[] , dt = new Date(startDate) ; dt<=endDate ; dt.setDate(dt.getDate()+1)) {
         arr.push(new Date(dt));
        
    }
    return arr 
}

const dates = getDateArrays(startDate   , endDate)
const weekDays =  [] 
// console.log(dates);
for (let index = 0; index < dates.length; index++) {
    // const element = array[index];
    // const element = dates[]
    if(index %7==0){
        const element = dates[index]
        // console.log(element);
        // console.log(index);
        weekDays.push(element)
    }
    
}

// console.log(weekDays);


// for (let index = 0; index < transactionDates.length; index++) {
//     const element = transactionDates[index];
//     // console.log(element);
    
// }
var finalResult = []
for (let i = 0; i < transactionDates.length; i++) {
    const element = transactionDates[i];
    // console.log(element);
    // if(element===)
    for (let j = 0; j < expendedBy.length; j++) {
        const user = expendedBy[j];
        // console.log(element , user);
        result.forEach(item=>{
            if(item.expendedby===user && item.date ===element && item.user !==user){
                // console.log(item);
                finalResult.push(item)
            }
        })
        
    }
    
}

var firstTransaction = weekDays[0]
var secondTransaction = endDate
// console.log(firstTransaction);
var groupedTrans = [] ;
var temp = [] 
var tempB = [] ; 
finalResult.forEach(item=>{
    // console.log(item.date);
    var date =new Date(item.date)
   
    date = new Date(date.setDate(date.getDate() ))
    console.log(date);
    if(date<firstTransaction){
        temp.push({  user:item.user , action:"owes" ,  expendedBy:item.expendedby ,amount: item.amount  })
    }else{
        tempB.push({ user:item.user  , action:"owes", expendedBy:item.expendedby  ,amount:item.amount ,})
    }

})

// groupedTrans = tempB + temp

// console.log(temp , tempB);



temp = temp.sort((a,b)=>{
    if(a.user>b.user) return 1
else return -1
})
tempB = tempB.sort((a,b)=>{
    if(a.user>b.user) return 1
else return -1
})

var csv = new writeToCsv(temp)
csv.toDisk('./output.csv')

csv = new writeToCsv([{}])
csv.toDisk('./output.csv' , {append:true})
csv = new writeToCsv(tempB)
csv.toDisk('./output.csv' , {append:true})
console.log('transaction on ' + firstTransaction);
console.log(temp);
console.log('transaction on ' + secondTransaction);
console.log(tempB);

console.log(`-------------------- Till transaction grouped basis of transaction date that is 7th day from starting date---------------------`);
// console.log(temp);


// temp.forEach(data=>{
//     // console.log(data);
    
// })
var users = expendedBy
//create relation table
var relation = [] 

for (let index = 0; index < expendedBy.length; index++) {
    const element = expendedBy[index];
    for (let j = 0; j < users.length; j++) {
        const user = users[j];
        if(element!==user){
            const item = {
                payable:user , 
                expendedBy:element
            }
            relation.push(item)
            // console.log(relation);
        }
        
    }
    
}

console.log(relation);
// for (let index = 0; index < expendedBy.length; index++) {
//     const element = expendedBy[index];
//     // const nextUser = expendedBy[index+1]
//     // // console.log(element);
//     // if( nextUser!==undefined || nextUser!==null ){
//     //     console.log(element , nextUser);
//     // }
//     for (let j = 0; j < users.length; j++) {
//         const nextUser = users[j];
//         if(element!==nextUser){
//             // console.log(element , nextUser);
//             var total  = 0 
//             temp.forEach(item=>{

//                 // console.log(item);
//                 if(item.user ===nextUser && item.expendedBy===element){
//                     console.log(item);
//                     total = item.amount
//                     console.log(total);

//                 }
//             })
//         }
        
//     }
// }


const tempArray = [] 
for (let index = 0; index < relation.length; index++) {
    const element = relation[index];
    // console.log(element);
    temp.forEach(item=>{
        if(item.expendedBy === element.expendedBy &&  item.user ===element.payable){
            // console.log(element);
            console.log(item.amount)
            const  single = {
                amount : item.amount ,
                relation :element
            }
            tempArray.push(single)
            // console.log(te);
        }
    })
    
}
for (let index = 0; index < relation.length; index++) {
    const element = relation[index];
    // console.log(element);
    tempB.forEach(item=>{
        if(item.expendedBy === element.expendedBy &&  item.user ===element.payable){
            // console.log(element);
            // console.log(item.amount)
            const  single = {
                amount : item.amount ,
                relation :element
            }
            tempArray.push(single)
            // console.log(te);
        }
    })
    
}
tempArray.forEach(item=>{
    relation.forEach(data=>{
        if(data.expendedBy === item.relation.expendedBy && data.payable ===item.relation.payable){
            console.log(item);
        }
    })
})

// // console.log(tempArray);
// for (let index = 0; index < relation.length; index++) {
//     const element = relation[index];
//     // console.log(element);
//     var total = 0 
   
//     console.log(total);
    
// }

// var users  = expendedBy
// // for (let index = 0; index < temp.length; index++) {
// //     const element = temp[index];
//     // console.log(element);
//     for (let k = 0; k < expendedBy.length; k++) {
//         const expendedby = expendedBy[k];
//         // console.log(expendedby);
//         for (let j = 0; j < users.length; j++) {
//             const currentUser = users[j];
//             var total = 0 
//             temp.forEach(item=>{
//                 if(expendedby!==currentUser &&item.expendedby===expendedby && item.user ===currentUser ){
//                     // console.log(item);
//                     // var total =
                
//                 }
//             })
//         }
        
//     }
    
// }

// console.log(finalResult);


/**
 * Create copy for user
 * we have expended user and total user will be same
 */


// var users = expendedBy

// // console.log(expendedBy);
// // console.log(users)
// finalResult = finalResult.sort((a,b)=>{
//     if(a.expendedby>b.expendedby) return 1
//     return -1 
// })
// // console.log(finalResult);
// var temp = []
// for (let k = 0; k < expendedBy.length; k++) {
//     const _expendedBy = expendedBy[k];
//     var currentUser = null 
//     var total = 0  ; 
//     for (let l = 0; l < users.length; l++) {
//         const _currentUser = users[l];
//         currentUser = _currentUser
//         if(_expendedBy !== _currentUser){
//             finalResult.forEach(item=>{
//                 if(item.expendedby===_expendedBy && item.user ===_currentUser){
//                     // console.log(ite);
//                     total = total + parseFloat(item.amount)
//                 }
//             })
//         }
//         const item = {
//             total :Math.abs(total) , 
//             user:_currentUser , 
//             expendedBy:_expendedBy
//         }
//         temp.push(item)
//         // console.log();
       
        
//     }
//     // console.log(total   , currentUser , _expendedBy);
//     // console.log(total , _expendedBy , _currentUser);

    
// }
// // let position = 0 ;
// var resultArray = [] 
// temp.forEach(item=>{
//     if(item.user !== item.expendedBy){
//         // temp.pop(position)
//         resultArray.push(item)
//     }
//     // position ++ ; 
// })


// console.log(resultArray);

// var outputArray = [] 
//     for (let index = 0; index < expendedBy.length; index++) {
//         const expendedby = expendedBy[index];
//         for (let index = 0; index < users.length; index++) {
//             const user = users[index];
//             resultArray.forEach(item=>{
//                 var amountA = 0 ,amountB  = 0 
//                 if(expendedby !==user && item.expendedBy === expendedby && item.user ===user){
//                     // console.log(item);
//                     console.log("Expended By"   , expendedby , "amoubt" , item.total , "On" , user);
    
//                     amountA = item.total 
//                 } 
//                 if(expendedby !==user && item.expendedBy === user && item.user ===expendedby){
//                     // console.log(item);
//                     console.log("Expended by"   , user , "amoubt" , item.total , "On" , expendedby);
//                     amountB = item.total
    
//                 }
//                 // console.log(amountA - amountB);
//                 const result  =amountA - amountB  ;
//                 if(result != 0 ) {
//                     const  _i = {
//                         amount:result , 
//                         expendedBy : expendedby , 
//                         payable:user
//                     }
//                     // console.log(_i);

//                     outputArray.push(_i)
//                 }
//             })
             
//         }
        
//     }

//  var output = [] 
    
// for (let index = 0; index < outputArray.length; index++) {
//     const element = outputArray[index];
//     const next  = outputArray[index  +1]


//     //
//     if(next!==undefined){
//         if(element.expendedBy ===next.expendedBy && element.payable ===next.payable){
//             // console.log(element);
//             console.log(element , next);
//             const total = element.amount  +    next.amount 
//             console.log(total);
//             const item = {
//                 amount:total , 
//                 expendedBy :element.expendedBy ,
//                 payable:element.payable
//             }
//             output.push(item)
//         }else{
//             // output.push(element)
//         }
//     }
    
// }

// console.log(output);