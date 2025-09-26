function generateBMI() {
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;
  let heightUnit = document.getElementById("heightUnit").value;
  let weightUnit = document.getElementById("weightUnit").value;

  if (heightUnit === "cm") {
    height = height / 100;
  } else if (heightUnit === "in") {
    height = height * 0.0254;
  } else if (heightUnit === "ft") {
    height = height * 0.3048;
  }

  if (weightUnit === "lb") {
    weight = weight * 0.453592;
  }

  let result = weight / (height * height);
  let bmiValue = isFinite(result) ? result.toFixed(2) : "";
  document.getElementById("bmi").value = bmiValue;

  let category = "";
  let recommendation = "";

  if (bmiValue && bmiValue > 0) {
    if (bmiValue < 18.5) {
      category = "Underweight";
      let targetWeight = (18.5 * (height * height)).toFixed(1);
      let weightToGain = (targetWeight - weight).toFixed(1);
      recommendation = `you are underweight. You need to gain weight by ${weightToGain}kg to reach a healthy BMI`;
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      category = "Normal weight";
      recommendation = "your weight is healthy.";
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      category = "Overweight";
      let targetWeight = (24.9 * (height * height)).toFixed(1);
      let weightToLose = (weight - targetWeight).toFixed(1);
      recommendation = `you are overweight. you need to loose weight by ${weightToLose}kg to reach a healthy BMI`;
    } else if (bmiValue >= 30 && bmiValue <= 35) {
      category = "Obesity";
      let targetWeight = (24.9 * (height * height)).toFixed(1);
      let weightToLose = (weight - targetWeight).toFixed(1);
      recommendation = `You have obesity. You need to lose weight by ${weightToLose}kg to reach a healthy BMI.`;
    } else {
      category = "Severe obesity";
      let targetWeight = (24.9 * (height * height)).toFixed(1);
      let weightToLose = (weight - targetWeight).toFixed(1);
      recommendation = `You have a severe Obesity. You need to loose weight by ${weightToLose}kg to reach healthy BMI`;
    }
  }

  document.getElementById("recommendation").value = recommendation;
}
