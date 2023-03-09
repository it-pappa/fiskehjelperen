(function () {
  function calculateFishWeight(length, girth) {
    length = parseFloat(length);
    girth = parseFloat(girth);
    return (length * girth / 800 );
  }

  var fishWeight = document.getElementById("fishWeight");
  if (fishWeight) {
    fishWeight.onsubmit = function () {
      this.weight.value = calculateFishWeight(this.length.value, this.girth.value);
      return false;
    };
  }
}());
