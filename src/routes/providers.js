const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/api/providers/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    mysqlConnection.query(' select * from suppliers where SupplierID=?',[ id  ], (err,rows,fields) => {
        if (!err) {
            res.json(rows);
        }else{
            console.log(err);
        }
    });
})

router.get('/api/providers/:id/products/', (req, res) => {
    const id = parseInt(req.params.id, 10);
    mysqlConnection.query('select CompanyName ,ProductID,ProductName,CategoryName from products as p inner join categories as c on p.categoryID=c.categoryID inner join suppliers as s on s.SupplierID=p.SupplierID where s.SupplierID=? order by p.productID',[ id  ], (err,rows,fields) => {
        if (!err) {
            res.json(rows);
        }else{
            console.log(err);
        }
    });
})

router.post('/api/providers/', (req, res) => {
    const { CompanyName, ContactName, ContactTitle, Address, City, Region,PostalCode, Country, Phone, Fax, Homepage} = req.body;
    const query = "INSERT INTO suppliers (`CompanyName`,`ContactName`,`ContactTitle`,`Address`,`City`,`Region`,`PostalCode`,`Country`,`Phone`,`Fax`,`Homepage`) VALUES (?,?,?,?,?,?,?,?,?)"; 
    mysqlConnection.query(query,[ CompanyName, ContactName, ContactTitle, Address, City, Region,PostalCode, Country, Phone, Fax, Homepage], (err,rows,fields) => {
        if (!err) {
            res.json({status: 'providers Created'});
        }else{
            console.log(err);
        }
    });
})

router.delete('/api/providers/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const query = "DELETE FROM `suppliers` WHERE SupplierID=?"; 
    mysqlConnection.query(query,[ id ], (err,rows,fields) => {
        if (!err) {
            res.json({status: 'providers Deleted'});
        }else{
            console.log(err);
        }
    });
})



module.exports= router;