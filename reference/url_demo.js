const url = require('url')

const myUrl = new URL(
  'http://mywebsite.com:8000/hello.html?id=100&status=active'
)

// SERIALIZED URL
console.log(myUrl.href) // http://mywebsite.com/hello.html?id=100&status=active
console.log(myUrl.toString()) // http://mywebsite.com/hello.html?id=100&status=active

// HOST (ROOT DOMAIN)
console.log(myUrl.host) // mywebsite.com:8000

// HOSTNAME (DOES NOT GIVE PORT)
console.log(myUrl.hostname) // mywebsite.com

// PATHNAME
console.log(myUrl.pathname) // hello.html

// SERIALIZED QUERY
console.log(myUrl.search) // ?id=100&status=active

// PARAMS OBJECT
console.log(myUrl.searchParams) // URLSearchParams { 'id' => '100', 'status' => 'active' }

// ADD PARAM
myUrl.searchParams.append('abc', '123')
console.log(myUrl.searchParams) // URLSearchParams { 'id' => '100', 'status' => 'active', 'abc' => '123' }

// LOOP THROUGH PARAMS
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))
// id: 100
// status: active
// abc: 123
