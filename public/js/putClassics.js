document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const id = document.getElementById('id').value;
    const artist = document.getElementById('artist').value;
    const album_title = document.getElementById('album_title').value;
    const year = document.getElementById('year').value;
    const genre = document.getElementById('genre').value;

    try {
      const response = await fetch(`https://echoa.onrender.com/api/v1/echoa${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ artist, album_title, year, genre }),
      });

      if (response.ok) {
        alert('Album updated successfully!');
        form.reset();
      } else {
        alert('Failed to update. Try again.');
      }
    } catch (error) {
      console.error('Error updating album:', error);
      alert('Server error.');
    }
  });
});
