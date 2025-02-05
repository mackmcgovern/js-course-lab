let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
  userMessage = userRole === "admin" ? "Welcome, Admin!" : "Welcome, User!";
} else {
    userMessage = "Please login to access the system."
}

console.log(userMessage)

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
