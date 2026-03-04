function login(user) {
    if (user.role === "student") {
        return "Student Dashboard";
    }
    return "Access Denied";
}

module.exports = login;
