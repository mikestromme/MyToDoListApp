document.addEventListener('DOMContentLoaded', function () {
    // Fetch Todo API information
    fetch('http://localhost:8000/todo/')
        .then(response => response.json())
        .then(todoInfo => {
            // Log the entire Todo API response
            console.log(todoInfo);

            // Display Todo API information in the 'api-info' div
            const apiInfoDiv = document.getElementById('api-info');

            // Check if the Todo API information is available
            if (todoInfo) {
                apiInfoDiv.innerHTML = `<p>Todo API Information: ${JSON.stringify(todoInfo)}</p>`;
            } else {
                apiInfoDiv.innerHTML = `<p>Todo API Information not found.</p>`;
            }
        })
        .catch(error => console.error('Error fetching Todo API information:', error));
});


