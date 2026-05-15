var actual_pick
var pick

context = {
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
    }
};

completed = {}
guesses = 3

document.getElementById('attempts').innerHTML = guesses + ' guesses left'


function pickRandom() {
    contextLeft = Object.keys(context).length
    i = parseInt(Math.floor(Math.random() * contextLeft))

    context_keys = Object.keys(context)
    pick = context_keys[i]
    actual_pick = context[pick]

    document.getElementById('story').innerHTML = actual_pick['story']
    document.getElementById('site').innerHTML = actual_pick['site']
}

function guess() {
    if (guesses > 0) {
        let guessBox = document.getElementById("input")
        if (!guessBox.value) {
            alert("Please enter a guess.")
            return;
        }

        let attempt = guessBox.value.toLowerCase();

        guessBox.value = ""

        if (attempt == actual_pick['word'].toLowerCase()) {
            document.getElementById('story').innerHTML = actual_pick['complete']
            showNextBtn()
        }
        else {
            guesses -= 1
            document.getElementById('attempts').innerHTML = guesses + ' guesses left'
        }

        if (guesses == 0) {
            showNextBtn()
        }
    }
}

function showNextBtn() {
    document.getElementById('next').style.display = "inline";
}

function next() {
    if (Object.keys(context).length != 1) {
        document.getElementById('next').style.display = "none";

        delete context[pick]

        pickRandom()

        guesses = 3
    }
    else {
        console.log("Completed")
    }
}


pickRandom()

