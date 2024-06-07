## Chat Application Frontend

# Navigation
- [Technologies](#technologies)
- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Contributions](#contributions)
- [License](#license)
# Technologies

Frontend: 
- React,
- TypeScript,
- Redux,
- axios,
- antd

Real-time Communication:
- WebSocket

# Project Overview
This repository contains the frontend of a responsive chat application built with modern web development technologies. The application provides a seamless chat experience with a variety of features.

# Key Features
1 - User Registration and Authentication:
- Secure user authentication using JSON Web Tokens (JWT).
- New user registration with data validation.

2 - Profile Management:
- Users can create and edit their profiles.
- Uploading and updating profile pictures.

4 - Real-time Chatting:
- Instant messaging functionality with WebSocket.
- Support for private and group chats.

5 - Group Creation and Management:
- Ability to create new chat groups.
- Adding and removing members from groups.

6 - Contact Management:
- Adding users to contact lists.
- Blocking and unblocking users.

7 - File and Photo Sharing:
- Sending photos and files within the chat.
- Viewing shared files and images.

# Project Structure:
The frontend is built with React and TypeScript, utilizing Redux for state management, axios for API requests, and antd for UI components.

# Setup Instructions
1 - Clone the repository:
```
git clone https://github.com/maxkurylenko1/hichat.git
```

2 - Install dependencies:
```
cd hichat
npm install
```

3 - Environment Variables: Create a .env file in the root directory and add the following:
```
PORT=<YourPort>
API_URL=<yourApiUrl>
```

4 - Run the application:
```
npm run dev
```
# Contributions
Contributions are welcome! Please feel free to submit a pull request or open an issue.

# License
This project is licensed under the MIT License.
