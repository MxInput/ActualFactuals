var actual_pick
var pick

var context = {
    q1: {
        word: 'coyote',
        story: 'Male ___ swam 2 miles to Alcatraz Island, twice as far as biologists had expected',
        complete: 'Male coyote swam 2 miles to Alcatraz Island, twice as far as biologists had expected',
        site: 'The Associated Press'
    },
    q2: {
        word: 'Knight Rider',
        story: 'Museum’s ‘___ ___’ replica car got a speeding ticket. It hasn’t gone anywhere in years',
        complete: 'Museum’s ‘Knight Rider’ replica car got a speeding ticket. It hasn’t gone anywhere in years',
        site: 'The Associated Press'
    },
    q3: {
        word: 'Subway',
        story: 'For ___, A Ruling Not So Sweet. Irish Court Says Its Bread Isn’t Bread',
        complete: 'For Subway, A Ruling Not So Sweet. Irish Court Says Its Bread Isn’t Bread',
        site: 'NPR'
    },
    q4: {
        word: 'McDonald',
        story: 'Hilarious moment nine cars patiently sit in a backed-up ___’s drive-thru line on Christmas day not realizing the restaurant is CLOSED',
        complete: 'Hilarious moment nine cars patiently sit in a backed-up McDonald’s drive-thru line on Christmas day not realizing the restaurant is CLOSED',
        site: 'Daily Mail'
    },
    q5: {
        word: '10K',
        story: 'Minnesota boy accidentally wins ___ race after taking wrong turn in 5K race',
        complete: 'Minnesota boy accidentally wins 10K race after taking wrong turn in 5K race',
        site: 'FOX'
    },
    q6: {
        word: 'Cabbage Patch Kids',
        story: '’They’re not dolls, they’re babies!’: How the ___ ___ ___ caused a near-riot in the 1980s',
        complete: '’They’re not dolls, they’re babies!’: How the Cabbage Patch Kids caused a near-riot in the 1980s',
        site: 'BBC'
    },
    q7: {
        word: 'Red Square',
        story: 'Mathias Rust: German teenager who flew to ___ ___',
        complete: 'Mathias Rust: German teenager who flew to Red Square',
        site: 'BBC'
    },
    q8: {
        word: 'wolf',
        story: '"Monster ___" robots in high demand to scare off bears in Japan after record number of attacks',
        complete: '"Monster wolf" robots in high demand to scare off bears in Japan after record number of attacks',
        site: 'CBS'
    },
    q9: {
        word: 'Whale',
        story: 'Scientists Are Crafting Fake ___ Poop and Dumping It in the Ocean',
        complete: 'Scientists Are Crafting Fake Whale Poop and Dumping It in the Ocean',
        site: 'Smithsonian magazine'
    },
    q10: {
        word: 'Katy Perry',
        story: 'Australian designer ___ ___ wins trademark case against popstar ___ ___ in High Court',
        complete: 'Australian designer Katie Perry wins trademark case against popstar Katy Perry in High Court',
        site: 'ABC'
    },
    q11: {
        word: 'monkey',
        story: 'Cops investigating if Missouri foster mom traded a kid for a ___ to boost her exotic animal collection',
        complete: 'Cops investigating if Missouri foster mom traded a kid for a monkey to boost her exotic animal collection',
        site: 'Independent'
    },
    q12: {
        word: 'shoes',
        story: 'Mystery as hundreds of Victorian ___ wash up on beach',
        complete: 'Mystery as hundreds of Victorian shoes wash up on beach',
        site: 'BBC'
    },
    q13: {
        word: 'gorilla',
        story: 'Virginia zoo with no ___s in custody forced to deny rumors of escaped ___',
        complete: 'Virginia zoo with no gorillas in custody forced to deny rumors of escaped gorilla',
        site: 'New York Post'
    },
    q14: {
        word: 'fur',
        story: 'Woman claims she was kicked out of Manhattan bar for wearing real ___',
        complete: 'Woman claims she was kicked out of Manhattan bar for wearing real fur',
        site: 'Independent'
    },
    q15: {
        word: 'potatoes',
        story: 'Eggs are so expensive that some Americans are decorating ___ this Easter',
        complete: 'Eggs are so expensive that some Americans are decorating potatoes this Easter',
        site: 'CBC'
    },
    q16: {
        word: 'Pokemon cards',
        story: 'The yakuza have resorted to stealing ___ ___. Japan is worried about the next generation of gangsters',
        complete: 'The yakuza have resorted to stealing Pokemon cards. Japan is worried about the next generation of gangsters',
        site: 'Independent'
    },
    q17: {
        word: 'turtles',
        story: 'Man faces jail for smuggling ___ worth $1.4 million in socks to Hong Kong',
        complete: 'Man faces jail for smuggling turtles worth $1.4 million in socks to Hong Kong',
        site: 'NBC News'
    },
    q18: {
        word: 'parrot',
        story: 'Man’s late graduation after ___ sparks rent row',
        complete: 'Man’s late graduation after parrot sparks rent row',
        site: 'BBC'
    },
    q19: {
        word: 'bear',
        story: 'Hank the Tank, a 500-pound ___, was blamed for Lake Tahoe break-ins. But DNA evidence tells a different story',
        complete: 'Hank the Tank, a 500-pound bear, was blamed for Lake Tahoe break-ins. But DNA evidence tells a different story',
        site: 'CNN US'
    },
    q20: {
        word: 'Doom',
        story: 'The ___-playing rats are back, and now they’ve learned how to shoot',
        complete: 'The Doom-playing rats are back, and now they’ve learned how to shoot',
        site: 'PC Gamer'
    },
    q21: {
        word: 'Baby Shark',
        story: 'Former Oklahoma jail officers sued over ’___ ___’ torture tactic are placed on probation',
        complete: 'Former Oklahoma jail officers sued over ’Baby Shark’ torture tactic are placed on probation',
        site: 'NBC News'
    },
    q22: {
        word: 'shoe',
        story: 'Fox found with impressive ___ collection in Berlin',
        complete: 'Fox found with impressive shoe collection in Berlin',
        site: 'BBC'
    },
    q23: {
        word: 'Headless',
        story: '___ Body in Topless Bar',
        complete: 'Headless Body in Topless Bar',
        site: 'New York Post'
    },
    q24: {
        word: 'literacy',
        story: 'Missippi’s ___ program shows improvement',
        complete: 'Missippi’s literacy program shows improvement',
        site: 'The Associated Press'
    }
};

