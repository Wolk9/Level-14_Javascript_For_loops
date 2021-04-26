// Multiplication tables

for (x = 1; x <= 10; x++) {
  console.log("tafel van " + x);
  for (y = 1; y <= 10; y++) {
    //console.log(y);
    let outcome = x * y;
    console.log(x + " x " + y + " = " + outcome);
  }
  console.log("--------------");
}
