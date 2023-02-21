
const slicer = require('./Slicer');
console.log(process.argv);
const discra = process.argv[2]
const nameFunc = process.argv[3]


// slicer..printArray(args);
// console.log(multiple(...args)); // הופכים מערך לאיברים בודדים



function NameFunction(discra, nameFunc) {
    console.log(discra, nameFunc);
    if (nameFunc === "cub")
        slicer.cub(discra)
    else
        if (nameFunc === "star")
            slicer.star(discra)
        else
            if (nameFunc === "pasim")
                slicer.pasim(discra)
}



NameFunction(discra, nameFunc)