// // For feet to inches conversion
var feet = document.getElementById('feet');
var inches = document.getElementById('inches');

feet.addEventListener('input', function() {
    let f = parseFloat(this.value); // Parse the input as a float
    let i = f * 12;
    inches.value = i;
});

inches.addEventListener('input', function() {
    let i = parseFloat(this.value); // Parse the input as a float
    let f = i / 12;
    feet.value = f;
});

// For meters to centimeters conversion
var meters = document.getElementById('meters');
var centimeters = document.getElementById('centimeters');

meters.addEventListener('input', function() {
    let m = parseFloat(this.value); // Parse the input as a float
    let cm = m * 100; // 1 meter = 100 centimeters
    centimeters.value = cm;
});

centimeters.addEventListener('input', function() {
    let cm = parseFloat(this.value); // Parse the input as a float
    let m = cm / 100; // 1 centimeter = 0.01 meter
    meters.value = m;
});

// For centimeters to inches conversion
var centimetersToInches = document.getElementById('centimetersToInches');
var inchesFromCentimeters = document.getElementById('inchesFromCentimeters');

centimetersToInches.addEventListener('input', function() {
    let cm = parseFloat(this.value); // Parse the input as a float
    let inches = cm * 0.393701; // 1 centimeter = 0.393701 inches
    inchesFromCentimeters.value = inches;
});

inchesFromCentimeters.addEventListener('input', function() {
    let inches = parseFloat(this.value); // Parse the input as a float
    let cm = inches * 2.54; // 1 inch = 2.54 centimeters
    centimetersToInches.value = cm;
});
