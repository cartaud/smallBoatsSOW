//targeting all html elements that I will need
const startBtn = document.querySelector("#startBtn");
startBtn.addEventListener("click", startingQuiz);
const container = document.querySelector('#container')
const question = document.createElement('div');
const options = document.createElement('div');
question.classList.add('question');
options.classList.add('options');

//array of all quiz questions and the different options and their value
const questions = [
  //Add a third object property for images and include the link for that image
  //Add global variable for fiberglass and user can enter sqft they want for each individual item so total sqft will be calculated at the end 
    {   section: "hull",
        question: "Hull fiber glass",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Repair Fiber Glass", actionRequired: true,reason: 'requires repair', action: "using X square feet of fiber glass"},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "hull",
        question: "Hull paint",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Paint Specified Areas", actionRequired: true,reason: 'is unsat', action: "painting all exposed surfaces"},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "hull",
        question: "Hull gel coat",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "New Gel Coat", actionRequired: true,reason: 'is faded', action: "applying a new coat of gel coat to specified surfaces"},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "outdrive",
        question: "Outdrive",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "100 hour service", actionRequired: true, reason: 'requires service', action: "accomplishing the requirements of 100 hour service"},
            {option: "Replace", actionRequired: true}
        ]
    },
    {   section: "outdrive",
        question: "Outdrive paint",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Paint", actionRequired: true, reason: 'has exposed metal surfaces', action: "painting all surfaces where exposed metal is showing"},
            {option: "Replace", actionRequired: true}
        ]
    },
    {   section: "outdrive",
        question: "EM tiller bracket",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Missing", actionRequired: true, reason: 'is missing', action: "procuring new and installing"},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "outdrive",
        question: "EM tiller arm",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Missing", actionRequired: true, reason: 'is missing', action: "procuring new and installing"},
            {option: "Replace", actionRequired: true},
        ]
        },
    {   section: "outdrive",
        question: "Propeller",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Paint", actionRequired: true, reason: 'has exposed metal surfaces', action: "painting propeller"},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "outdrive",
        question: "Trim hoses",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "outdrive",
        question: "Zincs",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "outdrive",
        question: "Tilt/Trim indicators",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Calibrate", actionRequired: true, reason: 'are not reading the correct trim level', action: "calibrating tilt/trim indicators"},
            {option: "Replace", actionRequired: true,},
        ]
    },
    {   section: "outdrive",
        question: "Bellows",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "sponson",
        question: "Sponson",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "SLEP 1", actionRequired: true, reason: 'condition is below average', action: "accomplishing the requirements of SLEP 1"},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "sponson",
        question: "Skirt retainers",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Preservation", actionRequired: true, reason: 'have surface corrosion', action: "accomplishing in place preservation"},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "sponson",
        question: "Transom attachment strap",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Repair(delaminating)", actionRequired: true, reason: 'is delaminating', action: "gluing attachment strap to sponson to prevent peel up"},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "sponson",
        question: "Inner sponson lifelines",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "sponson",
        question: "MBCS",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "deck",
        question: "Nonskid",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "deck",
        question: "Forward hatch hinges",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "deck",
        question: "Forward hatch gasket",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "deck",
        question: "Forward hatch latches",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true,},
        ]
    },
    {   section: "deck",
        question: "Security arch stowage sockets",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "deck",
        question: "Coxswains flat caulk",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "deck",
        question: "Fire extinguisher brackets",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "deck",
        question: "Life ring brackets",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "deck",
        question: "Coxswains backrest",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace cushion", actionRequired: true, reason: 'cushion is unsat', action: "replacing cushion"},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "deck",
        question: "Transom to deck seal",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "deck",
        question: "Manual bilge pump",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace pump hose + clamps", actionRequired: true, reason: 'hoses and clamps are unsat', action: "replacing bilge pump hoses and securing with new stainless constant torque clamps"},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "deck",
        question: "Aft stowage box cushion",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "deck",
        question: "Transom cap",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Preservation", actionRequired: true, reason: 'has surface corrosion and missing paint', action: "removing surface corrosion and painting"},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "deck",
        question: "Engine box hinges",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "deck",
        question: "Engine box latches",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "deck",
        question: "Engine box cushion",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "console",
        question: "Starboard and aft console access hinges",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "console",
        question: "Starboard and aft console access barrel bolts",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "console",
        question: "Starboard and aft console access gaskets",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "console",
        question: "Console to deck hinges",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "console",
        question: "Console to deck latches",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "console",
        question: "Console lifting support bar",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "console",
        question: "Console handrails",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Paint", actionRequired: true, reason: 'paint condition is unsat', action: "painting handrails"},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "console",
        question: "Console handrails pushpins",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "console",
        question: "Security arch frame",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Paint", actionRequired: false, reason: 'paint condition is unsat', action: "painting. Color shall match handrail color"},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "console",
        question: "Security arch blue light",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "console",
        question: "Security loud hailer speaker",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "console",
        question: "Throttle control head",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Preservation", actionRequired: false, reason: 'has surface corrosion', action: "removing surface corrosion and replacing throttle position indicator"},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "console",
        question: "Throttle control head cables",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "console",
        question: "Label plates",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Preservation", actionRequired: false, reason: 'are unreadable', action: "cleaning and restoring X label plates"},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "console",
        question: "Steering wheel",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "console",
        question: "Helm",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "console",
        question: "Steering hoses",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "console",
        question: "Steering hydraulic fluid",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "bilge",
        question: "Steering linkage/ram",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "electrical",
        question: "Navigation lights",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "electrical",
        question: "Anchor light",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "electrical",
        question: "Stern light",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Boat Alt", actionRequired: true, reason: 'boat alt is not accomplished', action: "accomplishing the stern light post boat alt to make light an LED"},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "deck",
        question: "Stern light post",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Bushing + locking pin", actionRequired: true, reason: 'bushings and locking pin are unsat', action: "replacing bushings and double locking pin with new lanyard"},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "electrical",
        question: "Engine wiring harness",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "electrical",
        question: "GPS",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Mounting bracket", actionRequired: true, reason: 'mounting bracket is broken', action: "replacing GPS mounting bracket"},
            {option: "Update (72cv, depth sounder, mounting bracket)", actionRequired: true, reason: 'is an older version', action: "installing Garmin ECHOMAP PLUS 72cv with depth sounder/transducer assemblies and mounting bracket"},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "electrical",
        question: "Breakers",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "x breakers", actionRequired: true, reason: 'condition is poor', action: "replacing X amount of breakers"},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "electrical",
        question: "Shore power",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "electrical",
        question: "Diesel view",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Boat alt", actionRequired: true, reason: 'does not have required boat alt', action: "accomplishing the diesel-view/smart-craft boat alteration"},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "electrical",
        question: "VHF Radio",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "electrical",
        question: "VHF Radio antenna",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "electrical",
        question: "VHF Radio antenna mount",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "electrical",
        question: "Spotlight receptacle",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "New Cap + Lanyard", actionRequired: true, reason: 'cap is broken/missing', action: 'replacing cap and lanyard with new'},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "electrical",
        question: "Strobe light receptacle",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "New Cap + Lanyard", actionRequired: true, reason: 'cap is broken/missing', action: 'replacing cap and lanyard with new'},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "electrical",
        question: "Loud hailer receptacle",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "New Cap + Lanyard", actionRequired: true, reason: 'cap is broken/missing', action: 'replacing cap and lanyard with new'},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "electrical",
        question: "Loud hailer microphone",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "console",
        question: "Compass",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Compass Guard BA", actionRequired: true, reason: 'guard boat alt has not been accomplished', action: 'accomplishing boat alteration to install compass guard'},
            {option: "Compass Guard Replace", actionRequired: true, reason: 'guard is damaged', action: 'install new compass guard'},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "engine",
        question: "Engine",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Paint", actionRequired: true, reason: 'paint condition is unsat', action: 'soda blasting and paint'},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "engine",
        question: "Engine oil",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "engine",
        question: "Engine coolant",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "engine",
        question: "Engine zincs",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "engine",
        question: "RACOR",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "New Filter", actionRequired: true, reason: 'filter is unsat', action: 'replacing filter'},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "engine",
        question: "Engine mounted oil filter",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "engine",
        question: "Engine mounted fuel filter",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "engine",
        question: "Engine air filter",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "engine",
        question: "Engine belts",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "engine",
        question: "Engine belt guard",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "engine",
        question: "Engine starter",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Bench Test", actionRequired: true, reason: 'cranks but does not start', action: 'bench testing to verify the starter is meeting the required specifications'},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "engine",
        question: "Engine alternator",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Bench Test", actionRequired: true, reason: 'is not providing the required amount of charge to batteries', action: 'bench testing to verify the alternator is meeting the required specifications'},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "engine",
        question: "Engine after-cooler",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Pressure Test", actionRequired: true, reason: 'condition is average', action: 'pressure testing to verify the after-cooler can hold the specified amount of pressure'},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "engine",
        question: "Engine heat exchanger",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Pressure Test", actionRequired: true, reason: 'condition is average', action: 'pressure testing to verify the after-cooler can hold the specified amount of pressure'},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "engine",
        question: "FLOCS pump",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "New Hose", actionRequired: true, reason: 'hose condition is unsat', action: 'replacing hoses with new'},
            {option: "New Handle", actionRequired: true, reason: 'handle condition is unsat', action: 'replacing handle with new'},
            {option: "New valve", actionRequired: true, reason: 'valve condition is unsat', action: 'replacing valve with new'},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "engine",
        question: "Fuel stripping pump",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "New Hose", actionRequired: true,  reason: 'hose condition is unsat', action: 'replacing hoses with new'},
            {option: "New Handle", actionRequired: true, reason: 'handle condition is unsat', action: 'replacing handle with new'},
            {option: "New valve", actionRequired: true, reason: 'valve condition is unsat', action: 'replacing valve with new'},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "engine",
        question: "Raw water pump housing",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "New seal", actionRequired: true, reason: 'is leaking', action: 'replacing seal with new'},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "engine",
        question: "Raw water pump run-dry impeller",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "engine",
        question: "Sea strainer to water pump hose",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "engine",
        question: "Sea strainer",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Class B overhaul", actionRequired: true, reason: 'condition is unsat', action: 'accomplishing class B overhaul'},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "engine",
        question: "Seacock to strainer hose",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "engine",
        question: "Motor mounts",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Boat Alt", actionRequired: true, reason: 'are the older square version', action: 'accomplishing boat alteration to replace square motor mounts with round'},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "engine",
        question: "Neutral safety switch",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "electrical",
        question: "Battery switch",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "electrical",
        question: "Trim breakers",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "electrical",
        question: "Trim indicator LED",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "electrical",
        question: "Trim gauge",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "electrical",
        question: "MOBI head",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "paint", actionRequired: true, reason: 'has missing paint', action: 'painting white'},
            {option: "broken antenna(s)", actionRequired: true, reason: 'antennas(s) are damaged', action: 'replacing damaged antenna(s)'},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "deck",
        question: "MOBI head post",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "paint", actionRequired: true, reason: 'has missing paint', action: 'painting grey'},
            {option: "Bushing + locking pin", actionRequired: true, reason: 'bushings and locking pin are in poor condition/missing', action: "replacing bushings and double locking pin with new lanyard"},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "electrical",
        question: "MOBI display",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "electrical",
        question: "MOBI power cable",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "electrical",
        question: "MOBI data cable",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "console",
        question: "MOBI display bracket",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },

    {   section: "engine",
        question: "Forward drive shaft bearings",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "engine",
        question: "Aft drive shaft bearings",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "engine",
        question: "Forward drive shaft containment hoop",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "paint", actionRequired: true, reason: 'has missing paint', action: 'painting black'},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "engine",
        question: "Aft drive shaft containment hoop",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Paint", actionRequired: true, reason: 'has missing paint', action: 'painting black'},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "engine",
        question: "Drive shaft",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "paint", actionRequired: true, reason: 'has missing paint', action: 'painting black'},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "engine",
        question: "Drive shaft U-joints",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "engine",
        question: "Exhaust hose",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "engine",
        question: "Exhaust lagging",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "bilge",
        question: "Bilge pump",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "bilge",
        question: "Bilge pump hoses",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "bilge",
        question: "Bilge pump float switch",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "bilge",
        question: "Trim pump",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "bilge",
        question: "Trim pump solenoids",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "bilge",
        question: "Trim pump hoses",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "bilge",
        question: "Trim pump reservoir",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Change Fluid", actionRequired: true, reason: 'fluid is old', action: 'removing existing fluid and filling with new'},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "bilge",
        question: "Seacock",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Class B", actionRequired: true, reason: 'condition is unsat', action: 'accomplishing the requirements of class B overhaul'},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "electrical",
        question: "Batteries",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },
    {   section: "electrical",
        question: "Battery terminal connections",
        answers: [
            {option: "Do Nothing", actionRequired: false},
            {option: "Replace", actionRequired: true},
        ]
    },

]

