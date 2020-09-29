const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let decoded = ''
    expr.split('**********').forEach(word => {
        let output = ''
        for (let i = 0; i < word.length; i+= 10) {
            let substr = word.substr(i, 10).split('').reverse().join('')
            let code =''
            for (let j = 0; j < 10; j += 2) {
                if (substr.substr(j, 2) === '01') code = '.' + code
                else if (substr.substr(j, 2) === '11') code = '-' + code
            }
            if (MORSE_TABLE[code]) output += MORSE_TABLE[code]
        }
        decoded += output + ' '
    })
    return decoded.trim()
}

module.exports = {
    decode
}
