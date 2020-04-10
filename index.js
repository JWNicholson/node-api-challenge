require('dotenv').config();

const express = require('express');

const apiRouter = require('./api/apiRouter')

const server = express();

server.get('/', (req,res) => {
    res.send((`<h1>This be a webpage</h1>`));
} );

server.use(express.json());

server.use('api', apiRouter);

const PORT = process.env.PORT || 6000;
server.listen(PORT, () => console.log(`\n*** Server running on port ${PORT}***\n`));

/*
play this: https://www.youtube.com/watch?v=d-diB65scQU

Sing along:

here's a little code I wrote, please read the README word for word, don't worry, you got this
in every task there may be trouble, but if you worry you make it double, don't worry, you got this
ain't got no sense of what is REST? just concentrate on learning Express, don't worry, you got this
your file is getting way too big, bring a Router and make it thin, don't worry, be crafty
there is no data on that route, just write some code, you'll sort it out… don't worry, just hack it…
I need this code, but don't know where, perhaps should make some middleware, don't worry, just hack it

Go code!
*/

