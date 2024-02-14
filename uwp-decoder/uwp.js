var DATA = {
    size: {
        code: true,
        "0": "&lt;1000km, Neglible&nbsp;gravity",
        "1": "1,600km, 0.05 G",
        "2": "3,200km, 0.15 G",
        "3": "4,800km, 0.25 G",
        "4": "6,400km, 0.35 G",
        "5": "8,000km, 0.45 G",
        "6": "9,600km, 0.7G ",
        "7": "11,200km, 0.9 G",
        "8": "12,800km, 1 G",
        "9": "14,400km, 1.25 G",
        "A": "16,000km, 1.4 G"
    },
    atmo: {
        code: true,
        "0": "No&nbsp;atmosphere, Vacc&nbsp;Suit",
        "1": "Trace, 0.001-0.1&nbsp;atm, Vacc&nbsp;Suit",
        "2": "Very&nbsp;Thin, Tainted, 0.1-0.4&nbsp;atm, Respirator, Filter",
        "3": "Very&nbsp;Thin, 0.1-0.4&nbsp;atm, Respirator",
        "4": "Thin, Tainted, 0.4-0.7&nbsp;atm, Filter",
        "5": "Thin, 0.4-0.7&nbsp;atm",
        "6": "Standard, 0.7-1.5&nbsp;atm",
        "7": "Standard, Tainted, 0.7-1.5&nbsp;atm, Filter",
        "8": "Dense, 1.5-2.5&nbsp;atm",
        "9": "Dense, tainted, 1.5-2.5&nbsp;atm, Filter",
        "A": "Exotic, Varies, Air&nbsp;Supply",
        "B": "Corrosive, Varies, Vacc&nbsp;Suit",
        "C": "Insidious, Varies, Vacc&nbsp;Suit",
        "D": "Very Dense, &gt;2.5&nbsp;atm, Altitude&nbsp;dependent",
        "E": "Low, &lt;0.5&nbsp;atm, Altitude&nbsp;dependent",
        "F": "Unusual, Varies, Varies"
    },
    hydro: {
        code: true,
        "0": "&lt;&nbsp;5%, Desert world",
        "1": "5-15%, Dry world",
        "2": "15-25%, A few small seas",
        "3": "25-35%, Small seas and oceans",
        "4": "35-45%, Wet world",
        "5": "45-55%, A large ocean",
        "6": "55-65%, Large oceans",
        "7": "55-65%, Earth-like oceans",
        "8": "75-85%, Few islands and archipelagoes",
        "9": "85-95%, Almost entirely water",
        "A": "&gt 95%, Waterworld"
    },
    pop: {
        code: true,
        "0": "Uninhabited",
        "1": "1-100",
        "2": "100-1000",
        "3": "1-10 K",
        "4": "10-100 K",
        "5": "0.1-1 million",
        "6": "1-10 million",
        "7": "10-100 million",
        "8": "0.1-1 billion",
        "9": "1-10 billion",
        "A": "10-100 billion",
        "B": "0.1-1 trillion",
        "C": "&gt 1 trillion",
    },
    gov: {
        code: true,
        "0": "None",
        "1": "Corporate",
        "2": "Participatory democracy",
        "3": "Self-perpetuating oligarchy",
        "4": "Representative democracy",
        "5": "Feudal technocracy",
        "6": "Captive government",
        "7": "Balkanized",
        "8": "Meritocratic bureaucracy",
        "9": "Entrenched bureaucracy",
        "A": "Charismatic dictator",
        "B": "Non-charismatic leader",
        "C": "Charismatic oligarchy",
        "D": "Theocracy",
        "E": "Theocratic dictator",
        "F": "Totalitarian oligarchy"
    },
    law: {
        code: true,
        "0": "No prohibitions",
        "1": "Body pistols, explosives, and poison gas probihited",
        "2": "Portable energy weapons prohibited",
        "3": "Military weapons prohibited",
        "4": "Personal concealable weapons prohibited",
        "5": "Hunting weapons and stunners allowed",
        "6": "Only hunting weapons allowed, carry restricted",
        "7": "Hunting weapons banned",
        "8": "Long bladed weapons controlled",
        "9": "Possession of weapons outside one's residence prohibited",
        "A": "All weapons prohibited",
        "B": "All weapons prohibited",
        "C": "All weapons prohibited",
        "D": "All weapons prohibited",
        "E": "All weapons prohibited",
        "F": "All weapons prohibited"
    },
    tech: {
        override: true,
        code: true,
        "0": "0",
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
        "A": "10",
        "B": "11",
        "C": "12",
        "D": "13",
        "E": "14",
        "F": "15",
    },
    starport: {
        code: true,
        "A": "Excellent, 1D&nbsp;x&nbsp;Cr1000, Refined&nbspfuel<br>Shipyard&nbsp;(all), Repair, Highport&nbsp;6+",
        "B": "Good, 1D&nbsp;x&nbsp;Cr500, Refined&nbspfuel<br>Shipyard&nbsp;(spacecraft), Repair, Highport&nbsp;8+",
        "C": "Routine, 1D&nbsp;x&nbsp;Cr100, Unrefined&nbspfuel<br>Shipyard&nbsp;(small&nbsp;craft), Repair, Highport&nbsp;10+",
        "D": "Poor, 1D&nbsp;xCr10, Unrefined&nbspfuel<br>Limited repair, Highport&nbsp;12+",
        "E": "Frontier, No&nbsp;cost, No&nbspfuel<br>No&nbsp;facilities",
        "F": "No starport",
        "X": "No starport",
    },
    bases: {
        multicode: true,
        "C": "Corsair",
        "D": "Depot",
        "M": "Military",
        "N": "Naval",
        "S": "Scout",
        "W": "Way Station"
    },
    zone: {
        code: true,
        "A": "Amber: Caution",
        "R": "Red: Interdicted",
        "G": "Green"
    },
    trade: {
        array: true,
        "Ab": "Data repository",
        "An": "Ancients site",
        "Ag": "Agricultural",
        "As": "Asteroid",
        "Ax": "Construct",
        "Ba": "Barren",
        "Co": "Cold",
        "Cp": "Subsector capital",
        "Cs": "Sector capital",
        "Cx": "Imperial capital",
        "Cy": "Colony",
        "Da": "Dangerous",
        "De": "Desert",
        "Di": "Die back",
        "Fa": "Farming",
        "Fl": "Fluid oceans",
        "Fr": "Frozen",
        "Fo": "Forbidden",
        "Ga": "Garden",
        "Hi": "High population",
        "He": "Hell",
        "Ho": "Hot",
        "Ht": "High tech",
        "Ic": "Ice capped",
        "In": "Industrial",
        "Lk": "Tide-Locked",
        "Lo": "Low population",
        "Lt": "Low tech",
        "Mi": "Mining",
        "Mr": "Military rule",
        "Na": "Non-Agricultural",
        "Ni": "Non-Industrial",
        "Oc": "Ocean",
        "Pa": "Pre-Agricultural",
        "Pe": "Penal colony",
        "Ph": "Pre-High population",
        "Pi": "Pre-Industrial",
        "Po": "Poor",
        "Pr": "Pre-Rich",
        "Pz": "Puzzle",
        "Re": "Reserve",
        "Ri": "Rich",
        "Rs": "Research station",
        "Sa": "Satellite",
        "Tr": "Tropical",
        "Tu": "Tundra",
        "Tz": "Twilight zone",
        "Va": "Vacuum",
        "Wa": "Waterworld",
        "Xb": "X-Boat station",
    }
}

