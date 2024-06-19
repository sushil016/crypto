const crypto = require("crypto")

const PROBLEM_1 = 'what the tempertaure outside';
const option1 = '23'
const option2 = '27'
const option3 = '26'
const option4 = '29'



const problem_2 = 'can you solve the integration of root tanx'
const op1 = 'yes'
const op2 = 'no'


function encryption(text ,key ,iv){
    const algo = 'aes-256-cbc'

    const cipher = crypto.createCipheriv(algo,key,iv);

    let  encrypt = cipher.update(text,'utf8', 'hex');
     encrypt += cipher.final('hex')
     return encrypt;
}

function deCryption(encrypt , key, iv){
    const algo = 'aes-256-cbc';

    const decypher = crypto.createDecipheriv(algo,key,iv);
    let decrypt = decypher.update(encrypt,'hex','utf8');
    decrypt += decypher.final('utf8')
    return decrypt;
}

const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const encryptedProblem = encryption(PROBLEM_1,key,iv);
const encryptedsol1 = encryption(option1,key,iv);
const encryptedsol2 = encryption(option2,key,iv);
const encryptedsol3 = encryption(option3,key,iv);
const encryptedsol4 = encryption(option4,key,iv);

const encrytionp2 = encryption(problem_2,key,iv)
console.log('p2',encrytionp2)

const decryption2 = deCryption(encrytionp2,key ,iv);
console.log('decryption of the problem statement is', decryption2);

console.log('encrypted problem statement',encryptedProblem);
console.log('encrypted problem solution1',encryptedsol1);
console.log('encrypted problem solution2',encryptedsol2);
console.log('encrypted problem solution3',encryptedsol3);
console.log('encrypted problem solution4',encryptedsol4);


const decryptedProblem = deCryption(encryptedProblem,key,iv)
const orignalsol1 = deCryption(encryptedsol1,key,iv)
const orignalsol2 = deCryption(encryptedsol2,key,iv)
const orignalsol3 = deCryption(encryptedsol3,key,iv)
const orignalsol4 = deCryption(encryptedsol4,key,iv)

console.log('decrypted problem statement',decryptedProblem);
console.log('decrypted problem sol1',orignalsol1);
console.log('decrypted problem solution2',orignalsol2 );
console.log('decrypted problem solution3',orignalsol3);
console.log('decrypted problem solution4',orignalsol4);

