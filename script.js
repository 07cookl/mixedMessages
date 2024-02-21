const partOne = [
    "Dream fearlessly.",
    "Let your imagination soar beyond the constraints of doubt and limitation.",
    "Believe wholeheartedly in your potential and the power of your dreams.",
    "Then, with unwavering determination, take the necessary steps to turn those dreams into reality.",
    "Remember, the journey may be challenging, but with belief as your compass, you will ultimately achieve greatness.",
    "Triumph gloriously."
]

const partTwo = [
    "Start with purpose.",
    "Embrace each new beginning as an opportunity for growth and transformation.",
    "Strive relentlessly towards your goals, fueled by passion and perseverance.",
    "As you navigate the twists and turns of your journey, remain steadfast in your commitment to excellence.",
    "And when obstacles arise, view them not as barriers, but as stepping stones on the path to success.",
    "Your journey starts now; seize it with courage and conviction."
]

const partThree = [
    "Imagine the possibilities.",
    "Envision a future filled with boundless opportunities and endless potential.",
    "Then, with unwavering faith in yourself and your abilities, take decisive action to bring your vision to life.",
    "Along the way, embrace challenges as opportunities for growth and learning.",
    "Conquer your fears and doubts with determination and resilience.",
    "Remember, your potential is limitless, and with each step forward, you inch closer to realizing your dreams."
]

const phraseParts = [partOne, partTwo, partThree];

const randomPhrase = (part) => {
    randomIndex = Math.floor(Math.random() * 6);
    return part[randomIndex];
}

const getPhrase = (phraseParts) => {
    const wholePhrase = [];

    phraseParts.forEach(part => {
        let phrase = "> " + randomPhrase(part);
        wholePhrase.push(phrase);
    });

    console.log(wholePhrase.join("\n\n"));
};

getPhrase(phraseParts);
