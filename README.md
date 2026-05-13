🎬 My-Movie-App: Full-Stack Movie Database
Welcome to My-Movie-App, a modern, high-performance full-stack application. This project showcases the integration of a powerful Strapi 5 Headless CMS with a lightning-fast React 19 frontend powered by Vite.

🚀 Overview
This application is designed to manage and display a movie database with a decoupled architecture. It provides a seamless administrative experience for content creators and a fluid, responsive interface for end-users.

🛠️ Tech Stack
Frontend
React 19: Utilizing the latest Concurrent Rendering features.

Vite: For an optimized development environment and fast builds.

Axios: To handle robust API requests to the Strapi backend.

Styled Components: (As seen in your dependencies) for modular and scoped CSS.

Backend
Strapi 5: The leading open-source Headless CMS for structured content.

Better-SQLite3: High-performance local database for quick development and data storage.

Node.js (v20+): Ensuring a modern and secure runtime environment.

🏗️ Project Structure
The project is split into two main directories:

/backend: The Strapi application for API management and data storage.

/frontend: The React application for the user interface.

<img width="915" height="641" alt="localhost_1337_admin_plugins_upload_sort=createdAt_DESC page=1 pageSize=10" src="https://github.com/user-attachments/assets/d23c338b-ffad-42de-a58a-2f65129a9e24" />
<img width="900" height="2636" alt="localhost_5173_ (19)" src="https://github.com/user-attachments/assets/fc361a46-fb31-426b-aa16-dae92d23e755" />
<img width="915" height="641" alt="localhost_1337_admin_auth_login" src="https://github.com/user-attachments/assets/6b7c49a0-7058-419e-9b3b-ed7105c78cfd" />
<img width="915" height="641" alt="localhost_1337_admin_auth_login (1)" src="https://github.com/user-attachments/assets/093fbc3b-31f9-4d96-b5bf-cb42526ec2a2" />
<img width="915" height="641" alt="localhost_1337_admin_content-manager_collection-types_api__movie movie_page=1 pageSize=10 sort=documentId_ASC" src="https://github.com/user-attachments/assets/adcbf5a3-150e-467d-996d-53df85d07b50" />


⚙️ Getting Started
Follow these steps to get the project running locally.

1. Prerequisites
Ensure you have Node.js (>=20.0.0) and npm installed on your system.

2. Backend Setup
Bash
cd my-movie-backend
npm install
npm run build
npm run dev
The Strapi admin panel will be available at http://localhost:1337/admin.

3. Frontend Setup
Bash
cd my-movie-frontend
npm install
npm run dev
The React application will be available at http://localhost:5173.

✨ Features
Headless Architecture: Complete separation of concerns between data and design.

Dynamic Content: Fetching real-time movie data using REST API.

Admin Dashboard: Easy movie management (Create, Read, Update, Delete) via Strapi.

Type Safety: Configured with TypeScript support for better developer experience.

Modern UI: Responsive design and efficient component structure.

📝 License
This project is private and intended for personal/portfolio use.

Developed with ❤️ by CheSubhro