var completed = {}
var guesses = 3

var guessedAlready = false

var totalQuestions = Object.keys(context).length

function begin() {
    initializeContext()
    start()
    if (Object.keys(context).length != 0) {
        pickRandom()
    }
    else {
        let submit = document.getElementById("submit")
        submit.style.visibility = "hidden"
    }
}

function guessedAll() {

}

function start() {
    document.getElementById('attempts').innerHTML = guesses + ' guesses left'
}

function initializeContext() {
    let foundContext = JSON.parse(localStorage.getItem("context"))
    let foundCompleted = JSON.parse(localStorage.getItem("completed"))

    if (typeof foundContext !== 'undefined' && foundContext !== null) {
        context = foundContext
    }

    if (typeof foundCompleted !== 'undefined' && foundCompleted !== null) {
        completed = foundCompleted
    }
}

function pickRandom() {
    let contextLeft = Object.keys(context).length
    let i = parseInt(Math.floor(Math.random() * contextLeft))

    let context_keys = Object.keys(context)
    pick = context_keys[i]
    actual_pick = context[pick]

    document.getElementById('story').innerHTML = actual_pick['story']
    document.getElementById('site').innerHTML = actual_pick['site']
}

function guess() {
    if (guesses > 0 && guessedAlready == false) {
        let guessBox = document.getElementById("input")
        if (!guessBox.value) {
            alert("Please enter a guess.")
            return;
        }

        let attempt = guessBox.value.toLowerCase();

        guessBox.value = ""

        if (attempt == actual_pick['word'].toLowerCase() && guessedAlready == false) {
            guessedAlready = true
            document.getElementById('story').innerHTML = actual_pick['complete']
            document.getElementById('response').innerHTML = "You got it right!";
            document.getElementById('response').style.color = "3E9E5D";
            document.getElementById('response').style.fontWeight = "bold";

            showNextBtn()

            Object.assign(actual_pick, { "numGuesses": guesses })

            let key = Object.keys(completed).length + 1
            let finalkey = "K" + key

            Object.assign(completed, { [finalkey]: actual_pick })

            let dictString = JSON.stringify(completed)
            localStorage.setItem("completed", dictString)

            delete context[pick]

            let questionString = JSON.stringify(context)
            localStorage.setItem("context", questionString)
        }
        else {
            guesses -= 1
            document.getElementById('response').innerHTML = "Wrong! Try again.";
            document.getElementById('response').style.color = "E81C31";
            document.getElementById('response').style.fontWeight = "bold";

            document.getElementById('attempts').innerHTML = guesses + ' guesses left'

        }

        if (guesses == 0) {
            guessedAlready = true
            document.getElementById('story').innerHTML = actual_pick['complete']
            document.getElementById('response').innerHTML = "Oops! You ran out of guesses.";


            Object.assign(actual_pick, { "numGuesses": guesses })

            let key = Object.keys(completed).length + 1
            let finalkey = "K" + key

            Object.assign(completed, { [finalkey]: actual_pick })

            let dictString = JSON.stringify(completed)
            localStorage.setItem("completed", dictString)

            delete context[pick]

            let questionString = JSON.stringify(context)
            localStorage.setItem("context", questionString)

            showNextBtn()
        }
    }
}

