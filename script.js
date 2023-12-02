// Assume you have a list of users in memory
const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'John Doe', email: 'john@example.com' },
    { id: 3, name: 'John Doe', email: 'john@example.com' },
    { id: 4, name: 'John Doe', email: 'john@example.com' },
    { id: 5, name: 'John Doe', email: 'john@example.com' },
    { id: 5, name: 'John Doe', email: 'john@example.com' },
    { id: 6, name: 'John Doe', email: 'john@example.com' },
    { id: 7, name: 'John Doe', email: 'john@example.com' },
    { id: 8, name: 'John Doe', email: 'john@example.com' },
    { id: 9, name: 'John Doe', email: 'john@example.com' },
    { id: 10, name: 'John Doe', email: 'john@example.com' },
    // Add more user data as needed
];

// Function to render users in the table
function renderUsers() {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';

    // Assuming only 10 users per page for pagination
    const currentPage = 1;
    const usersPerPage = 10;
    const startIndex = (currentPage - 1) * usersPerPage;
    const endIndex = startIndex + usersPerPage;

    for (let i = startIndex; i < endIndex && i < users.length; i++) {
        const user = users[i];

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><input type="checkbox" class="select-checkbox"></td>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
                <button class="save-btn">Save</button>
            </td>
        `;

        tbody.appendChild(tr);
    }

    // Update pagination information (page numbers)
    const pageNumbers = document.querySelector('.page-numbers');
    const totalPages = Math.ceil(users.length / usersPerPage);
    pageNumbers.textContent = `Page ${currentPage} of ${totalPages}`;
}

// Event listeners for pagination buttons, search, edit, delete, save, etc.
// Add your event listeners and logic here

// Initial render
renderUsers();
