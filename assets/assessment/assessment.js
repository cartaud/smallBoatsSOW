//targeting all html elements that I will need
let startBtn = document.querySelector("#startBtn");
startBtn.addEventListener("click", startingQuiz);
let container = document.querySelector('#container')
let question = document.createElement('div');
let options = document.createElement('div');
question.classList.add('question');
options.classList.add('options');

//array of all quiz questions and the different options and their value
let questions = [
  //Add a third object property for images and include the link for that image
  //Add global variable for fiberglass and user can enter sqft they want for each individual item so total sqft will be calculated at the end 
    {   section: "Hull",
        question: "Hull",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Fiber Glass", actionRequired: true,reason: 'has fiber glass damage', action: "using X square feet of fiber glass"},
            {option: "Paint/Gel", actionRequired: true,reason: 'gel coat is faded', action: "applying a new coat of gel coat to specified surfaces"},
            {option: "Glass + Paint", actionRequired: true,reason: 'has fiber glass damage and faded gel coat', action: "using X square feet of fiber glass and painting specified surfaces"},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Outdrive",
        question: "Outdrive",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Paint", actionRequired: true, reason: 'has exposed metal surfaces', action: "painting all surfaces where exposed metal is showing"},
            {option: "100 hour service", actionRequired: true, reason: 'requires service', action: "accomplishing the requirements of 100 hour service"},
            {option: "Paint + Service", actionRequired: true, reason: 'has exposed metal and requires service', action: "accomplishing the requirements of 100 hour service and painting all surfaces where exposed metal is showing"},
            {option: "Replace", actionRequired: true}
        ]
    },
    {   section: "Outdrive",
        question: "EM tiller bracket",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Missing", actionRequired: true, reason: 'is missing', action: "procuring new and installing"},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Outdrive",
        question: "EM tiller arm",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Missing", actionRequired: true, reason: 'is missing', action: "procuring new and installing"},
            {option: "Replace", actionRequired: true},
        ]
        },
    {   section: "Outdrive",
        question: "Propeller",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Paint", actionRequired: true, reason: 'has exposed metal surfaces', action: "painting propeller"},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Outdrive",
        question: "Trim Hoses",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Outdrive",
        question: "Zincs",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Outdrive",
        question: "Tilt/Trim Indicators",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Calibrate", actionRequired: true, reason: 'are not reading the correct trim level', action: "calibrating tilt/trim indicators"},
            {option: "Replace", actionRequired: true,},
        ]
    },
    {   section: "Outdrive",
        question: "Bellows",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Sponson",
        question: "Sponson",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "SLEP 1", actionRequired: true, reason: 'condition is below average', action: "accomplishing the requirements of SLEP 1"},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Sponson",
        question: "Skirt retainers",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Preservation", actionRequired: true, reason: 'have surface corrosion', action: "accomplishing in place preservation"},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Sponson",
        question: "Transom attachment strap",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Repair(delaminating)", actionRequired: true, reason: 'is delaminating', action: "gluing attachment strap to sponson to prevent peel up"},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Sponson",
        question: "Inner sponson lifelines",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Sponson",
        question: "MBCS",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Deck",
        question: "Nonskid",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Deck",
        question: "Forward hatch hinges",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Deck",
        question: "Forward hatch gasket",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Deck",
        question: "Forward hatch latches",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true,},
        ]
    },
    {   section: "Deck",
        question: "Security arch stowage sockets",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Deck",
        question: "Coxswains flat caulk",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Deck",
        question: "Fire extinguisher brackets",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Deck",
        question: "Life ring brackets",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Deck",
        question: "Coxswains backrest",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace cushion", actionRequired: true, reason: 'cushion is in poor condition', action: "replacing cushion"},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Deck",
        question: "Transom to deck seal",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Deck",
        question: "Manual bilge pump",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace pump hose + clamps", actionRequired: true, reason: 'hoses and clamps are in poor condition', action: "replacing bilge pump hoses and securing with new stainless constant torque clamps"},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Deck",
        question: "Aft stowage box cushion",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Deck",
        question: "Transom cap",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Preservation", actionRequired: true, reason: 'has surface corrosion and missing paint', action: "removing surface corrosion and painting"},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Deck",
        question: "Stern light",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Boat Alt", actionRequired: true, reason: 'boat alt is not accomplished', action: "accomplishing the stern light post boat alt to make light an LED"},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Deck",
        question: "Engine box hinges",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Deck",
        question: "Engine box latches",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Deck",
        question: "Engine box cushion",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Console",
        question: "Starboard and aft console access hinges",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Console",
        question: "Starboard and aft console access barrel bolts",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Console",
        question: "Starboard and aft console access gaskets",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Console",
        question: "Console to deck hinges",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Console",
        question: "Console to deck latches",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Console",
        question: "Console lifting support bar",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Console",
        question: "Console handrails",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Paint", actionRequired: true, reason: 'paint condition is poor', action: "painting handrails"},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Console",
        question: "Console handrails pushpins",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Console",
        question: "Security arch frame",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Paint", actionRequired: false, reason: 'paint condition is poor', action: "painting. Color shall match handrail color"},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Console",
        question: "Security arch blue light",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Console",
        question: "Security loud hailer speaker",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Console",
        question: "Throttle control head",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Preservation", actionRequired: false, reason: 'has surface corrosion', action: "removing surface corrosion and replacing throttle position indicator"},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Console",
        question: "Throttle control head cables",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Console",
        question: "Label plates",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Preservation", actionRequired: false, reason: 'are unreadable', action: "cleaning and restoring X label plates"},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Console",
        question: "Steering wheel",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Console",
        question: "Helm",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Console",
        question: "Steering hoses",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Console",
        question: "Steering hydraulic fluid",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Engine/Aft Bilge & Piping",
        question: "Steering linkage/ram",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Electrical",
        question: "Navigation lights",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Electrical",
        question: "Anchor light",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Electrical",
        question: "Anchor light post",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Bushing + locking pin", actionRequired: true, reason: 'bushings and locking pin are in poor condition/missing', action: "replacing bushings and double locking pin with new lanyard"},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Electrical",
        question: "Engine wiring harness",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Electrical",
        question: "GPS",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Mounting bracket", actionRequired: true, reason: 'mounting bracket is broken', action: "replacing GPS mounting bracket"},
            {option: "Update (72cv, depth sounder, mounting bracket)", actionRequired: true, reason: 'is an older version', action: "installing Garmin ECHOMAP PLUS 72cv with depth sounder/transducer assemblies and mounting bracket"},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Electrical",
        question: "Breakers",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "x breakers", actionRequired: true, reason: 'condition is poor', action: "replacing X amount of breakers"},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Electrical",
        question: "Shore power",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Electrical",
        question: "Diesel view",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Boat alt", actionRequired: true, reason: 'does not have required boat alt', action: "accomplishing the diesel-view/smart-craft boat alteration"},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Electrical",
        question: "VHF Radio",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Electrical",
        question: "VHF Radio antenna",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Electrical",
        question: "VHF Radio antenna mount",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Electrical",
        question: "Spotlight receptacle",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "New Cap + Lanyard", actionRequired: true, reason: 'cap is broken/missing', action: 'replacing cap and lanyard with new'},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Electrical",
        question: "Strobe light receptacle",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "New Cap + Lanyard", actionRequired: true, reason: 'cap is broken/missing', action: 'replacing cap and lanyard with new'},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Electrical",
        question: "Loud hailer receptacle",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "New Cap + Lanyard", actionRequired: true, reason: 'cap is broken/missing', action: 'replacing cap and lanyard with new'},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Electrical",
        question: "Loud hailer microphone",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Console",
        question: "Compass",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Compass Guard BA", actionRequired: true, reason: 'guard boat alt has not been accomplished', action: 'accomplishing boat alteration to install compass guard'},
            {option: "Compass Guard Replace", actionRequired: true, reason: 'guard is damaged', action: 'install new compass guard'},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Engine",
        question: "Engine",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Paint", actionRequired: true, reason: 'paint condition is poor', action: 'soda blasting and paint'},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Engine",
        question: "Engine oil",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Engine",
        question: "Engine coolant",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Engine",
        question: "Engine zincs",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Engine",
        question: "RACOR",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "New Filter", actionRequired: true, reason: 'filter is in poor condition', action: 'replacing filter'},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Engine",
        question: "Engine mounted oil filter",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Engine",
        question: "Engine mounted fuel filter",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Engine",
        question: "Engine air filter",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Engine",
        question: "Engine belts",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Engine",
        question: "Engine belt guard",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Engine",
        question: "Engine starter",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Bench Test", actionRequired: true, reason: 'cranks but does not start', action: 'bench testing to verify the starter is meeting the required specifications'},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Engine",
        question: "Engine alternator",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Bench Test", actionRequired: true, reason: 'is not providing the required amount of charge to batteries', action: 'bench testing to verify the alternator is meeting the required specifications'},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Engine",
        question: "Engine after-cooler",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Pressure Test", actionRequired: true, reason: 'condition is average', action: 'pressure testing to verify the after-cooler can hold the specified amount of pressure'},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Engine",
        question: "Engine heat exchanger",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Pressure Test", actionRequired: true, reason: 'condition is average', action: 'pressure testing to verify the after-cooler can hold the specified amount of pressure'},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Engine",
        question: "FLOCS pump",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "New Hose", actionRequired: true, reason: 'hose condition is poor', action: 'replacing hoses with new'},
            {option: "New Handle", actionRequired: true, reason: 'handle condition is poor', action: 'replacing handle with new'},
            {option: "New valve", actionRequired: true, reason: 'valve condition is poor', action: 'replacing valve with new'},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Engine",
        question: "Fuel stripping pump",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "New Hose", actionRequired: true,  reason: 'hose condition is poor', action: 'replacing hoses with new'},
            {option: "New Handle", actionRequired: true, reason: 'handle condition is poor', action: 'replacing handle with new'},
            {option: "New valve", actionRequired: true, reason: 'valve condition is poor', action: 'replacing valve with new'},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Engine",
        question: "Raw water pump housing",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "New seal", actionRequired: true, reason: 'is leaking', action: 'replacing seal with new'},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Engine",
        question: "Raw water pump run-dry impeller",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Engine",
        question: "Sea strainer to water pump hose",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Engine",
        question: "Sea strainer",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Class B overhaul", actionRequired: true, reason: 'condition is poor', action: 'accomplishing class B overhaul'},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Engine",
        question: "Seacock to strainer hose",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Engine",
        question: "Motor mounts",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Boat Alt", actionRequired: true, reason: 'are the older square version', action: 'accomplishing boat alteration to replace square motor mounts with round'},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Engine",
        question: "Neutral safety switch",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Electrical",
        question: "Battery switch",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Electrical",
        question: "Trim breakers",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Electrical",
        question: "Trim indicator LED",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Electrical",
        question: "Trim gauge",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Electrical",
        question: "Forward drive shaft bearings",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Engine",
        question: "Aft drive shaft bearings",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Engine",
        question: "Forward drive shaft containment hoop",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "paint", actionRequired: true, reason: 'has missing paint', action: 'painting black'},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Engine",
        question: "Aft drive shaft containment hoop",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Paint", actionRequired: true, reason: 'has missing paint', action: 'painting black'},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Engine",
        question: "Drive shaft",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "paint", actionRequired: true, reason: 'has missing paint', action: 'painting black'},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Engine",
        question: "Drive shaft U-joints",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Engine",
        question: "Exhaust hose",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Engine",
        question: "Exhaust lagging",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Aft Bilge",
        question: "Bilge pump",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Aft Bilge",
        question: "Bilge pump hoses",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Aft Bilge",
        question: "Bilge pump float switch",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Aft Bilge",
        question: "Trim pump",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Aft Bilge",
        question: "Trim pump solenoids",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Aft Bilge",
        question: "Trim pump hoses",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Aft Bilge",
        question: "Trim pump reservoir",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Change Fluid", actionRequired: true, reason: 'fluid is old', action: 'removing existing fluid and filling with new'},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Aft Bilge",
        question: "Seacock",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Class B", actionRequired: true, reason: 'condition is poor', action: 'accomplishing the requirements of class B overhaul'},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Electrical",
        question: "Batteries",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "Electrical",
        question: "Battery terminal connections",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },

]

