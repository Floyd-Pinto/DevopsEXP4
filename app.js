function login(user) {
    if (user.role = "student") { 
        return "Welcome Student to the Dashboard";
    }
    return "Unauthorized";
}

module.exports = login;