let questionX = 0;

//stores an object of arrays that contains the condition for each section
let assessmentNum = JSON.parse(localStorage.getItem('assessmentNumber')) || 1;
const toDo = JSON.parse(localStorage.getItem('toDoList')) || {1:{hull:[],outdrive:[],sponson:[],deck:[],console:[],electrical:[],engine:[],bilge:[], hullNum:[]}, 2:{hull:[],outdrive:[],sponson:[],deck:[],console:[],electrical:[],engine:[],bilge:[],hullNum:[]}}; 
//when button is pressed, the timer starts and the required html elements get appended to container
function startingQuiz() {
    if (assessmentNum == 1) {
        localStorage.clear();
    }
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
        const btn = document.createElement('button');
        options.append(btn);
        btn.classList.add('answer');
        btn.setAttribute('data-actionRequired', questions[questionX].answers[i].actionRequired)
        btn.setAttribute('data-option', questions[questionX].answers[i].option)
        if (i != 0 && i != questions[questionX].answers.length -1) {
            btn.setAttribute('data-reason', questions[questionX].answers[i].reason)
            btn.setAttribute('data-action', questions[questionX].answers[i].action)
        }
        btn.textContent = questions[questionX].answers[i].option;
        btn.addEventListener('click', next)
        btn.addEventListener('touch', next)
        if (i == questions[questionX].answers.length -1) {
            addCustom()
        }
    }

