document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch('https://echoa.onrender.com/api/v1/echoa');
    const data = await response.json();

    new gridjs.Grid({
      columns: ['Artist', 'Album Title', 'Year', 'Genre'],
      data: data.map(item => [item.artist, item.album_title, item.year, item.genre]),
      search: true,
      sort: true,
      pagination: {
        enabled: true,
        limit: 10,
      },
    }).render(document.getElementById('grid-container'));

  } catch (error) {
    console.error('Error fetching classics:', error);
  }
});
