//
Shopping cart - has items, each item can have promotions attached.
Shopping cart has at least 1 item, no max.

{
item:'name',
instock:true,
promotion:"15%",
owner:"id",
}

{
    shoppingCart: [
        {   
            itemId: "1",
            price: "12",
            instock: true,
            promotions: [
                {   
                    "id": "promo1",
                    definition: "2 items in one cart"
                },
                {   
                    "id": "promo2",
                    definition: "20% off if $25 spent"
                }            
            ]
        },
    ]
}

shoppingCart[0].promotions[]

const order = {
    items: [
      { id: '1111', promotions: ['9999', '8888'] },
      { id: '2222', promotions: ['9999'] },
      { id: '3333', promotions: ["9999"] }
    ]
   };

const promo = {
    "9999": ["1111","3333"],
    "8888": []
}
//    first function that takes shopping cart items as an input as well as a promotion id, in return give a list of item ids that have that list applied.
// id is gonna be a string
// ask if arr can be undefined or null
function cartPromoItems(items, id) {
    let result = [];
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        for (let j=0; j < item.promotions.length; j++) {
            const promotion = item.promotions[j];
            if (promotion === id) {
                result.push(item.id);
            }
        }
    }
    return result;
}

// new function, for all of the promotions applied in a shopping cart, which items are attached to each promotion.


function groupItemsByPromotionId(items) {
    let result = {};
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        for (let j=0; j < item.promotions.length; j++) {
            //if there is a new promotion id, dne in result, create it.
            const promotion = item.promotions[j];
            if (!result[promotion]) {
                result[promotion] = [item.id];
            } else {
                result[promotion].push(item.id);
            }

            // if the promotion id exists, add it to the value of the promo key.
        }
    }
    return result;
    //iterate through items -> promotions for each new promotion, add new key
}

// class Array {
//     constructor() {
//         this.array = [];
//     }
//     push(item) {
//         this.array[this.array.length + 1] = item;
//     }
//     pop {
//         this.array[this.array.length - 1] = undefined;
//         // remove entry from array
//     }
// }

// new Array(); // []


// class LinkedListNode {
//     constructor(nextNode) {
//         this.nextNode = nextNode;
//     }
// }

// const firstNode = new LinkedListNode();
// const secondNode = new LinkedListNode(firstNode);

// class TreeNode {
//     constructor(leftChild, rightChild) {
//         this.leftChild = leftChild;
//         this.rightChild = rightChild;
//     }

//     removeLeftChild() {
//         this.leftChild = undefined;
//     }

//     removeRightChild()
// }

// const thirdLayerNode = new TreeNode();
// const leftNode = new TreeNode(thirdLayerNode);
// const rightNode = new TreeNode();
// const root = new TreeNode(leftNode, rightNode);

// root.removeLeftChild();

//            root
//     leftNode  rightNode
// thirdLayerNode


// function TreeNode(leftChild) {
//     this.leftChild = leftChild;
//     this.rightChild = rightChild

//     return this;
// }

// class Stack {

// }

// [].push()
// [].unshift()
