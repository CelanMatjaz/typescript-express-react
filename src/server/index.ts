import * as express from 'express';
import * as path from 'path';

const app = express.default();

const isProd = process.env.NODE_ENV === 'production';

const publicPath = path.join(
  path.resolve('./'),
  isProd ? '/public' : '/build/debug/public'
);

const htmlPath = path.join(publicPath, 'index.html');

app.use('/public', express.static(publicPath));
app.get('*', (req, res) => res.sendFile(htmlPath));

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => console.log('Server started on port', PORT));
