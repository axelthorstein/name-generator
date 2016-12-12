function printBios() {

    var bios = createBio(['Billy Bill', 'Howard', 'Oscar'], 'AEG');

    for (i = 0; i < 3; i++) {
    	document.getElementById("message"+(i+1).toString()).innerHTML = bios[i];
        console.log(bios[i])
    }
}

function createBio(names, attributes) {
    var names = split_names(names)
    var attributeNames = {
        'A': 'rebellious',
        'B': 'low-key',
        'C': 'simple',
        'D': 'clever',
        'E': 'introverted',
        'F': 'extroverted',
        'G': 'bold',
        'H': 'funny'
    };
    var nicknameSentence = '{0} is usually shorted to {1} by friends and family.\n';
    var bioFormat = '{0} is a name usually associated with people who {1} and {2}. {0}\'s usually {3}. ';
    var attributeSentences = {
        'A': ['are very good at expressing themselves',
            'are typically not interested in being normal',
            'have very determined personalities',
            'are more willing to do something different'
        ],
        'B': ['do not actively seek attention from others',
            'are capable of leaving things unsaid',
            'tend to enjoy quality time with few people rather than with a large groups'
        ],
        'C': ['are extremely easy to get along with',
            'find great joy in small things',
            'are able to bring peace into other peoples lives'
        ],
        'D': ['are quick thinkers',
            'have a very logical response to the world around them',
            'are able to communicate very well with the people around them, which usually brings them success in their career'
        ],
        'E': ['are very busy thinkers',
            'do not reveal their best qualities when they first meet new people',
            'make great partners and long lasting friends'
        ],
        'F': ['gain energy when they are around other people',
            'are a very social person',
            'socialize very well with other people which makes them enjoyable people to be around'
        ],
        'G': ['are the first person to try something others are scared to try',
            'love to try new things',
            'are great entrepreneuers which bring great change to the people around them'
        ],
        'H': ['enjoys to make people laugh',
            'are always in a good mood',
            'make friends very easily thanks to their happy personality'
        ]
    };

    set_string_format()
    set_string_strip()

    var bios = [];
    var attributesList = attributes.split("");

    for (i = 0; i < 3; i++) {

        // var randomNumber = Math.floor(Math.random() * attributeSentences[attributesList[1]].length);

        firstPick = attributeSentences[attributesList[0]][i]
        secondPick = attributeSentences[attributesList[1]][i]
        thirdPick = attributeSentences[attributesList[2]][i]

        bio = bioFormat.format(names[i][0], firstPick, secondPick, thirdPick)

        if (names[i].length == 2) {
            bio.strip()
            nickName = nicknameSentence.format(names[i][0], names[i][1])
            bio += nickName
        }

        bios.push(bio)
    }

    return bios
}

function split_names(names) {
    var splitNames = [];

    for (i = 0; i < names.length; i++) {
        splitNames.push(names[i].split(" "));
    }

    return splitNames;
}

function set_string_format() {
    if (!String.prototype.format) {
        String.prototype.format = function() {
            var args = arguments;
            return this.replace(/{(\d+)}/g, function(match, number) {
                return typeof args[number] != 'undefined' ?
                    args[number] :
                    match;
            });
        };
    }
}

function set_string_strip() {
    if (typeof(String.prototype.strip) === "undefined") {
        String.prototype.strip = function() {
            return String(this).replace(/^\s+|\s+$/g, '');
        };
    }
}