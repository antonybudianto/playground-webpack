console.log("== begin index.js ==");

if (__FLAG__) {
  console.log("with flag");
} else {
  /**
   * This should not be in `./dist/main.js` along
   * with `dayjs`
   */
  const dayjs = require("dayjs");
  console.log("no flag");
  console.log(dayjs().format("DD/MM/YYYY"));
}

console.log("== end index.js ==");
