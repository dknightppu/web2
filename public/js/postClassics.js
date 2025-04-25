document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const artist = document.getElementById('artist').value;
    const album_title = document.getElementById('album_title').value;
    const year = document.getElementById('year').value;
    const genre = document.getElementById('genre').value;

    try {
      const response = await fetch('https://echoa.onrender.com/api/v1/echoa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ artist, album_title, year, genre }),
      });

      if (response.ok) {
        alert('Album added successfully!');
        form.reset();
      } else {
        alert('Failed to submit. Try again.');
      }
    } catch (error) {
      console.error('Error submitting album:', error);
      alert('Server error.');
    }
  });
});
