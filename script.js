const words = ['seat', 'pen', 'broad', 'vapor', 'ocean',
    'red', 'plate', 'late', 'that', 'ring', 'swim', 'shown',
    'path', 'law', 'list', 'hard', 'plate', 'block', 'two',
    'pupil', 'were', 'lot', 'pay', 'would', 'tired', 'dull',
    'mud', 'sky', 'grew', 'hard', 'ill', 'frame',
    'sport', 'did', 'many', 'been', 'page', 'year', 'trail',
    'earth', 'are', 'while', 'off', 'town', 'doing', 'size',
    'steel', 'sale', 'swam', 'put', 'zero', 'week', 'mill',
    'past', 'aside', 'her', 'cent', 'box', 'fuel', 'block',
    'those', 'late', 'sun', 'map', 'silk', 'lady', 'meant',
    'still', 'shine', 'range', 'loud', 'fox', 'gate', 'slide',
    'each', 'nails', 'flag', 'exist', 'door', 'luck', 'down',
    'poem', 'depth', 'press', 'crowd', 'herd', 'drink', 'worry',
    'dried', 'dig', 'new', 'rest', 'play', 'win', 'strong'];

const numberOfWords = words.length;
const passwordLength = 6;
const chars = '0123456789abcdef!@#$%&'
const charsLength = chars.length;
function generatePassword() {
    let password = '';
    const input = document.querySelector('.input');
    const randomNumber = Math.floor(Math.random() * numberOfWords);
    const anotherRandomNumber = Math.floor(Math.random() * passwordLength);
    for (let i = 0; i < 6; i++) {
        if (i == anotherRandomNumber) {
            password += words[randomNumber]
        }
        else {
            const num = Math.floor(Math.random() * (charsLength + 1));
            password += chars.substring(num, num + 1);
        }
    }
    input.innerHTML = password;
}