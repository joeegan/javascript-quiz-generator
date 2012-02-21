var constructs = {
    fnWrappers: {
        fnDeclaration: function() {
            return ["function() {", "}"]
        },
        namedFnDeclaration: function() {
            return ["function x () {", "}"]
        }
    },
    variableAssignments: {
        standard: function(){
            return ["var y = 1;"];
        },
        undeclared: function(){
            return ["y = 1;"];
        }
    }
};

/*
 (function(y) { // anonymous self executing function declaration
 })(x);

 var x = function(y) { // named, assigned function expression
 };
 */

