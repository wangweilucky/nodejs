const crypto = require('crypto');

const hash = crypto.createHash('md5');
const hash256 = crypto.createHash('sha256');
const hashHmac = crypto.createHmac('sha256', 'appkey');

// 可任意多次调用update():
hash.update('Hello, world!');
hash256.update('Hello, nodejs!');
hashHmac.update('Hello, nodejs!');

console.log(hash.digest('hex')); // 7e1977739c748beac0c0fd14fd26a544
console.log(hash256.digest('hex')); // e9251c1c1805fb485e44bd0fba56efd80b113cbb971dc302cf53e9494415520d
console.log(hashHmac.digest('base64')); // Z2wgVb5qih9n6/Vjn3Oh3Me4N8tXSYspWgd8PEhV8WY=


// AES
// 加密
function aesEncrypt(data, key) {
    const cipher = crypto.createCipher('aes192', key);
    var crypted = cipher.update(data, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}
// 解密
function aesDecrypt(encrypted, key) {
    const decipher = crypto.createDecipher('aes192', key);
    var decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}
var data = 'Hello, this is a secret message!';
var key = 'Password!';

var encrypted = aesEncrypt(data, key);
var decrypted = aesDecrypt(encrypted, key);

console.log('Encrypted text: ' + encrypted);
console.log('Decrypted text: ' + decrypted);