let questionX = 0;
//stores an object of arrays that contains the condition for each section
const toDo = JSON.parse(localStorage.getItem('toDoList')) || {hull:[],outdrive:[],sponson:[],deck:[],console:[],electrical:[],engine:[],bilge:[]}; 
let hullNumber = JSON.parse(localStorage.getItem('hullNumber')) || ''; 
//when button is pressed, the timer starts and the required html elements get appended to container
function startingQuiz() {
    localStorage.clear();
    container.innerHTML = '';
    container.append(question);
    container.append(options);
    showQuestion();
}
//neatly display each question one at a time until user chooses an answer
function showQuestion() {
    
    options.innerHTML = '';
    question.innerHTML = questions[questionX].question;
    for (let i=0;i<questions[questionX].answers.length;i++) {
        var btn = document.createElement('button');
        options.append(btn);
        btn.classList.add('answer');
        btn.setAttribute('data-actionRequired', questions[questionX].answers[i].actionRequired)
        btn.setAttribute('data-option', questions[questionX].answers[i].option)
        btn.setAttribute('data-section', questions[questionX].section)
        if (i != 0 && i != questions[questionX].answers.length -1) {
            btn.setAttribute('data-reason', questions[questionX].answers[i].reason)
            btn.setAttribute('data-action', questions[questionX].answers[i].action)
        }
        btn.textContent = questions[questionX].answers[i].option;
        btn.addEventListener('click', next)
        btn.addEventListener('touch', next)
    }
    //when user chooses an answer, this function determines if that actionRequired is true or false (right or wrong)
    function next() {
        if (this.attributes[1].value == 'true') { //if user selects an option that requires an action, this runs
            if (this.attributes[2].value == 'Replace') {
                if (this.attributes[3].value == 'Hull') {
                    toDo.hull.push(`${questions[questionX].question} condition is poor, recommend replacing with new.`)
                }
                else if (this.attributes[3].value == 'Outdrive') {
                    toDo.outdrive.push(`${questions[questionX].question} condition is poor, recommend replacing with new.`)
                }
                else if (this.attributes[3].value == 'Sponson') {
                    toDo.sponson.push(`${questions[questionX].question} condition is poor, recommend replacing with new.`)
                }
                else if (this.attributes[3].value == 'Deck') {
                    toDo.deck.push(`${questions[questionX].question} condition is poor, recommend replacing with new.`)
                }
                else if (this.attributes[3].value == 'Console') {
                    toDo.console.push(`${questions[questionX].question} condition is poor, recommend replacing with new.`)
                }
                else if (this.attributes[3].value == 'Electrical') {
                    toDo.electrical.push(`${questions[questionX].question} condition is poor, recommend replacing with new.`)
                }
                else if (this.attributes[3].value == 'Engine') {
                    toDo.engine.push(`${questions[questionX].question} condition is poor, recommend replacing with new.`)
                }
                else if (this.attributes[3].value == 'Aft Bilge') {
                    toDo.bilge.push(`${questions[questionX].question} condition is poor, recommend replacing with new.`)
                }
                questionX++;
                checkEnd();
            }
            else if (this.attributes[2].value != 'Replace') {
                if (this.attributes[3].value == 'Hull') {
                    toDo.hull.push(`${questions[questionX].question} ${this.attributes[4].value}, recommend ${this.attributes[5].value}.`)
                }
                else if (this.attributes[3].value == 'Outdrive') {
                    toDo.outdrive.push(`${questions[questionX].question} ${this.attributes[4].value}, recommend ${this.attributes[5].value}.`)
                }
                else if (this.attributes[3].value == 'Sponson') {
                    toDo.sponson.push(`${questions[questionX].question} ${this.attributes[4].value}, recommend ${this.attributes[5].value}.`)
                }
                else if (this.attributes[3].value == 'Deck') {
                    toDo.deck.push(`${questions[questionX].question} ${this.attributes[4].value}, recommend ${this.attributes[5].value}.`)
                }
                else if (this.attributes[3].value == 'Console') {
                    toDo.console.push(`${questions[questionX].question} ${this.attributes[4].value}, recommend ${this.attributes[5].value}.`)
                }
                else if (this.attributes[3].value == 'Electrical') {
                    toDo.electrical.push(`${questions[questionX].question} ${this.attributes[4].value}, recommend ${this.attributes[5].value}.`)
                }
                else if (this.attributes[3].value == 'Engine') {
                    toDo.engine.push(`${questions[questionX].question} ${this.attributes[4].value}, recommend ${this.attributes[5].value}.`)
                }
                else if (this.attributes[3].value == 'Aft Bilge') {
                    toDo.bilge.push(`${questions[questionX].question} ${this.attributes[4].value}, recommend ${this.attributes[5].value}.`)
                }
                questionX++
                checkEnd();
            }
        }
        else { //if user chooses do nothing
          questionX++ 
          checkEnd();
        }
    }
}

