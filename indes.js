// Buffer.from('hello world')
// // <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>

// Buffer.from('hello world').toString('hex')
// // '68656c6c6f20776f726c64'

// Buffer.from('hello world').toString('base64')
// // 'aGVsbG8gd29ybGQ='

// Buffer.from('aGVsbG8gd29ybGQ=', 'base64').toString()
// // 'hello world'

// Buffer.from('68656c6c6f20776f726c64', 'hex').toString()
// // 'hello world'

// // [...Buffer.from('hello world')]
// // [ 104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100 ]

new TextEncoder().encode('hello world')
// Uint8Array(11) [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]

new TextDecoder().decode(new Uint8Array([104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]))
// "hello world"

[...(new TextEncoder().encode('hello world'))]
  .map(b => b.toString(16).padStart(2, "0")).join('')
// "68656c6c6f20776f726c64"

"68656c6c6f20776f726c64".match(/.{1,2}/g)
  .map(e => String.fromCharCode(parseInt(e, 16))).join('')
// 'hello world'

btoa('hello world')
// "aGVsbG8gd29ybGQ="

atob('aGVsbG8gd29ybGQ=')
// "hello world"