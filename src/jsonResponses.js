const respondJSON = (request, response, status, object) => {
  response.writeHead(status, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify(object));
  response.end();
};

const respondJSONMeta = (request, response, status) => {
  response.writeHead(status, { 'Content-Type': 'application/json' });
  response.end();
};

const getUsers = (request, response) => {

};

const getUsersMeta = (request, response) => {

};

const notReal = (request, response) => {

};

const notRealMeta = (request, response) => {

};

const notFound = (request, response) => {

};