function checkEnd() {
    if (questionX >= questions.length ) { //if user answered the last question, endQuiz function will run
        endQuiz()
    }
    else {
        showQuestion();
    }
}

function endQuiz() { //when quiz is over, this will run
    container.innerHTML = `<h2 style='font-size: 24px'>All done!</h2><form>Enter the hull number:<input id="hullNumberInput" maxLength='8' placeholder='7MRBXXXX'><button id='submit'>Submit</button>`;
    document.querySelector('#submit').addEventListener("click", function(event) {
        event.preventDefault();
        hullNumber = document.querySelector('#hullNumberInput').value;
        localStorage.setItem('hullNumber', JSON.stringify(hullNumber))
        localStorage.setItem('toDoList', JSON.stringify(toDo)); //stores the sorted array in local
        window.open('https://cartaud.github.io/smallBoatsSOW/assets/assessment/assessmentOutput/assessmentOutput.html', '_self'); //opens up scoreboard page
    })
    document.querySelector('#submit').addEventListener("touch", function(event) {
        event.preventDefault();
        hullNumber = document.querySelector('#hullNumberInput').value;
        localStorage.setItem('hullNumber', JSON.stringify(hullNumber))
        localStorage.setItem('toDoList', JSON.stringify(toDo)); //stores the sorted array in local
        window.open('https://cartaud.github.io/smallBoatsSOW/assets/assessment/assessmentOutput/assessmentOutput.html', '_self'); //opens up scoreboard page
    })
}