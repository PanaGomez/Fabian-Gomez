const axios = require('axios');
const { Parser } = require('json2csv');
const fs = require('fs');
const path = require('path');

class AlbumsService {
    async getAlbumsCsv() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
            const albums = response.data.slice(0, 15);

            const fields = ['userId', 'id', 'title'];
            const opts = { fields };
            const parser = new Parser(opts);
            const csv = parser.parse(albums);

            const filePath = path.join(__dirname, '../database/albums_15.csv');
            fs.writeFileSync(filePath, csv);

            return csv;
        } catch (error) {
            console.error('Error generating CSV:', error);
            throw error;
        }
    }
}

module.exports = new AlbumsService();
