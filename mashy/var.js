const accountId = 144553
let accountEmail = "hello@google.com"
var accountPassword = "12345"
//prefer not to use var, because of issue in block scope and functional scope

accountCity = "Delhi"
//you can but, not a good practice
let accountState; //undefined


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

