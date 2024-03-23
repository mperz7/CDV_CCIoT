const http = require("http");

// Funkcja obsługująca żądania
const requestHandler = (request, response) => {
  console.log("Otrzymano żądanie.");
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Witaj, swiecie!\n");
};

// Tworzenie serwera
const server = http.createServer(requestHandler);

// Określenie portu, na którym serwer będzie nasłuchiwał
const port = 80;

// Uruchamianie serwera i nasłuchiwanie na określonym porcie
server.listen(port, (err) => {
  if (err) {
    return console.log("Błąd:", err);
  }
  console.log(Serwer nasłuchuje na porcie ${port});
});
