const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/api/products/:page/:size_page/', (req, res) => {
    const page = parseInt(req.params.page, 10);
    const size_page = parseInt(req.params.size_page, 10);
    const row_page= (page - 1) * size_page;
    mysqlConnection.query(' select ProductID,CategoryName from products  as p inner join categories as c on p.categoryID=c.categoryID order by p.productID  limit ?,?',[ row_page , size_page ], (err,rows,fields) => {
        if (!err) {
            res.json(rows);
        }else{
            console.log(err);
        }
    });
})

router.get('/api/products/search/:products/:categories/:page/:size_page/', (req, res) => {
    const page = parseInt(req.params.page, 10);
    const size_page = parseInt(req.params.size_page, 10);
    const row_page= (page - 1) * size_page;    
    const products = req.params.products; 
    const categories = req.params.categories; 
    mysqlConnection.query("select ProductID,CategoryName from products  as p inner join categories as c on p.categoryID=c.categoryID where (p.ProductName like ? or c.categoryName like ?)  order by p.productID  limit ?,?",[ products,categories,row_page , size_page ], (err,rows,fields) => {
        if (!err) {
            res.json(rows);
        }else{
            console.log(err);
        }
    });
})

router.post('/api/products/', (req, res) => {
    const { ProductName,SupplierID,CategoryID,QuantityPerUnit,UnitPrice,UnitsinStock,UnitsOnOrder,ReorderLever,Discontinued} = req.body;
    const query = "INSERT INTO products (`ProductName`,`SupplierID`,`CategoryID`,`QuantityPerUnit`,  `UnitPrice`,`UnitsinStock`,`UnitsOnOrder`,`ReorderLever`,`Discontinued`) VALUES (?,?,?,?,?,?,?,?,?)"; 
    mysqlConnection.query(query,[ ProductName, SupplierID, CategoryID, QuantityPerUnit, UnitPrice, UnitsinStock, UnitsOnOrder, ReorderLever, Discontinued ], (err,rows,fields) => {
        if (!err) {
            res.json({status: 'Product Created'});
        }else{
            console.log(err);
        }
    });
})

module.exports= router;