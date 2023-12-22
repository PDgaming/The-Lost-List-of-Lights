import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function animateText(text) {
    let i = 0;

    const interval = setInterval(() => {
        const chunk = text.slice(i, i + 1);

        if (chunk === '${') {
            // Find the closing `}`
            const closingIndex = text.indexOf('}', i);

            // Extract the expression within the template literal
            const expression = text.slice(i + 2, closingIndex);

            // Evaluate the expression using `eval` (be cautious with this method)
            const evaluated = eval(expression);

            // Print the evaluated result
            process.stdout.write(evaluated);

            // Advance the index to the closing `}`
            i = closingIndex + 1;
        } else {
            // Print regular characters
            process.stdout.write(chunk);
            i++;
        }

        if (i === text.length) {
            clearInterval(interval);
        }
    }, 100);
}

async function scene1() {
    const rainbowTitle = chalkAnimation.rainbow("Scene 1: The Mishap on Mount Merrily:");
    await sleep(1000);
    rainbowTitle.stop();
    await animateText(`It's Christmas Eve at the North Pole, and Jingle is bursting with excitement. Today, he gets to deliver presents in India, a land he's dreamt of visiting for years. Dressed in his bright kurta and festive turban, he hops aboard the miniature reindeer-drawn rickshaw gifted to him by the Indian Ambassador.
As they soar through the snowy sky, a mischievous reindeer named Tikka decides to chase snowflakes, causing the rickshaw to bump into a cloud and tumble towards Earth! Jingle lands with a soft thud in a vibrant Indian village, but amidst the confusion, he realizes the worst has happened - ${chalk.red("The Naughty and Nice List has vanished!")}`)
    await sleep(62000);
};

async function scene2() {
    const rainbowTitle = chalkAnimation.rainbow("Scene 2: A Helping Hand and Hidden Magic:");
    await sleep(1000);
    rainbowTitle.stop();
    await animateText(`Jingle stumbles upon Rani, a resourceful village child who immediately offers to help. Together, they follow a trail of twinkling lights from the wreckage, leading them to an ancient mango tree known for its magical aura. Rani explains that the tree spirits might hold the key to finding the lost list.
Inside the tree's hollow trunk, they discover a mischievous Monkey Spirit sporting a Santa hat. He reveals that ${chalk.red("the list has scattered into magical gingerbread cookies")}, each representing a different region of India and holding fragments of the Naughty and Nice information. To retrieve them, Jingle and Rani must embark on a festive quest across the country.\n`);
    await sleep(74000);
};

// console.log("They face a hidden challenge - a grumpy elf named Grumpo, who believes Christmas should only be celebrated in traditional ways and tries to sabotage their journey.")

async function scene3() {
    const rainbowTitle = chalkAnimation.rainbow("Scene 3: Lessons:");
    await sleep(1000);
    rainbowTitle.stop();
    await animateText(`Rani, who was initially skeptical about Christmas, begins to appreciate its spirit of giving and inclusivity, while Jingle learns to understand and respect the diverse Christmas traditions of India.
 ${chalk.red("Jingle and Rani must use their coding skills and newfound understanding of Indian traditions to win him over and teach him the true meaning of Christmas.")}\n`)
    await sleep(40500);
};

async function scene4() {
    const rainbowTitle = chalkAnimation.rainbow("Scene 4: A Festive Finale:")
    await sleep(1000);
    rainbowTitle.stop();
    await animateText(`${chalk.yellow(`With all the gingerbread cookies recovered, Jingle and Rani return to the mango tree. The Monkey Spirit uses them to reassemble the Naughty and Nice List, revealing a heartwarming surprise: every child in India, naughty or nice, deserves a Christmas miracle.
Jingle, filled with gratitude and newfound knowledge, delivers the gifts with Rani by his side, celebrating Christmas under the mango tree with the entire village. They learn that the magic of Christmas isn't about list-making or tradition, but about the joy of giving, the warmth of community, and the love that transcends cultural differences.`)}\n`)
    await sleep(67500);
};

async function ending() {
    const rainbowTitle = chalkAnimation.rainbow("Thank you so much for playing this game!");
    await sleep(3000);
    rainbowTitle.stop();
};

// await scene1();
// await scene2();
// await scene3();
await scene4();
await ending();
