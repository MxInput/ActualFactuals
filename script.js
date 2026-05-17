var actual_pick
var pick

var context = {
    q1: {
        word: 'coyote',
        story: 'Male ___ swam 2 miles to Alcatraz Island, twice as far as biologists had expected',
        complete: 'Male coyote swam 2 miles to Alcatraz Island, twice as far as biologists had expected',
        hint1: "It's an animal.",
        hint2: "The Road Runner had to deal with one of these.",
        note: "undefined",
        site: 'The Associated Press'
    },
    q2: {
        word: 'Knight Rider',
        story: 'Museum’s ‘___ ___’ replica car got a speeding ticket. It hasn’t gone anywhere in years',
        complete: 'Museum’s ‘Knight Rider’ replica car got a speeding ticket. It hasn’t gone anywhere in years',
        hint1: "It's from a TV show.",
        hint2: "The show has David Hasselhoff in it.",
        note: "undefined",
        site: 'The Associated Press'
    },
    q3: {
        word: 'Subway',
        story: 'For ___, A Ruling Not So Sweet. Irish Court Says Its Bread Isn’t Bread',
        complete: 'For Subway, A Ruling Not So Sweet. Irish Court Says Its Bread Isn’t Bread',
        hint1: "It's a restaurant.",
        hint2: "It's also a nickname for a underground railway system.",
        note: "undefined",
        site: 'NPR'
    },
    q4: {
        word: 'McDonald',
        story: 'Hilarious moment nine cars patiently sit in a backed-up ___’s drive-thru line on Christmas day not realizing the restaurant is CLOSED',
        complete: 'Hilarious moment nine cars patiently sit in a backed-up McDonald’s drive-thru line on Christmas day not realizing the restaurant is CLOSED',
        hint1: "You're probably not 'loving it' not getting the answer.",
        hint2: "Think golden arches.",
        note: "undefined",
        site: 'Daily Mail'
    },
    q5: {
        word: '10K',
        story: 'Minnesota boy accidentally wins ___ race after taking wrong turn in 5K race',
        complete: 'Minnesota boy accidentally wins 10K race after taking wrong turn in 5K race',
        hint1: "It's a longer race.",
        hint2: "By longer I mean double in length.",
        note: "undefined",
        site: 'FOX'
    },
    q6: {
        word: 'Cabbage Patch Kids',
        story: '’They’re not dolls, they’re babies!’: How the ___ ___ ___ caused a near-riot in the 1980s',
        complete: '’They’re not dolls, they’re babies!’: How the Cabbage Patch Kids caused a near-riot in the 1980s',
        hint1: "Think of 80s crazes.",
        hint2: "It's the name of a brand known for it's cloth bodies and plastic heads.",
        note: "undefined",
        site: 'BBC'
    },
    q7: {
        word: 'Red Square',
        story: 'Mathias Rust: German teenager who flew to ___ ___',
        complete: 'Mathias Rust: German teenager who flew to Red Square',
        hint1: "A location in Russia",
        hint2: "A color, a shape",
        note: "undefined",
        site: 'BBC'
    },
    q8: {
        word: 'wolf',
        story: '"Monster ___" robots in high demand to scare off bears in Japan after record number of attacks',
        complete: '"Monster wolf" robots in high demand to scare off bears in Japan after record number of attacks',
        hint1: "Thought to be solitary animals despite living in packs.",
        hint2: "Grandma, what big teeth you have!",
        note: "undefined",
        site: 'CBS'
    },
    q9: {
        word: 'Whale',
        story: 'Scientists Are Crafting Fake ___ Poop and Dumping It in the Ocean',
        complete: 'Scientists Are Crafting Fake Whale Poop and Dumping It in the Ocean',
        hint1: "Mammal but still lives in bodies of water",
        hint2: "Source of anger in Moby Dick",
        note: "undefined",
        site: 'Smithsonian magazine'
    },
    q10: {
        word: 'Katy Perry',
        story: 'Australian designer ___ ___ wins trademark case against popstar ___ ___ in High Court',
        complete: 'Australian designer Katie Perry wins trademark case against popstar Katy Perry in High Court',
        hint1: "World's highest-paid female musician in 2015 and 2018",
        hint2: "Sung the song Firework",
        note: "undefined",
        site: '(Australia) ABC'
    },
    q11: {
        word: 'monkey',
        story: 'Cops investigating if Missouri foster mom traded a kid for a ___ to boost her exotic animal collection',
        complete: 'Cops investigating if Missouri foster mom traded a kid for a monkey to boost her exotic animal collection',
        hint1: "Generally known for swinging on trees",
        hint2: "Like an ape but with a tail",
        note: "undefined",
        site: 'Independent'
    },
    q12: {
        word: 'shoes',
        story: 'Mystery as hundreds of Victorian ___ wash up on beach',
        complete: 'Mystery as hundreds of Victorian shoes wash up on beach',
        hint1: "A person puts them over socks.",
        hint2: "Nike is known for selling these.",
        note: "undefined",
        site: 'BBC'
    },
    q13: {
        word: 'gorilla',
        story: 'Virginia zoo with no ___s in custody forced to deny rumors of escaped ___',
        complete: 'Virginia zoo with no gorillas in custody forced to deny rumors of escaped gorilla',
        hint1: "Genetically close to us",
        hint2: "The type of ape King Kong resembles",
        note: "undefined",
        site: 'New York Post'
    },
    q14: {
        word: 'fur',
        story: 'Woman claims she was kicked out of Manhattan bar for wearing real ___',
        complete: 'Woman claims she was kicked out of Manhattan bar for wearing real fur',
        hint1: "A type of material",
        hint2: "Gained from an animal",
        note: "undefined",
        site: 'Independent'
    },
    q15: {
        word: 'potatoes',
        story: 'Eggs are so expensive that some Americans are decorating ___ this Easter',
        complete: 'Eggs are so expensive that some Americans are decorating potatoes this Easter',
        hint1: "A type of vegetable",
        hint2: "Kind of a symbol for Ireland",
        note: "undefined",
        site: 'CBC'
    },
    q16: {
        word: 'Pokemon cards',
        story: 'The yakuza have resorted to stealing ___ ___. Japan is worried about the next generation of gangsters',
        complete: 'The yakuza have resorted to stealing Pokemon cards. Japan is worried about the next generation of gangsters',
        hint1: "Some collect them, some use them to play against others.",
        hint2: "Type of merchandise from the highest-grossing media franchise in the world",
        note: "undefined",
        site: 'Independent'
    },
    q17: {
        word: 'turtles',
        story: 'Man faces jail for smuggling ___ worth $1.4 million in socks to Hong Kong',
        complete: 'Man faces jail for smuggling turtles worth $1.4 million in socks to Hong Kong',
        hint1: "Aquatic animal",
        hint2: "Known for their shells",
        note: "undefined",
        site: 'NBC News'
    },
    q18: {
        word: 'parrot',
        story: 'Man’s late graduation after ___ sparks rent row',
        complete: 'Man’s late graduation after parrot sparks rent row',
        hint1: "It's a type of pet.",
        hint2: "Specifically a bird that can talk to you.",
        note: "undefined",
        site: 'BBC'
    },
    q19: {
        word: 'bear',
        story: 'Hank the Tank, a 500-pound ___, was blamed for Lake Tahoe break-ins. But DNA evidence tells a different story',
        complete: 'Hank the Tank, a 500-pound bear, was blamed for Lake Tahoe break-ins. But DNA evidence tells a different story',
        hint1: "It's the logo of an NFL team.",
        hint2: "Black ___, Brown ___, Panda ___, Polar ___",
        note: "undefined",
        site: 'CNN US'
    },
    q20: {
        word: 'Doom',
        story: 'The ___-playing rats are back, and now they’ve learned how to shoot',
        complete: 'The Doom-playing rats are back, and now they’ve learned how to shoot',
        hint1: "The name of a 90s video game",
        hint2: "It's a first person shooter where you play a marine.",
        note: "undefined",
        site: 'PC Gamer'
    },
    q21: {
        word: 'Baby Shark',
        story: 'Former Oklahoma jail officers sued over ’___ ___’ torture tactic are placed on probation',
        complete: 'Former Oklahoma jail officers sued over ’Baby Shark’ torture tactic are placed on probation',
        hint1: "Really popular song in 2020",
        hint2: "Played for kids",
        note: "undefined",
        site: 'NBC News'
    },
    q22: {
        word: 'shoe',
        story: 'Fox found with impressive ___ collection in Berlin',
        complete: 'Fox found with impressive shoe collection in Berlin',
        hint1: "People wear these.",
        hint2: "They are worn on the lower half of the body.",
        note: "undefined",
        site: 'BBC'
    },
    q23: {
        word: 'Headless',
        story: '___ Body in Topless Bar',
        complete: 'Headless Body in Topless Bar',
        hint1: "The word shares its suffix with the fourth word.",
        hint2: "___ Horseman",
        note: "undefined",
        site: 'New York Post'
    },
    q24: {
        word: 'literacy',
        story: 'Missippi’s ___ program shows improvement',
        complete: 'Missippi’s literacy program shows improvement',
        hint1: "Yep, that is not an error.",
        hint2: "The misspelling gives a hint in itself.",
        note: "undefined",
        site: 'The Associated Press'
    },
    q25: {
        word: 'Dress',
        story: 'Optical illusion: ___ colour debate goes global',
        complete: 'Optical illusion: Dress colour debate goes global',
        hint1: "Gold and white or...",
        hint2: "It's a type of clothing",
        note: "undefined",
        site: 'BBC'
    },
    q26: {
        word: 'Nutella',
        story: 'Truck With 20 Tons Of ___ And Chocolate Vanishes; Police Hunt For Semi’s Sweets',
        complete: 'Truck With 20 Tons Of Nutella And Chocolate Vanishes; Police Hunt For Semi’s Sweets',
        hint1: "Owned by an Italian company",
        hint2: "Brand name of hazelnut-cocoa spread",
        note: "undefined",
        site: 'NPR News'
    },
    q27: {
        word: 'ping-pong',
        story: 'Former mobster sues after slip during prison ___ match',
        complete: 'Former mobster sues after slip during prison ping-pong match',
        hint1: "It's a sport",
        hint2: "Inspired a 70s video game",
        note: "Include a hyphen between the words",
        site: 'FOX'
    },
    q28: {
        word: 'manure',
        story: 'US energy secretary Rick Perry duped by Russian pranksters to talk about pig ___',
        complete: 'US energy secretary Rick Perry duped by Russian pranksters to talk about pig manure',
        hint1: "Kind of gross",
        hint2: "Excrement",
        note: "undefined",
        site: 'The Guardian'
    },
    q29: {
        word: 'paper',
        story: 'Chinese children turn panda poo into ___ during record-breaking lesson',
        complete: 'Chinese children turn panda poo into paper during record-breaking lesson',
        hint1: "The same thing is also made from trees.",
        hint2: "Rock ___ Scissors",
        note: "undefined",
        site: 'Guinness World Records'
    },
    q30: {
        word: 'frozen',
        story: 'Woman gives birth to daughter who spent 24 years as ___ embryo: ’She’s perfect’',
        complete: 'Woman gives birth to daughter who spent 24 years as frozen embryo: ’She’s perfect’',
        hint1: "Think of ways to preserve something.",
        hint2: "It's also the name of a Disney movie.",
        note: "undefined",
        site: 'abc News'
    },
    q31: {
        word: 'Raccoon',
        story: 'Daredevil ___ Climbs Minnesota Skyscraper and Becomes a Sensation',
        complete: 'Daredevil Raccoon Climbs Minnesota Skyscraper and Becomes a Sensation',
        hint1: "Think of an animal dubious and mischevious enough to pull this off.",
        hint2: "Trash panda",
        note: "undefined",
        site: 'The New York Times'
    },
    q32: {
        word: 'Dairy Queen',
        story: 'Alberta zoo charged over video of bear eating ice cream at ___ ___',
        complete: 'Alberta zoo charged over video of bear eating ice cream at Dairy Queen',
        hint1: "Headquartered in Minnesota",
        hint2: "Word for food mainly made of milk, word for a royal",
        note: "undefined",
        site: 'CBC'
    },
    q33: {
        word: 'Super Bowl',
        story: 'Fiona the hippo predicts ___ ___ 2020 winner — by vomiting ',
        complete: 'Fiona the hippo predicts Super Bowl 2020 winner — by vomiting',
        hint1: "Happens every year",
        hint2: "49ers vs Chiefs",
        note: "undefined",
        site: 'New York Post'
    },
    q34: {
        word: 'brain',
        story: 'In a novel experiment, ___-like human tissue implanted in rat brains influenced the rodents’ behavior',
        complete: 'In a novel experiment, brain-like human tissue implanted in rat brains influenced the rodents’ behavior',
        hint1: "It's in your head.",
        hint2: "Can you please use it to find the answer.",
        note: "undefined",
        site: 'NBC News'
    },
    q35: {
        word: 'planker',
        story: 'PM’s son named New Zealand’s top ___',
        complete: 'PM’s son named New Zealand’s top planker',
        hint1: "Stupid fad that peaked in 2011.",
        hint2: "Flat, elongated piece of wood",
        note: "undefined",
        site: '(Australia) ABC'
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
        guessedAll()
    }
}

function guessedAll() {
    let attempts = document.getElementById("attempts")
    attempts.style.display = "none"

    let input = document.getElementById("input")
    input.style.display = "none"

    let submit = document.getElementById("submit")
    submit.style.display = "none"

    let next = document.getElementById("next")
    next.style.display = "none"

    document.getElementById('response').style.color = "black";
    document.getElementById('response').style.fontWeight = "bold";
    document.getElementById('response').innerHTML = "You completed all avaliable questions!";
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
    if (Object.keys(context).length != 0) {
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
        guessedAll()
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
        }
    }
    else {
        scoreTeller.innerHTML = "No questions answered yet!"
    }

    perfectTeller.innerHTML = "Score if you perfectly answer all questions: " + (totalQuestions * 3)
    totalTeller.innerHTML = "Total Questions: " + totalQuestions
}
