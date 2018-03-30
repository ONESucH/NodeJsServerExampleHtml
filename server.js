const http = require('http');
const html = '<!doctype html>' +
    '<head>' +
        '<meta charset="utf-8">' +
        '<title>Какой-то титул</title>' +
        '<link rel="stylesheet" href="style.css">' +
    '</head>' +
    '<body>' +
        '<h1>Титул</h1>' +
        '<p>Lorem ipsum dolor sit amet.</p>' +
        '<span>span - text</span>' +
        '<script src="main.js"></script>' +
     '</body>',
    css = 'body{background: silver;}',
    js = 'console.log("Загрузили js")',
    server = http.createServer((req,  res) => { // req.url method headers
        switch (req.url) {
            case '/':
                res.writeHead(200, {'Content-Type': 'text/html'}); // статус запроса/ тип/ чистый текст plain
                res.end(html);
            case '/style.css':
                res.writeHead(200, {'Content-Type': 'text/css'});
                res.end(css);
            case '/main.js':
                res.writeHead(200, {'Content-Type': 'text/javascript'});
                res.end(js);
            default:
                res.writeHead(404, {'Content-Type': 'text/plain'}); // пустой текст
                res.end('Страница не найдена');
        }
}).listen(4200, () => console.log('Сервер работает'));