function showNextBtn() {
    document.getElementById('next').style.display = "inline";
}

function next() {
    if (Object.keys(context).length != 1) {
        guessedAlready = false

        document.getElementById('next').style.display = "none";
        document.getElementById('response').innerHTML = "Guess Below";
        document.getElementById('response').style.color = "black";
        document.getElementById('response').style.fontWeight = "normal";

        pickRandom()

        guesses = 3

        document.getElementById('attempts').innerHTML = guesses + ' guesses left'
    }
    else {
        document.getElementById('response').style.color = "black";
        document.getElementById('response').style.fontWeight = "bold";
        document.getElementById('response').innerHTML = "You completed all avaliable questions!";
    }
}

function showPreviousQuestions() {
    let scoreTeller = document.getElementById("score")
    let perfectTeller = document.getElementById("highest")
    let totalTeller = document.getElementById("total")

    let list = document.getElementById('previousQuestions')
    list.innerHTML = ''

    let completed = JSON.parse(localStorage.getItem("completed"))

    if (typeof completed !== 'undefined' && completed !== null) {
        if (Object.keys(completed).length > 0) {
            let completedQuestions = []
            let finalString = "<ul>"
            let score = 0

            Object.keys(completed).forEach(function (key) {
                completedQuestions.push("Question: " + completed[key]["story"] + "</br> Answer: " + completed[key]["word"] + "</br> Number of guesses left: " + completed[key]["numGuesses"])
                score += completed[key]["numGuesses"]
            });

            completedQuestions.forEach(function (item) {
                finalString += '<li>' + item + '</li>';
            });

            finalString += '</ul>';
            list.innerHTML = finalString;

            scoreTeller.innerHTML = "Current Score: " + score + " / " + (3 * Object.keys(completed).length)
            perfectTeller.innerHTML = "Score if you perfectly answer all questions: " + (totalQuestions * 3)
            totalTeller.innerHTML = "Total Questions: " + totalQuestions
        }
    }
    else {
        scoreTeller.innerHTML = "No questions answered yet!"
    }

}
