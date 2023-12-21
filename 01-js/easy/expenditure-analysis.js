/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 2,
    timestamp: 1656259600000,
    price: 20,
    category: 'Food',
    itemName: 'Burger',
  },
  {
    id: 3,
    timestamp: 1656019200000,
    price: 15,
    category: 'Clothing',
    itemName: 'T-Shirt',
  },
  {
    id: 4,
    timestamp: 1656364800000,
    price: 30,
    category: 'Electronics',
    itemName: 'Headphones',
  },
  {
    id: 5,
    timestamp: 1656105600000,
    price: 25,
    category: 'Clothing',
    itemName: 'Jeans',
  },
];

// variable declared

// let pF=0;
// let pE=0;
// let pC=0;

// function here

function calculateTotalSpentByCategory(transactions) {
  let myArr=[];
  let resultArr=[];
  for(i=0; i<transactions.length; i++){
    myArr.push(transactions[i]["category"]);
  }
  let uniqueArr=[...new Set(myArr)];
  console.log("my unique array is " + uniqueArr);
  for(i=0; i<uniqueArr.length; i++){
    resultArr.push({category:uniqueArr[i]})
  }
  let sums=0;
  let spend =[];
  for(i=0; i<uniqueArr.length; i++){
    transactions.forEach(element => {
      if(element.category == uniqueArr[i]){
        // console.log("hii"+ element.category);
        sums = sums + element["price"];
      }
    }
    );
    spend.push(sums);
  }
  for(i=0; i<spend.length-1; i++){
    for(j=i+1; j<spend.length; j++){
      spend[j] = spend[j] - spend[i];
    }
  }

  for(i=0; i<resultArr.length; i++){
    resultArr[i].totalSpent = spend[i];
  }

  console.log("array of spending is " + spend);
  return resultArr;


}


// calling.
const value = calculateTotalSpentByCategory(transactions);
console.log(value);

module.exports = calculateTotalSpentByCategory;
