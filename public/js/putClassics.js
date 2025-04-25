const backendURL = 'https://echoa.onrender.com/api/v1/echoa';

document.addEventListener('DOMContentLoaded', async () => {
  const albumSelect = document.getElementById('albumSelect');
  const updateForm = document.getElementById('updateForm');

  // Fetch and load albums into dropdown
  async function loadAlbums() {
    try {
      const response = await fetch(backendURL);
      const albums = await response.json();

      albums.forEach(album => {
        const option = document.createElement('option');
        option.value = album.id; // Save ID for later PUT
        option.textContent = `${album.artist} - ${album.album_title}`;
        albumSelect.appendChild(option);
      });
    } catch (error) {
      console.error('Error loading albums:', error);
    }
  }

  // When an album is selected, auto-fill form
  albumSelect.addEventListener('change', async () => {
    const selectedId = albumSelect.value;
    if (!selectedId) return;

    try {
      const response = await fetch(`${backendURL}/${selectedId}`);
      const [album] = await response.json();

      document.getElementById('artist').value = album.artist;
      document.getElementById('album_title').value = album.album_title;
      document.getElementById('year').value = album.year;
      document.getElementById('genre').value = album.genre;
    } catch (error) {
      console.error('Error fetching album details:', error);
    }
  });

  // Handle form submit to update album
  updateForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const selectedId = albumSelect.value;
    if (!selectedId) {
      alert('Please select an album to update.');
      return;
    }

    const updatedAlbum = {
      artist: document.getElementById('artist').value.trim(),
      album_title: document.getElementById('album_title').value.trim(),
      year: parseInt(document.getElementById('year').value),
      genre: document.getElementById('genre').value.trim(),
    };

    try {
      const response = await fetch(`${backendURL}/${selectedId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedAlbum),
      });

      if (response.ok) {
        alert('Album updated successfully!');
        updateForm.reset();
        albumSelect.selectedIndex = 0;
      } else {
        alert('Failed to update album.');
      }
    } catch (error) {
      console.error('Error updating album:', error);
      alert('Server error.');
    }
  });

  // Initial load
  loadAlbums();
});
