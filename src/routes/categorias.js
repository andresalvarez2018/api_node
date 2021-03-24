const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/api/categories/:id/products/', (req, res) => {
    const id = parseInt(req.params.id, 10);
    mysqlConnection.query('SELECT * FROM categories as c inner join products as p on c.categoryID=p.categoryID where c.categoryID=?',[ id  ], (err,rows,fields) => {
        if (!err) {
            res.json(rows);
            
        }else{
            console.log(err);
        }
    });
})

module.exports= router;