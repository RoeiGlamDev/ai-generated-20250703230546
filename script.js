// Get elements
const videoGrid = document.getElementById('video-grid');
const relatedVideos = document.getElementById('related-videos');
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

// Sample video data
const videos = [
    {
        id: 1,
        title: 'Video 1',
        thumbnail: 'https://via.placeholder.com/150',
        description: 'This is video 1'
    },
    {
        id: 2,
        title: 'Video 2',
        thumbnail: 'https://via.placeholder.com/150',
        description: 'This is video 2'
    },
    {
        id: 3,
        title: 'Video 3',
        thumbnail: 'https://via.placeholder.com/150',
        description: 'This is video 3'
    }
];

// Sample related video data
const relatedVideosData = [
    {
        id: 1,
        title: 'Related Video 1',
        thumbnail: 'https://via.placeholder.com/150',
        description: 'This is related video 1'
    },
    {
        id: 2,
        title: 'Related Video 2',
        thumbnail: 'https://via.placeholder.com/150',
        description: 'This is related video 2'
    },
    {
        id: 3,
        title: 'Related Video 3',
        thumbnail: 'https://via.placeholder.com/150',
        description: 'This is related video 3'
    }
];

// Function to generate video grid items
function generateVideoGridItems(videos) {
    videos.forEach(video => {
        const videoGridItem = document.createElement('div');
        videoGridItem.classList.add('video-grid-item', 'fade-in');
        videoGridItem.innerHTML = `
            <img src="${video.thumbnail}" alt="${video.title}">
            <h3>${video.title}</h3>
            <p>${video.description}</p>
        `;
        videoGrid.appendChild(videoGridItem);
    });
}

// Function to generate related video items
function generateRelatedVideoItems(relatedVideosData) {
    relatedVideosData.forEach(relatedVideo => {
        const relatedVideoItem = document.createElement('li');
        relatedVideoItem.classList.add('related-video-item');
        relatedVideoItem.innerHTML = `
            <img src="${relatedVideo.thumbnail}" alt="${relatedVideo.title}">
            <h3>${relatedVideo.title}</h3>
            <p>${relatedVideo.description}</p>
        `;
        relatedVideos.appendChild(relatedVideoItem);
    });
}

// Generate video grid items and related video items
generateVideoGridItems(videos);
generateRelatedVideoItems(relatedVideosData);

// Add event listener to search form
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchQuery = searchInput.value.trim();
    if (searchQuery) {
        // TO DO: Implement search functionality
        console.log(`Search query: ${searchQuery}`);
    }
});