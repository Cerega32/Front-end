function getWaterState(temperature) {
    return temperature > 0 ? "Вода!" : "Лед!";
}

console.log(getWaterState(23));
console.log(getWaterState(-5));

console.log((Math.random() < 0.5 ? Math.min: Math.max)(-1,1));

