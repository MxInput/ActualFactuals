function showPreviousQuestions() {
    list = document.getElementById('previousQuestions')
    list.innerHTML = ''

    if (Object.keys(completed) > 0) {
        completed.forEach(function (item) {
            var option = document.createElement('option');
            option.value = item;
            list.appendChild(option);
        });
    }
}