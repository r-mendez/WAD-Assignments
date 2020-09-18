
function bmrCalc(age, sex, height, weight, level) {
  var bmr;
  var tee;
  var activity;
  if(sex == 'woman') {
    bmr = 655.1 + (9.563 * weight) + (1.85 * height) - (4.676 * age)
  }
  else {
    bmr = 66.5 + (13.75 * weight) + (5.003 * height) - (6.755 * age)
  }
  if(level == 'sedentary'){
    activity = 1.53;
  }
  else if(level == 'moderate'){
    activity = 1.76;
  }
  else {
    activity = 2.25;
  }
  tee = bmr * activity;
  console.log(age, sex, height, weight, level, activity, bmr, tee);
  document.getElementById('output').innerHTML = 'BMR is ' + bmr + ', TEE is ' + tee
}

