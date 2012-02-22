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
    },
    assertions: {
        equal: function(){
            return ["assertTrue(x == y);"];
        },
        notEqual: function(){
            return ["assertTrue(x != y);"];
        },
        equalWithType: function(){
            return ["assertTrue(x === y);"];
        },
        notEqualWithType: function(){
            return ["assertTrue(x !== y);"];
        }
    }
};

/*
 (function(y) { // anonymous self executing function declaration
 })(x);

 var x = function(y) { // named, assigned function expression
 };
 */

