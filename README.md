gracais por la oportuniada de presentar esta prueba 

en el repositorio podra ver un archivo sql.sql donde esta toda la creacion de la base de datos
solo es correr el archivo en un servidor de base de datos y listo la base ya quedaria establecia

en servidor de node si se corre en ambiente de produccion solo es necesario correr el comando 

"npm run dev"

si se corre en ambiente de produccion debera tener instalado "PM2" si no lo esta tendra que instalarlo con el siguiente codigo 

"npm install -g pm2"

si ya tiene el "PM2" instalado en la maquina donde va correr el archivo solo sera necesario correr el siguiente linea de comando 

"pm2 start index.js" 

el cual abre el servicio para su funcionalidad 


la url requeridas en la prueba quedaron de la siguiente manera 

/api/products/:page/:size_page/ se tendra que pasar dos parametros uno para la pagina a seleccionar y otro para el tamaño a listar

/api/products/search/:products/:categories/:page/:size_page/ se tendra que pasar 4 parametros 1 nombre del producto, 2 nombre de la categoria,  3 pagina a seleccionar y 4  el tamaño a listar

/api/products/ se tendra que pasar los siguientes parametros por metodo post para la insercion del registro en la base de datos { ProductName,SupplierID,CategoryID,QuantityPerUnit,UnitPrice,UnitsinStock,UnitsOnOrder,ReorderLever,Discontinued }

/api/providers/:id se tendra que pasar un parametro para llamar informacion de la base de datos unico para el proveedor a buscar

/api/providers/:id/products/ se tendra que pasar un parametro id del proveedor para llamar la informacion de los productos relacionados con ese proveedor

/api/providers/ se tendra que pasar los siguientes parametros por metodo post para la insercion del registro en la base de datos  { CompanyName, ContactName, ContactTitle, Address, City, Region,PostalCode, Country, Phone, Fax, Homepage} = req.body;

/api/providers/:id se tendra que pasar el id del registro que desea eliminar 

/api/categories/:id/products/ se tendra que pasar un parametro id de la categoria para llamar la informacion de los productos relacionados con esta categoria

cualquie duda me la hacen saber via correo 

pipeal1040@gmail.com

o por celular 3103209084

nuevamente muchas gracias por la oportunidad 