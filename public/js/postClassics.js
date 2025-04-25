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
        showModal();
        form.reset();
      } else {
        alert('Failed to submit. Please try again.');
      }
      
    } catch (error) {
      console.error('Error submitting album:', error);
      alert('Server error.');
    }
  });
});

function showModal() {
  const modal = document.getElementById('successModal');
  const span = document.getElementsByClassName('close')[0];

  modal.style.display = "block";

  span.onclick = function() {
    modal.style.display = "none";
  };

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

