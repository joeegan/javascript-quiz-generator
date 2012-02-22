function questionTagWrap(question) {
    return '<pre lang="javascript">' + question + '</pre>'
}

function makeQuestion(questionCode) {
    var fnWrapper = Utils.getRandomObjectMemberValue(constructs.fnWrappers)();
    var variableAssignment = Utils.getRandomObjectMemberValue(constructs.variableAssignments)();
    var assertion = Utils.getRandomObjectMemberValue(constructs.assertions)();
    questionCode += fnWrapper[0] += "\n";
    questionCode += "\t" + variableAssignment[0] + "\n";
    questionCode += "\t" + assertion[0] + "\n";
    questionCode += fnWrapper[1] + "\n";
    return questionCode;
}

function writeToDom (question, element){
    var el = element || document.body;
    el.innerHTML = questionTagWrap(question);
}

var question = "";
function init(){
    writeToDom(makeQuestion(question));
}

Utils.addLoadEvent(init);