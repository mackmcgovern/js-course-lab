// let userRole = "admin";
// let accessLevel;

// if (userRole === "admin") {
//     accessLevel = "Full access granted";
// } else if (userRole === "manager") {
//     accessLevel = "Limited access granted";
// } else {
//     accessLevel = "No access granted";
// }

// console.log("Access Level:", accessLevel);

// let isLoggedIn = true;
// let userMessage;

// if (isLoggedIn) {
//   userMessage = userRole === "admin" ? "Welcome, Admin!" : "Welcome, User!";
// } else {
//     userMessage = "Please login to access the system."
// }

// console.log(userMessage)

let userType = "subscriber";
let userCategory;

switch(userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager"
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown"
}

console.log(`User Category: ${userCategory}`);

let isAuthenticated = true;
let authenticationSatus = isAuthenticated ? "Authenticated" : "Not Authenticated"
console.log(`Authentication Status: ${authenticationSatus}`);


// Practice Task 
let userRole = 'Subscriber'
let serviceAccess;

switch(userRole) {
    case "Employee":
        serviceAccess = "Dietary Services"
        break;
    case "Enrolled Member":
        serviceAccess = "Dietary Services and 1:1 interaction with a dietician."
        break;
    case "Subscriber":
        serviceAccess = "Partial access to facilitate dietary services."
        break;
    default:
        serviceAccess = "No access to dietary services unless enrolled or subscribed."
        break;
}

console.log(`Access to: ${serviceAccess}`);