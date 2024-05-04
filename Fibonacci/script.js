function generateSequence() {
    const termCountInput = document.getElementById("termCount");
    const errorMessage = document.getElementById("errorMessage");
    const sequenceOutput = document.getElementById("sequenceOutput");
    const termCount = parseInt(termCountInput.value);

    // Check if input is valid
    if (isNaN(termCount) || termCount <= 0 || termCount >= 100) {
        errorMessage.textContent = "Please enter a valid number (1 to 99).";
        sequenceOutput.textContent = "";
        return;
    }

    errorMessage.textContent = "";

    // Generate Fibonacci sequence
    let sequence = [];
    let a = 0, b = 1;
    for (let i = 0; i < termCount; i++) {
        sequence.push(a);
        const nextTerm = a + b;
        a = b;
        b = nextTerm;
    }

    // Display sequence
    sequenceOutput.textContent = "Fibonacci Sequence: " + sequence.join(", ");
}
