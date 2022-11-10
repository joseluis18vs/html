let param1v = document.querySelector("#valueParam1"); 
let param2v = document.querySelector("#valueParam2"); 
let curve = document.querySelector("#curve");

// console.log(curve.attributes);
// console.log(curve.attributes.d.nodeValue);
// console.log(curveValues);


// Functions
let updateSimpleInputs = (param, arrIndex) => {
    let curveValues = curve.attributes.d.value;
    let arrayValues = firstLayerSplit(curveValues);
    console.log(arrayValues[arrIndex])
    param.value = arrayValues[arrIndex];
}

// Splits
let firstLayerSplit = (string) => {
    let array = string.split("  ")
    return array;
}

// Updates
let firstParamUpdate = (array) => {
    array[1] = param1v.value;
    return array;
}

// Assembler
let firstLayerAssembler = (array) => {
    let stringVal = "";
    for (var i = 0; i < array.length; i++) {
        stringVal += (array[i]+"  ")
    }
    return stringVal;
}

// inputs process
param1v.addEventListener('change', ()=>{
    let curveValues = curve.attributes.d.value;
    array = firstLayerSplit(curveValues);
    updateArr = firstParamUpdate(array);
    stringParam = firstLayerAssembler(updateArr);
    curve.attributes.d.value = stringParam;
});

// Instances
updateSimpleInputs(param1v, 1);