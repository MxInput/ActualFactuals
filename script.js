const context = {
    q1: {
        word: 'coyote',
        story: 'Male ___ swam 2 miles to Alcatraz Island, twice as far as biologists had expected',
        site: 'The Associated Press'
    },
    q2: {
        word: 'Knight Rider',
        story: 'Museum’s ‘___ ___’ replica car got a speeding ticket. It hasn’t gone anywhere in years',
        site: 'The Associated Press'
    },
    q3: {
        word: 'Subway',
        story: 'For ___, A Ruling Not So Sweet. Irish Court Says Its Bread Isn’t Bread',
        site: 'NPR'
    },
    q4: {
        word: 'McDonald',
        story: 'Hilarious moment nine cars patiently sit in a backed-up ___’s drive-thru line on Christmas day not realizing the restaurant is CLOSED',
        site: 'Daily Mail'
    },
    q4: {
        word: '10K',
        story: 'Minnesota boy accidentally wins ___ race after taking wrong turn in 5K race',
        site: 'FOX'
    }
};

completed = {}

function pickRandom() {
    contextLeft = Object.keys(context).length
    i = parseInt(Math.floor(Math.random() * contextLeft))

    context_keys = Object.keys(context)
    pick = context_keys[i]
    actual_pick = context[pick]

    document.getElementById('try').innerHTML = actual_pick['word']
}

pickRandom()

