document.getElementById('timeForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const hours = parseInt(document.getElementById('hours').value);

    const current_time_sast = new Date(new Date().getTime() + 2 * 60 * 60 * 1000);

    const result_time_sast = new Date(current_time_sast - hours * 60 * 60 * 1000);

    const formatted_result = result_time_sast.toISOString();

    document.getElementById('result').textContent = `Time ${hours} hours ago in South Africa (SAST) was: ${formatted_result}`;
});