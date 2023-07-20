const http = require("http");
const fs = require("fs");
const path = require("path");
const PORT = 3000;

const filePath = path.join(__dirname, "products.json"); // Absolute file path

const server = http.createServer((req, res) => {
  if (req.url === '/') {
     res.writeHead(200, { 'Content-Type': 'text/plain' });
     res.end("Welcome to Men & Women Dummy Data ");

  } else if (req.url === '/men') {
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      console.log('Data:', data);
      const productData = JSON.parse(data);
      const menProducts = productData.men.slice(0, 10);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(menProducts));
    } catch (error) {
      console.error(error);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error: Failed to read or parse JSON data');
    }
  } else if (req.url === '/women') {
     try {
          const data = fs.readFileSync(filePath, 'utf8');
          console.log('Data:', data);
          const productData = JSON.parse(data);
          const womenProducts = productData.women.slice(0, 10);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(womenProducts));
        } catch (error) {
          console.error(error);
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error: Failed to read or parse JSON data');
        }

  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});
