const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

app.use(cors({
  origin: 'http://localhost:5173' // Указываем конкретный порт, с которого разрешены запросы
}));


app.use('/api', createProxyMiddleware({ 
  target: 'https://api.cloudsell.ru', 
  changeOrigin: true,
  pathRewrite: {
    '^/api': '',  
  },
  onProxyReq: (proxyReq, req, res) => {
    console.log('Proxying request:', req.method, req.url);
  },
  onProxyRes: (proxyRes, req, res) => {
    console.log('Received response status:', proxyRes.statusCode);
  }
}));

const PORT = 3200;
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});