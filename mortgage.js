function calculateMortgage() {
    const loanAmount = parseFloat(document.getElementById('loan-amount').value);
    const annualRate = parseFloat(document.getElementById('interest-rate').value);
    const loanYears = parseInt(document.getElementById('loan-term').value, 10);
    const resultBox = document.getElementById('mortgage-result');

    if (isNaN(loanAmount) || loanAmount <= 0 || isNaN(annualRate) || annualRate < 0 || isNaN(loanYears) || loanYears <= 0) {
        resultBox.textContent = 'Please enter valid positive numbers for all fields.';
        return;
    }

    const monthlyRate = (annualRate / 100) / 12;
    const totalPayments = loanYears * 12;
    let monthlyPayment = 0;

    if (monthlyRate === 0) {
        monthlyPayment = loanAmount / totalPayments;
    } else {
        const factor = Math.pow(1 + monthlyRate, totalPayments);
        monthlyPayment = (loanAmount * monthlyRate * factor) / (factor - 1);
    }

    const totalPaid = monthlyPayment * totalPayments;
    const totalInterest = totalPaid - loanAmount;

    resultBox.innerHTML =
        `Estimated Monthly Payment: $${monthlyPayment.toFixed(2)}<br>` +
        `Total Interest Paid: $${totalInterest.toFixed(2)}<br>` +
        `Total Loan Cost: $${totalPaid.toFixed(2)}`;
}
