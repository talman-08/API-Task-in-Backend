import bcrypt from "bcrypt";

const plainPassword = "doe";

const hash = await bcrypt.hash(plainPassword, 10);
console.log("Generated hash:", hash);







// // hashPassword.js
// import bcrypt from "bcrypt";

// const plainPassword = "doe";

// bcrypt.hash("doe", 10).then((hash) => {
//   console.log("Hashed password:", hash);
// });