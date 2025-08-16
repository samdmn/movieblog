// app.js - Logique principale de l'application

let filteredMovies = [...movies];
let currentGenreFilter = 'all';
let currentYearFilter = 'all';
let currentSearchTerm = '';
let currentPage = 1;
let moviesPerPage = 7;

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        renderMovies();
        updateStats();
        generateFilters();
        setupEventListeners();
    }, 500);
});

function setupEventListeners() {
    document.getElementById('searchInput').addEventListener('input', function(e) {
        currentSearchTerm = e.target.value.toLowerCase();
        currentPage = 1;
        filterMovies();
    });

    document.getElementById('genreSelect').addEventListener('change', function(e) {
        currentGenreFilter = e.target.value;
        currentPage = 1;
        filterMovies();
    });

    document.getElementById('yearSelect').addEventListener('change', function(e) {
        currentYearFilter = e.target.value;
        currentPage = 1;
        filterMovies();
    });

    document.getElementById('clearFilters').addEventListener('click', function() {
        document.getElementById('genreSelect').value = 'all';
        document.getElementById('yearSelect').value = 'all';
        document.getElementById('searchInput').value = '';
        currentGenreFilter = 'all';
        currentYearFilter = 'all';
        currentSearchTerm = '';
        currentPage = 1;
        filterMovies();
    });
    
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('page-link')) {
            currentPage = parseInt(e.target.dataset.page);
            renderMovies();
        }
    });
}

function generateFilters() {
    // Générer les options de genre
    const genres = [...new Set(movies.flatMap(movie => movie.genre || []))];
    const genreSelect = document.getElementById('genreSelect');
    
    genres.sort().forEach(genre => {
        const option = document.createElement('option');
        option.value = genre;
        option.textContent = genre;
        genreSelect.appendChild(option);
    });

    // Générer les options d'année
    const years = [...new Set(movies.map(movie => movie.year).filter(year => year))];
    const yearSelect = document.getElementById('yearSelect');
    
    years.sort((a, b) => b - a).forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    });
}

function filterMovies() {
    filteredMovies = movies.filter(movie => {
        const matchesSearch = movie.title.toLowerCase().includes(currentSearchTerm) ||
                            movie.review.toLowerCase().includes(currentSearchTerm);
        const matchesGenre = currentGenreFilter === 'all' || (movie.genre && movie.genre.includes(currentGenreFilter));
        const matchesYear = currentYearFilter === 'all' || movie.year === currentYearFilter;
        return matchesSearch && matchesGenre && matchesYear;
    });
    renderMovies();
}

function updateStats() {
    const totalMovies = movies.length;
    document.getElementById('totalMovies').textContent = totalMovies;

    const ratingsWithValues = movies
        .filter(movie => movie.rating)
        .map(movie => parseFloat(movie.rating));
    const avgRating = ratingsWithValues.length > 0 
        ? (ratingsWithValues.reduce((a, b) => a + b, 0) / ratingsWithValues.length).toFixed(1)
        : '0';
    document.getElementById('avgRating').textContent = avgRating;

    const genreCounts = movies.reduce((acc, movie) => {
        if (movie.genre && movie.genre.length > 0) {
            movie.genre.forEach(g => {
                acc[g] = (acc[g] || 0) + 1;
            });
        }
        return acc;
    }, {});
    const topGenre = Object.keys(genreCounts).length > 0
        ? Object.keys(genreCounts).reduce((a, b) => genreCounts[a] > genreCounts[b] ? a : b)
        : '-';
    document.getElementById('topGenre').textContent = topGenre;
}

function truncateText(text, maxLength = 200) {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
}

function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    return '⭐'.repeat(fullStars) + (halfStar ? '⯪' : '') + '☆'.repeat(emptyStars);
}

// Lightbox
function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = src;
    lightbox.style.display = 'flex';
}

document.getElementById('lightbox').addEventListener('click', function() {
    this.style.display = 'none';
});

function addLightboxEvents() {
    document.querySelectorAll('.movie-image img').forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => openLightbox(img.src));
    });
}

function renderMovies() {
    const container = document.getElementById('moviesContainer');
    filteredMovies.sort((a, b) => b.id - a.id);

    const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);
    const startIndex = (currentPage - 1) * moviesPerPage;
    const endIndex = startIndex + moviesPerPage;
    const moviesToDisplay = filteredMovies.slice(startIndex, endIndex);
    
    if (moviesToDisplay.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <h3>Aucun résultat trouvé</h3>
                <p>Essayez de modifier vos critères de recherche ou de filtrage.</p>
            </div>
        `;
        document.getElementById('pagination').innerHTML = '';
        return;
    }
    
    container.innerHTML = `
        <div class="movies-grid">
            ${moviesToDisplay.map(movie => `
                <div class="movie-card">
                    <div class="movie-poster">
                        ${movie.poster ? 
                            `<img src="${movie.poster}" alt="${movie.title}">` : 
                            `<div style="text-align: center; padding: 20px;">
                                <div style="font-size: 3rem; margin-bottom: 10px;">🎬</div>
                                <div>${movie.title}</div>
                            </div>`
                        }
                    </div>
                    <div class="movie-info">
                        <h3 class="movie-title">${movie.title}</h3>
                        <div class="movie-meta">
                            <div class="movie-details">
                                <span>${movie.year || 'Année inconnue'}</span>
                                ${movie.genre && movie.genre.length > 0 ? movie.genre.map(g => `<span class="genre-tag">${g}</span>`).join(' ') : ''}
                            </div>
                            ${movie.rating ? `
                                <div class="rating">
                                    <span class="stars">${renderStars(parseFloat(movie.rating))}</span>
                                    <span>(${movie.rating}/5)</span>
                                </div>
                            ` : ''}
                        </div>
                        ${movie.review ? `
                            <div class="movie-review">
                                <div class="review-text-${movie.id}">
                                    ${truncateText(movie.review)}
                                    ${movie.review.length > 200 ? `
                                        <span class="review-toggle" onclick="toggleReview(${movie.id})">
                                            Lire plus
                                        </span>
                                    ` : ''}
                                </div>
                            </div>
                        ` : ''}
                        ${movie.images && movie.images.length > 0 ? `
                            <div style="margin-bottom: 15px;">
                                <div class="movie-images">
                                    ${movie.images.map(img => `
                                        <div class="movie-image">
                                            <img src="${img}" alt="Image du film">
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        ` : ''}
                        <div class="movie-footer">
                            <span class="date-added">Ajouté le ${movie.dateAdded}</span>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    addLightboxEvents();
    renderPagination(totalPages);
}

function renderPagination(totalPages) {
    const pagination = document.getElementById('pagination');
    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }
    let buttons = '';
    for (let i = 1; i <= totalPages; i++) {
        buttons += `<button class="page-link ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
    }
    pagination.innerHTML = buttons;
}

function toggleReview(id) {
    const reviewDiv = document.querySelector(`.review-text-${id}`);
    if (!reviewDiv) return;
    const movie = movies.find(m => m.id === id);
    if (!movie) return;

    if (reviewDiv.textContent.includes('Lire plus')) {
        reviewDiv.innerHTML = movie.review + ` <span class="review-toggle" onclick="toggleReview(${id})">Lire moins</span>`;
    } else {
        reviewDiv.innerHTML = truncateText(movie.review) + ` <span class="review-toggle" onclick="toggleReview(${id})">Lire plus</span>`;
    }
}