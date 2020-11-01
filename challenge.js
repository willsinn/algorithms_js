given an array of [1, 3, 1, 4, 5, 2], return a new array with deduplicated and sorted entries


//1. can the array be empty?
//2. limit to the size of the array? could affect performance
//3. if there can be negative, null & undef values and how should they be interpreted in the solution


const deduplicatedArray = (d) => {
    //1. convert the sorted array to js object Set to deduplicate entries
    const set = new Set(d);

    //2. sort the array by entry
    const newArray = []; // 45345345

    for (const value of set) {
        newArray.push(value);
    }
    newArray.sort();
    return newArray;
    O(3n)

    //3. return new array 

    //To optimize 

    const sortedArray = d.sort();
    const deduplicatedArray = [];

    for (let i = 0; i < sortedArray.length; i++ ) {
        if (i === 0) {
            deduplicatedArray.push(sortedArray[i]);
        } else if (sortedArray[i - 1] === sortedArray[i]) {
            continue;
        }
    }

    return deduplicatedArray;

    O(2n)
}



let myName = "Rob"; // x38ug98jeg

function changeName(name) { // jfdsaf92jfdf
    // "Rob"
    name = "Will";
    console.log(name) // "Will"
}

changeName(myName);

console.log(myName) // Rob

==========================
const myCar = { // dfahufhish2984
    color: "red",
    make: "Ford"
}

function modifyCar(car) { // dfahufhish2984
    const myCar = {
        ...car
    };
    myCar.color = "blue"
}

modifyCar(myCar) // { color: "blue", make: "Ford" }
