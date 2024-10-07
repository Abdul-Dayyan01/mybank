document.addEventListener('DOMContentLoaded', () => {
    const transferForm = document.getElementById('transferForm');
    const historyTableBody = document.querySelector('#historyTable tbody');
    const messageElement = document.getElementById('message');
    const transactions = [];

    transferForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const fromAccount = document.getElementById('fromAccount').value;
        const toAccount = document.getElementById('toAccount').value;
        const amount = parseFloat(document.getElementById('amount').value);

        if (amount <= 0) {
            showMessage('Amount must be greater than zero.', 'error');
            return;
        }

        // Simulate a successful transfer
        transactions.push({
            from: fromAccount,
            to: toAccount,
            amount: amount,
            date: new Date().toLocaleString(),
        });

        showMessage('Transfer successful!', 'success');
        updateTransactionHistory();
        transferForm.reset();
    });

    function updateTransactionHistory() {
        // Clear the current table body
        historyTableBody.innerHTML = '';

        transactions.forEach(transaction => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${transaction.from}</td>
                <td>${transaction.to}</td>
                <td>${transaction.amount.toFixed(2)}</td>
                <td>${transaction.date}</td>
            `;
            historyTableBody.appendChild(row);
        });
    }

    function showMessage(message, type) {
        messageElement.textContent = message;
        messageElement.style.color = type === 'error' ? 'red' : 'green';
    }
});