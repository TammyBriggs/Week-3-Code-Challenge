// 1. Fetch movie data
fetch('db.json')
  .then(response => response.json())
  .then(data => {
    // 2. Extract details of the first movie
    const movie = data.films[0];
    const { poster, title, runtime, showtime, capacity, tickets_sold } = movie;
    const availableTickets = capacity - tickets_sold;

    // 3. Set details in the HTML elements
    document.getElementById('poster').src = poster;
    document.getElementById('title').textContent = title;
    document.getElementById('runtime').textContent = `${runtime} mins`;
    document.getElementById('showtime').textContent = showtime;
    document.getElementById('available-tickets').textContent = availableTickets;

    // 4. Create movie list
    const filmsList = document.getElementById('films');
    data.films.forEach(movie => {
      const { id, title, poster, showtime } = movie;
      const li = document.createElement('li');
      li.innerHTML = `<img src="${poster}" alt="${title}"><div><h4>${title}</h4><p>Showtime: ${showtime}</p></div>`;
      li.addEventListener('click', () => showMovieDetails(id));
      filmsList.appendChild(li);
    });

    // 5. Add event listener to Buy Ticket button
    const buyTicketButton = document.getElementById('buy-ticket');
    buyTicketButton.addEventListener('click', () => {
      if (availableTickets > 0) {
        availableTickets--;
        document.getElementById('available-tickets').textContent = availableTickets;
        if (availableTickets === 0) {
          buyTicketButton.disabled = true;
        }
      }
    });
  });
