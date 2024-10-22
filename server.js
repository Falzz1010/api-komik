const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Fungsi untuk mendapatkan manga dari MangaDex API
async function getMangaList() {
    try {
        const response = await axios.get('https://api.mangadex.org/manga');
        return response.data;
    } catch (error) {
        console.error('Error fetching data from MangaDex API:', error);
        throw error;
    }
}

// Route utama untuk mendapatkan daftar manga
app.get('/manga', async (req, res) => {
    try {
        const mangaList = await getMangaList();
        res.json(mangaList);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching manga list' });
    }
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
