// Import module into your application
const crypto = require("crypto");

const algorithm = "aes-192-cbc";
const password = "password";

// We will first generate the key, as it is dependent on the algorithm.
// In this case for aes192, the key is 24 bytes (192 bits).
crypto.scrypt(password, "salt", 24, (err, key) => {
  if (err) throw err;
  // After that, we will generate a random iv (initialization vector)
  crypto.randomFill(new Uint8Array(16), (err, iv) => {
    if (err) throw err;

    // Create Cipher with key and iv
    const cipher = crypto.createCipheriv(algorithm, key, iv);

    let encrypted = "";
    cipher.setEncoding("hex");

    console.log("Password Was:", password);

    cipher.on("data", (chunk) => (encrypted += chunk));
    cipher.on("end", () => console.log("Encrypted Password:", encrypted)); // Prints encrypted data with key

    cipher.write("some clear text data");
    cipher.end();
  });
});
