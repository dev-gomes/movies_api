const movies = require('../data/database.json')

exports.getAllMovies = (req, res, next) => {
    res.status(200).json(movies)
};

exports.getMovieById = (req, res, next) => {
    let id = req.params.id;

    movies.find((data) => {
        if (data) {
            if (data.id == id) {
                res.status(200).json(data);
            }
        } else {
            res.status(404).json({ error: 'no database found' })
        }
    });
};