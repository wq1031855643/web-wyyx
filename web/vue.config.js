module.exports = {
  devServer: {
    proxy: {
        '/api': {
            target: "https://www.littleemmayang.com",
            changeOrigin: true
        },
        '/ajax': {
          target: "http://localhost:3000",
          changeOrigin: true
        },
        '/xhr': {
          target: "http://m.you.163.com",
          changeOrigin: true
        }
    }
  }
};
