const http = require("http");

// Try to login first
const loginBody = JSON.stringify({
    email: "admin@mahi.com",
    password: "admin123"
});

function tryLogin() {
    const options = {
        hostname: "localhost",
        port: 5000,
        path: "/api/auth/login",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(loginBody)
        }
    };

    const req = http.request(options, (res) => {
        let data = "";
        res.on("data", chunk => data += chunk);
        res.on("end", () => {
            console.log("Login Status:", res.statusCode);
            console.log("Login Response:", data);
            if (res.statusCode !== 200) {
                // Try a fresh user
                createUser("demo@mahi.com", "Demo Doctor", "demo123");
            }
        });
    });
    req.on("error", (e) => console.error("Error:", e.message));
    req.write(loginBody);
    req.end();
}

function createUser(email, name, password) {
    const body = JSON.stringify({ name, email, password, role: "admin" });
    const options = {
        hostname: "localhost",
        port: 5000,
        path: "/api/auth/register",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(body)
        }
    };
    const req = http.request(options, (res) => {
        let data = "";
        res.on("data", chunk => data += chunk);
        res.on("end", () => {
            console.log("Register Status:", res.statusCode);
            console.log("Register Response:", data);
        });
    });
    req.on("error", (e) => console.error("Error:", e.message));
    req.write(body);
    req.end();
}

tryLogin();
