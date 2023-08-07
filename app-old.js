const http = require('http');

//req: request: lo que se está solicitando
//res: response: 
http.createServer((req, res)=>{

    console.log(req);

    // res.writeHead(200, {'Content-Type': 'application/json'});
    // res.setHeader('Content-Disposition','attachment; filename=lista.csv')
    // res.writeHead(200, {'Content-Type': 'application/csv'});

    // res.write( 'id, nombre\n');
    // res.write( '1, Fernando\n');
    // res.write( '2, Maria\n');
    // res.write( '3, Juan\n');
    // res.write( '4, Pedro\n');

    // const persona = {
    //     id: 1,
    //     nombre: 'Fernando'
    // }

    // res.write(JSON.stringify(persona));

    res.write('Hola Mundo');

    res.end();

}).listen( 8080 );


console.log('Escuchando el puerto', 8080);