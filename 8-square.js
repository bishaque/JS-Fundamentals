const args = process.argv.slice(2);
const size = Number(args[0]);

if (!Number.isInteger(size)) {
  console.log("Missing size");
} else {
  let i = 0;
  while (i < size) {
    console.log("X".repeat(size));
    i++;
  }
}
