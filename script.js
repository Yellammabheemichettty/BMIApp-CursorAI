function toggleUnits() {
    const unit = document.getElementById('unit').value;
    const metricInputs = document.getElementById('metric-inputs');
    const imperialInputs = document.getElementById('imperial-inputs');

    if (unit === 'metric') {
        metricInputs.style.display = 'block';
        imperialInputs.style.display = 'none';
    } else {
        metricInputs.style.display = 'none';
        imperialInputs.style.display = 'block';
    }
}

function calculateBMI() {
    const unit = document.getElementById('unit').value;
    let bmi;
    let weight, height;

    if (unit === 'metric') {
        weight = parseFloat(document.getElementById('weight').value);
        height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to m
        if (!weight || !height) {
            alert('Please enter valid weight and height');
            return;
        }
        bmi = weight / (height * height);
    } else {
        const weightLbs = parseFloat(document.getElementById('weight-lbs').value);
        const heightFt = parseFloat(document.getElementById('height-ft').value);
        const heightIn = parseFloat(document.getElementById('height-in').value);
        
        if (!weightLbs || !heightFt || isNaN(heightIn)) {
            alert('Please enter valid weight and height');
            return;
        }
        
        const heightInches = (heightFt * 12) + heightIn;
        bmi = (weightLbs / (heightInches * heightInches)) * 703;
    }

    displayResult(bmi);
}

function displayResult(bmi) {
    const bmiValue = document.getElementById('bmi-value');
    const bmiCategory = document.getElementById('bmi-category');
    const suggestionsText = document.getElementById('suggestions-text');
    const result = document.getElementById('result');

    bmiValue.textContent = bmi.toFixed(1);

    // Remove all previous classes
    result.className = 'result';

    if (bmi < 18.5) {
        bmiCategory.textContent = 'Underweight';
        result.classList.add('underweight');
        suggestionsText.textContent = 'Consider adding more nutrient-dense foods to your diet:\n' +
            '- Lean proteins (chicken, fish, beans)\n' +
            '- Whole grains (brown rice, quinoa)\n' +
            '- Healthy fats (avocados, nuts, olive oil)\n' +
            '- Dairy products (milk, yogurt, cheese)\n' +
            '- Fruits and vegetables';
    } else if (bmi >= 18.5 && bmi < 25) {
        bmiCategory.textContent = 'Normal weight';
        result.classList.add('normal');
        suggestionsText.textContent = 'Maintain your healthy diet:\n' +
            '- Continue with balanced meals\n' +
            '- Include a variety of fruits and vegetables\n' +
            '- Stay hydrated\n' +
            '- Regular physical activity\n' +
            '- Portion control';
    } else if (bmi >= 25 && bmi < 30) {
        bmiCategory.textContent = 'Overweight';
        result.classList.add('overweight');
        suggestionsText.textContent = 'Consider these dietary changes:\n' +
            '- Increase vegetable intake\n' +
            '- Choose lean proteins\n' +
            '- Reduce processed foods\n' +
            '- Limit sugary drinks\n' +
            '- Control portion sizes\n' +
            '- Regular exercise';
    } else {
        bmiCategory.textContent = 'Obese';
        result.classList.add('obese');
        suggestionsText.textContent = 'Focus on these dietary changes:\n' +
            '- Increase fiber intake (vegetables, whole grains)\n' +
            '- Choose lean proteins\n' +
            '- Reduce sugar and processed foods\n' +
            '- Drink plenty of water\n' +
            '- Regular physical activity\n' +
            '- Consider consulting a dietitian';
    }
} 