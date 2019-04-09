for (var i = 0; i < questions.length; i++) {
    $("#questionBox").append("<br><div>" + questions[i].question + "</div>");
    for (var j = 0; j < questions[i].answers.length; j++) {
        $("#questionBox").append('<input type="radio" name=' + i + ' class="choice" value=' + questions[i].answers[j] + '>' + questions[i].answers[j]+ "<br>");
    }
}


for (var j = 0; j < questions[i].answers.length; j++) {
    var answerInput = $('<input>');
    answerInput.attr("type", "radio")
    answerInput.attr("name", i)
    answerInput.attr("class","choice")
    answerInput.attr("value", correctAnswer )
    $('#questionBox').append(answerInput);
}