function putInfo(map) {
    for (key in map) {
        let valueCell = document.getElementById(key);
        valueCell.innerHTML = map[key];
        let details = DATA[key];
        if (details) {
            let detailCell = document.getElementById(key + "X");
            detailCell.innerHTML = "";
            if (details.override) {
                detailCell = valueCell;
            }
            if (details.code) {
                detailCell.innerHTML = details[map[key].toUpperCase()];
            } else if (details.multicode) {
                detailCell.innerHTML = map[key].split("").map((ch) => details[ch.toUpperCase()]).join(", ");
            } else if (details.array) {
                detailCell.innerHTML = map[key].map((part) => details[part] || part).join(", ");
            }
        }
    }
}

function codeKeypress(event) {
    if (event.key === "Enter") {
        codeDecode();
    }
}

function codeDecode() {
    let input = document.getElementById("uwp-code");
    let code = input.value.trim().replace(/[\t ]+/g, " ");
    input.value = code;
    if (code.match(/^\w+ \d\d\d\d/)) {
        // Mtg2 -style
        // Cogri 0101 CA6A643-9 N Ri Wa A
        profileDecode(code);
    } else if (code.match(/^\d\d\d\d[\t ]/)) {
        // Traveller map -style
        // 0103 Kashmiir A9687BB-C Ag Ri Cp Pz { 4 } (D6E+5) [9B7E] BCF N A 313 10 ImDv M1 V M2 V      
        mapDecode(code);
    } else if (code.match(/^\w\w\w\w\w\w\w-\w/)) {
        // Just the UWP
        // A9687BB-C
        uwpDecode(code);
    } else if (code.length > 0) {
        alert("Cannot decode: " + code);
    }
}

function profileDecode(uwp) {
    let [world, map, code, bases, ...rest]  = uwp.split(/ +/);
    let [zone, ...trade] = rest.reverse();
    if (trade) {
        console.log({trade: trade, zone: zone});
        trade = trade.reverse();
        if (zone.length > 1) {
            trade.add(zone);
            zone = "unclassified";
        }
    }
    doDecode(world, map, code, bases, trade, zone);
}

function mapDecode(code) {
    let [map, world, uwp, ...rest1]  = code.split(/[\t ]+/);
    let [trades, ix, ...rest2] = rest1.join(" ").split(/ ?[{}] ?/);
    let [ex, cx, n, bases, zone, ...rest3] = rest2.join(" ").split(/[\t ]+/);
    doDecode(world, map, uwp, bases, trades.split(/ +/), zone);
}

function uwpDecode(uwp) {
    doDecode("", "", uwp, "", "", "");
}

function doDecode(world, map, uwp, bases, trade, zone) {
    putInfo({
        world: world,
        map: map,
        starport: uwp[0],
        size: uwp[1],
        atmo: uwp[2],
        hydro: uwp[3],
        pop: uwp[4],
        gov: uwp[5],
        law: uwp[6],
        // 7 is always a dash?
        tech: uwp[8],
        bases: bases,
        trade: trade,
        zone: zone
    });
}

codeDecode();