function addCustom() {
    const formTemplate = document.createElement('div')
       formTemplate.innerHTML = 
       `<hr style='margin-top:20px;margin-bottom:10px;'>
       <h3>Custom Input:</h3>
       <input type='text' id='customCondition' placeholder='condition is...'>
        <input type='text' id='customAction' placeholder='recommend...'>
        <button id='submitCustom'>Submit</button>`
    options.append(formTemplate)
    const submitButtonEl = document.querySelector('#submitCustom')
    submitButtonEl.addEventListener('click', submitCustom)
}

function submitCustom() {
    const condition = document.querySelector('#customCondition').value;
    const recommendation = document.querySelector('#customAction').value
    const item = questions[questionX].question
    const section = questions[questionX].section
    toDo[assessmentNum][section].push(`${item} condition is ${condition}, recommend ${recommendation}.`)
    console.log(toDo)
    questionX++;
    checkEnd();
}

    //when user chooses an answer, this function determines if that actionRequired is true or false (right or wrong)
    function next() {
        if (this.attributes[1].value == 'true') { //if user selects an option that requires an action, this runs
            const section = questions[questionX].section
            if (this.attributes[2].value == 'Replace') {
                toDo[assessmentNum][section].push(`${questions[questionX].question} condition is beyond preservation or repair, recommend replacing with new.`)
            }
            else if (this.attributes[2].value != 'Replace') {
                toDo[assessmentNum][section].push(`${questions[questionX].question} ${this.attributes[3].value}, recommend ${this.attributes[4].value}.`)
            }
            questionX++;
            checkEnd();
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
    document.querySelector('#submit').addEventListener("click", generate)
    document.querySelector('#submit').addEventListener("touch", generate)
}

function generate(event) {
    event.preventDefault();
    toDo[assessmentNum].hullNum.push(document.querySelector('#hullNumberInput').value);
    localStorage.setItem('assessmentNumber', JSON.stringify(assessmentNum))
    localStorage.setItem('toDoList', JSON.stringify(toDo)); //stores the sorted array in local
    window.open('https://cartaud.github.io/smallBoatsSOW/assets/assessment/assessmentOutput/assessmentOutput.html', '_self'); //opens up scoreboard page
}