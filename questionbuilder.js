function questionTagWrap(question) {
    return '<pre lang="javascript">' + question + '</pre>'
}

function makeQuestion(questionCode) {
    var fnWrapper = Utils.getRandomObjectMemberValue(constructs.fnWrappers)();
    var variableAssignment = Utils.getRandomObjectMemberValue(constructs.variableAssignments)();
    questionCode += fnWrapper[0];
    questionCode += variableAssignment[0];
    questionCode += fnWrapper[1];
    return questionCode;
}

function writeToDom (question, element){
    var el = element || document.body;
    el.innerHTML = questionTagWrap(question);
}

function init(){
    var question = "";
    writeToDom(makeQuestion(question));
}

Utils.addLoadEvent(init);