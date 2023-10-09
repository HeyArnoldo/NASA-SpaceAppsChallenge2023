const data = [
    {
        city: 'lima',
        climate: [
            "Coastal",
            "Arid",
            "Temperate"
        ],
        temperature: {
            now: '20 °C', // 'now' is optional, if not present, it will be 'max'
            max: "25 °C",
            min: "15 °C",
            humidity: "60%"
        },
        recomendations: [
            "• Wear light and cool clothing.",
            "• Drink plenty of water.",
            "• Avoid exposure to the sun during the hottest hours."
        ],
        conditions : [
            {
                risk: "HEATSTROKE",
                recomendations: [
                    "• Drink plenty of water.",
                    "• Avoid sun exposure during the hottest hours.",
                    "• Seek shade or a cool place if feeling dizzy or experiencing a headache.",
                ]
            },
            {
                risk: "THUNDERSTORMS",
                recomendations: [
                    "• Carry an umbrella or raincoat",
                    "• Avoid outdoor activities during the storms.",
                ]
            }
        ]
    },
    {
        city: 'cusco',
        climate: [
            "Andean",
            "Rainy",
            "Cold"
        ],
        temperature: {
            now: '10 °C', // 'now' is optional, if not present, it will be 'max'
            max: "15 °C",
            min: "5 °C",
            humidity: "80%"
        },
        recomendations: [
            "• Wear warm clothing.",
            "• Avoid exposure to the cold.",
            "• Drink plenty of hot water.",
            "• Take precautions against the rain."
        ],
        conditions: [
            {
                condition: "Minimum temperature of 5°C and relative humidity of 90%",
                risk: "HYPOTHERMIA",
                recomendations: [
                    "• Wear warm clothing.",
                    "• Avoid exposure to the cold.",
                    "• Seek a warm place if feeling cold or trembling.",
                ]
            },
            {
                condition: "Probability of snowfall",
                risk: "HAZARDOUS DRIVING CONDITIONS",
                recomendations: [
                    "• Check the weather forecast before driving.",
                    "• Take additional precautions if encountering snow or ice on the road.",
                ]
            }
        ]
    },
    {
        city: 'arequipa',
        climate: [
            "Andean",
            "Dry",
            "Mild"
        ],
        temperature: {
            now: '15 °C', // 'now' is optional, if not present, it will be 'max'
            max: "20 °C",
            min: "10 °C",
            humidity: "40%"
        },
        recomendations: [
            "• Wear light and warm clothing.",
            "• Avoid sun exposure during the hottest hours.",
            "• Drink plenty of water."
        ],
        conditions: [
            {
                condition: "Intense solar radiation",
                risk: "SUNBURNS",
                recomendations: [
                    "• Use sunscreen with an SPF of at least 30.",
                    "• Cover your head and skin with protective clothing.",
                    "• Seek shade during the hottest hours of the day.",
                ]
            },
            {
                condition: "Probability of strong winds: property damage and power cuts",
                risk: "STRONG WINDS",
                recomendations: [
                    "• Recommend staying away from windows and exterior doors.",
                    "• Have an emergency plan in case of power cuts.",
                ]
            }
        ]
    },
    {
        city: 'iquitos',
        climate: [
            "Amazonian",
            "Very rainy",
            "Warm"
        ],
        temperature: {
            now: '30 °C', // 'now' is optional, if not present, it will be 'max'
            max: "35 °C",
            min: "25 °C",
            humidity: "90%"
        },
        recomendations: [
            "• Wear light and cool clothing.",
            "• Avoid exposure to the rain.",
            "• Drink plenty of water."
        ],
        conditions: [
            {
                condition: "Intense rainfall: floods and landslides",
                risk: "FLOODS AND LANDSLIDES",
                recomendations: [
                    "• Avoid areas prone to floods and landslides.",
                    "• Have an emergency plan in case of natural disasters.",
                ]
            },
            {
                condition: "Mosquito activity: risk of mosquito-borne diseases",
                risk: "MOSQUITO-BORNE DISEASES",
                recomendations: [
                    "• Use mosquito repellent.",
                    "• Wear long sleeves and pants.",
                    "• Avoid going out at dawn and dusk, when mosquitoes are most active.",
                ]
            }
        ]
    },
    {
        city: 'chiclayo',
        climate: [
            "Coastal",
            "Warm",
            "Humid"
        ],
        temperature: {
            now: '20 °C', // 'now' is optional, if not present, it will be 'max'
            max: "30 °C",
            min: "20 °C",
            humidity: "80%"
        },
        recomendations: [
            "• Wear light and cool clothing.",
            "• Avoid exposure to the sun during the hottest hours.",
            "• Drink plenty of water."
        ],
        conditions: [
            {
                condition: "Maximum temperature of 35°C and relative humidity of 90%",
                risk: "HEATSTROKE",
                recomendations: [
                    "• Drink plenty of water.",
                    "• Avoid sun exposure during the hottest hours.",
                    "• Seek shade or a cool place if feeling dizzy or experiencing a headache.",
                ]
            },
            {
                condition: "Probability of high tides: coastal floods",
                risk: "COASTAL FLOODS",
                recomendations: [
                    "• Avoid coastal areas during high tides.",
                    "• Have an emergency plan in case of natural disasters.",
                ]
            }
        ]
    }
];

export default data;