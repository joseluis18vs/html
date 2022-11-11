

// console.log(curve.attributes);
console.log(curve.attributes.d.nodeValue);
// console.log(curveValues);


// Functions
let updateSimpleInputs = (param, arrIndex) => {
    let curveValues = curve.attributes.d.value;
    let arrayValues = firstLayerSplit(curveValues);
    param.value = arrayValues[arrIndex];
}

let updateSecondInput = (param, arrIndex) => {
    let curveValues = curve.attributes.d.value;
    array = firstLayerSplit(curveValues);
    layer2 = secondLayerSplit(array)
    param.value = parseInt(layer2[arrIndex]);
}

// Splits
let firstLayerSplit = (string) => {
    let array = string.split(" ")
    return array;
}

let secondLayerSplit = (arrLayerOne) =>{
    let array = arrLayerOne[2].split("c")
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
        stringVal += (array[i]+" ")
    }
    return stringVal;
}

let secondLayerAssembler = (array, arrIndex, paramValue) => {
    array[arrIndex] = paramValue;
    // return array[0]+"c"+array[1]; 
}

// inputs process
param1v.addEventListener('change', ()=>{
    let curveValues = curve.attributes.d.value;
    array = firstLayerSplit(curveValues);
    updateArr = firstParamUpdate(array);
    stringParam = firstLayerAssembler(updateArr);
    curve.attributes.d.value = stringParam;
});

param2v.addEventListener('change', ()=>{
    let curveValues = curve.attributes.d.value;
    layerOneArray = firstLayerSplit(curveValues);
    layertwoArray = secondLayerSplit(layerOneArray);
    seconLayerUpdate = secondLayerAssembler(layertwoArray, 0, param2v.value);
    layerOneArray[2] = seconLayerUpdate;
    stringParam = firstLayerAssembler(layerOneArray);
    curve.attributes.d.value = stringParam;
});

param3v.addEventListener('change', ()=>{
    let curveValues = curve.attributes.d.value;
    layerOneArray = firstLayerSplit(curveValues);
    layertwoArray = secondLayerSplit(layerOneArray);
    seconLayerUpdate = secondLayerAssembler(layertwoArray, 1, param3v.value);
    layerOneArray[2] = seconLayerUpdate;
    stringParam = firstLayerAssembler(layerOneArray);
    curve.attributes.d.value = stringParam;
});

// Instances
updateSimpleInputs(param1v, 1);
updateSecondInput(param2v, 2);
updateSecondInput(param3v, 3);