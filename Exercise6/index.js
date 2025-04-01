// Select elements
const costPerLiterInput = document.getElementById('costPerLiter');
const litersPurchasedInput = document.getElementById('litersPurchased');
const calculateButton = document.getElementById('calculateButton');
const totalCostDisplay = document.getElementById('totalCost');


calculateButton.addEventListener('click', function() {
    // Get the values from the inputs
    const costPerLiter = parseFloat(costPerLiterInput.value);
    const litersPurchased = parseFloat(litersPurchasedInput.value);
    
    // Calculate total cost
    const totalCost = costPerLiter * litersPurchased;
    
    // Display total cost
    totalCostDisplay.textContent = `Total Cost: £${totalCost.toFixed(2)}`;
});