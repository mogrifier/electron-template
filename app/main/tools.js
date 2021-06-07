const fs = require("fs");


function executeFunctionByName(functionName, context /*, args */) {
    var args = Array.prototype.slice.call(arguments, 2);
    var namespaces = functionName.split(".");
    var func = namespaces.pop();
    for (var i = 0; i < namespaces.length; i++) {
        context = context[namespaces[i]];
    }
    return context[func].apply(context, args);
}
 

//put each function for manipulating wavetables, samples, and image files in here

function convert32_to_8bit(){

}

function convert16_to_8bit(){

}

function convert_to_hfe() {

}

function write_image() {

}

