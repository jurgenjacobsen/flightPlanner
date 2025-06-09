export default {
    id: 'C152',
    name: 'Cessna 152',
    manufacturer: 'Cessna',
    limitations: {
        weight: {},
        speed: {}
    },
    performance: {
        takeoff: {},
        climb: {
            isaCorrection: 10, // Increase 10% for each 10C above ISA
            altitudes: {
                'SL':       { temp: 15, speed: 67, rate: 715, time: 0,  fuelUsed: 0,   distance: 0 },
                '1000ft':   { temp: 13, speed: 66, rate: 675, time: 1,  fuelUsed: 0.2, distance: 2 },
                '2000ft':   { temp: 11, speed: 66, rate: 630, time: 3,  fuelUsed: 0.4, distance: 3 },
                '3000ft':   { temp: 9,  speed: 65, rate: 590, time: 5,  fuelUsed: 0.7, distance: 5 },
                '4000ft':   { temp: 7,  speed: 65, rate: 550, time: 6,  fuelUsed: 0.9, distance: 7 },
                '5000ft':   { temp: 5,  speed: 64, rate: 505, time: 8,  fuelUsed: 1.2, distance: 9 },  
                '6000ft':   { temp: 3,  speed: 63, rate: 465, time: 10, fuelUsed: 1.4, distance: 12 },
                '7000ft':   { temp: 1,  speed: 63, rate: 425, time: 13, fuelUsed: 1.7, distance: 14 },
                '8000ft':   { temp: -1, speed: 62, rate: 380, time: 15, fuelUsed: 2.0, distance: 17 },
                '9000ft':   { temp: -3, speed: 62, rate: 340, time: 18, fuelUsed: 2.3, distance: 21 },
                '10000ft':  { temp: -5, speed: 61, rate: 300, time: 21, fuelUsed: 2.6, distance: 25 },
                '11000ft':  { temp: -7, speed: 61, rate: 255, time: 25, fuelUsed: 3.0, distance: 29 },
                '12000ft':  { temp: -9, speed: 60, rate: 215, time: 29, fuelUsed: 3.4, distance: 34 },
            }
        },
        cruise: {
            // Fuel flow in gallons per hour (gph)
            // Speed in knots true airspeed (ktas) - Should be corrected if the aicraft does not have speed fairings
            // Calculations are to be made using BHP

            speedFairingCorrection: -2,
            '2000ft': {
                STD: {
                    75: { rpm: 2400, ktas: 101, gph: 6.1 },
                    66: { rpm: 2300, ktas: 96,  gph: 5.4 },
                    59: { rpm: 2200, ktas: 91,  gph: 4.8 },
                    53: { rpm: 2100, ktas: 86,  gph: 4.3 },
                    47: { rpm: 2000, ktas: 80,  gph: 3.9 },
                },
                '-20': {
                    71: { rpm: 2300, ktas: 97,  gph: 5.7 },
                    62: { rpm: 2200, ktas: 92,  gph: 5.1 },
                    55: { rpm: 2100, ktas: 87,  gph: 4.5 },
                    49: { rpm: 2000, ktas: 81,  gph: 4.1 },
                },
                '+20': {
                    70: { rpm: 2400, ktas: 101, gph: 5.7 },
                    63: { rpm: 2300, ktas: 96,  gph: 5.1 },
                    56: { rpm: 2200, ktas: 90,  gph: 4.6 },
                    51: { rpm: 2100, ktas: 85,  gph: 4.2 },
                    46: { rpm: 2000, ktas: 79,  gph: 3.8 },
                },
            }
        },
        landing: {},
    }
}

