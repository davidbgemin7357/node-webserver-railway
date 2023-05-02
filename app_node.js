import http from 'http';

http.createServer((req, res) => {
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, {'Content-Type': 'application/csv'});

    res.write('id, nombre\n');
    res.write('1, David\n');
    res.write('2, María\n');
    res.write('3, Juan\n');
    res.write('4, Pedro\n');

    res.end();
})
.listen(8080)

console.log("Escuchando el puerto", 8080)