# Customer Relationship Management (CRM) Project

This project is a Customer Relationship Management (CRM) system built with React for the frontend and Python Django for the backend.

## Overview

This CRM project aims to streamline customer management processes for businesses. It provides essential features such as user authentication, customer management, contact management, task management, and an analytics dashboard.

### Features

- *User Authentication*: Sign up, log in, and manage user accounts securely.
- *Customer Management*: Add, edit, and delete customer records.
- *Contact Management*: Keep track of customer contacts and interactions.
- *Task Management*: Assign tasks to team members and track progress.
- *Analytics Dashboard*: Visualize customer data and track key metrics.

## Technologies Used

### Frontend

- React
- Redux (optional, for state management)
- React Router (for client-side routing)
- Tailwind CSS and Bootstrap (for UI components)
- Axios (for making HTTP requests)

### Backend

- Python
- Django
- Django REST Framework (for building RESTful APIs)
- Django ORM (for database interactions)
- MySQL DB

## Getting Started

To get started with the project:

1. Clone the repository: git clone https://github.com/alanvarghesepaul22/CRM-Project.git
2. Install frontend dependencies: cd crm-project/frontend && npm install
3. Install backend dependencies: cd ../backend && pip install -r requirements.txt
4. Configure the backend by creating a .env file in the backend directory with necessary environment variables.
5. Run migrations to create database tables: python manage.py migrate
6. Start the backend server: python manage.py runserver
7. Start the frontend development server: cd ../frontend && npm start
8. Open your browser and navigate to http://localhost:3000 to view the application.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow the standard GitHub flow:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/new-feature).
3. Make your changes.
4. Commit your changes (git commit -am 'Add new feature').
5. Push to the branch (git push origin feature/new-feature).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
