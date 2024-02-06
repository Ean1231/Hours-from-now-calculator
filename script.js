document.getElementById('timeForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const hours = parseInt(document.getElementById('hours').value);

    if (!isNaN(hours) && hours > 0) {
        const current_time_sast = new Date(new Date().getTime() + 2 * 60 * 60 * 1000);

        const result_time_sast = new Date(current_time_sast - hours * 60 * 60 * 1000);

        const formatted_result = result_time_sast.toLocaleString(); // Display in a user-friendly format

        document.getElementById('result').textContent = `Time ${hours} hours ago in South Africa (SAST) was: ${formatted_result}`;
    } else {
        document.getElementById('result').textContent = 'Please enter a valid positive number of hours.';
    }
});

// Add functionality to the clear button
document.getElementById('clearButton').addEventListener('click', function () {
    document.getElementById('hours').value = ''; // Clear the input field
    document.getElementById('result').textContent = ''; // Clear the result area
});