(function () {
  function calculateFishWeight(length, girth) {
    length = parseFloat(length);
    girth = parseFloat(girth * 100);
    return (girth / length / length / length);
  }

  var fishWeight = document.getElementById("fishWeight");
  if (fishWeight) {
    fishWeight.onsubmit = function () {
      this.weight.value = calculateFishWeight(this.length.value, this.girth.value);
      return false;
    };
  }
}());
