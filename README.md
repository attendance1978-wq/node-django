# Node-Django

A Django-inspired web framework for Node.js, bringing the best practices from Django to the Node.js ecosystem.

## Features

- **MVC Architecture**: Model-View-Controller pattern
- **ORM**: Object-Relational Mapping for database interactions
- **URL Routing**: URL dispatcher similar to Django
- **Template Engine**: Handlebars-based template system
- **Forms**: Form handling and validation
- **Admin Interface**: Built-in admin panel
- **Authentication**: User authentication and authorization
- **Middleware**: Middleware system for request/response processing
- **Sessions**: Session management
- **Migrations**: Database migration system
- **Static Files**: Static file handling
- **CSRF Protection**: Cross-Site Request Forgery protection

## Installation

```bash
npm install node-django
```

## Quick Start

```javascript
const { Application } = require('node-django');

const app = new Application();

// Define URLs
app.router.get('/', (req, res) => {
  res.render('index', { title: 'Welcome' });
});

// Start server
app.run(8000);
```

## Documentation

See [docs/](./docs/) for detailed documentation.

## License

MIT
