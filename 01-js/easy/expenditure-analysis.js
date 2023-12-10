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

function calculateTotalSpentByCategory(transactions) {

    function searchObj(list,target){
      for (let i = 0; i < list.length; i++) {
          if (list[i].category == target.category){
            return i
          }
      }
      
      return -1
    }

  let total = []
  for (txn of transactions){
    let search = searchObj(total,txn)
    if (search == -1){
      total.push({category:txn.category, totalSpent:txn.price})
    }else{
      total[search].totalSpent += txn.price 
    }
  }
  
  console.log(total);
  return total
}

module.exports = calculateTotalSpentByCategory;
