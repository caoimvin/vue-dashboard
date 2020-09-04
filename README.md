# vue_dashboard

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Deployment on Apache info
If you deploy this app on a Apache server there will be a problem with reloading a sub-page URL, because Vue doesn't have server side rendering.

To solve this issue, you have to add either a `.htaccess` file to your `dist` folder or you condigure your virtual host in Apache.

To solve this with `.htaccess` and redirect all requests to index.html use this

```
<ifModule mod_rewrite.c>
    RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</ifModule>
```
