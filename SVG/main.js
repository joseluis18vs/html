let curve = document.querySelector("#curve");
let param1v = document.querySelector("#valueParam1"); 
let param2v = document.querySelector("#valueParam2"); 
let param3v = document.querySelector("#valueParam3"); 
let param4v = document.querySelector("#valueParam4"); 
let param5v = document.querySelector("#valueParam5"); 
let param6v = document.querySelector("#valueParam6"); 
let param7v = document.querySelector("#valueParam7"); 
let param8v = document.querySelector("#valueParam8"); 
console.log(curve.attributes.d.nodeValue);

// Functions
let setDefaultInputsValues = (param, arrIndex) => {
    param.value = splitParameters(curve.attributes.d.value)[arrIndex];
}

let splitParameters = (string) => {
    return string.split(" ");
}

// Instances
setDefaultInputsValues(param1v, 1);
setDefaultInputsValues(param2v, 2);
setDefaultInputsValues(param3v, 4);
setDefaultInputsValues(param4v, 5);
setDefaultInputsValues(param5v, 6);
setDefaultInputsValues(param6v, 7);
setDefaultInputsValues(param7v, 8);
setDefaultInputsValues(param8v, 9);