document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = {};
    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }

    axios.post('/api/bookings', data)
        .then(response => {
            document.getElementById('result').innerHTML = 'Ваша заявка успешно отправлена!';
        })
        .catch(error => {
            console.error('Ошибка при отправке заявки:', error);
            alert('Произошла ошибка при отправке заявки. Попробуйте позже.');
        });
});
