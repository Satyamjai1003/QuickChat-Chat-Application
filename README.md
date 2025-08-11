🚀 QuickChat – Real-Time Full-Stack Chat Application
QuickChat is a secure, fast, and user-friendly real-time chat application developed during the Hindalco Summer Training Program. Built with React.js, Node.js, Firebase, Cloudinary, and Tailwind CSS, QuickChat delivers an engaging communication experience with private chats, profile customization, emoji support, and responsive design.

This project is designed with scalability in mind, making it ready for future enhancements such as media sharing, group management, and voice/video calls.

📌 Features
🔐 Secure Authentication – Firebase-powered login/signup with session handling.

💬 Real-Time Messaging – Instant delivery of messages without page reloads.

😀 Emoji Support – Built-in emoji picker for expressive conversations.

👤 Profile Management – Update name, status, and profile picture (stored in Cloudinary).

🌗 Light/Dark Mode – Switch themes for a personalized experience.

📜 Chat List & Chatbox – Organized and clean conversation view.

🔍 Search Modal – Quickly find contacts and start chats.

📢 Real-Time Notifications – Instant alerts for new messages.

📱 Responsive UI – Works seamlessly on desktop, tablet, and mobile devices.

🚪 Logout Functionality – Securely end user sessions anytime.

🛠 Tech Stack
Frontend:

React.js

Tailwind CSS

Emoji Picker Library

Backend & Database:

Node.js

Firebase Authentication

Firebase Firestore (Realtime Database)

Media Handling:

Cloudinary

📂 Project Structure
csharp
Copy
Edit
QuickChat/
│
├── public/               # Static assets
├── src/                  # Main source code
│   ├── components/       # Reusable UI components
│   ├── pages/            # Application pages
│   ├── context/          # App-wide context providers
│   ├── config/           # Firebase & Cloudinary configs
│   ├── utils/            # Helper functions
│   └── App.js            # Root component
│
├── package.json          # Dependencies & scripts
└── README.md             # Project documentation
⚙️ Installation & Setup
Clone the Repository

bash
Copy
Edit
git clone https://github.com/your-username/QuickChat.git
cd QuickChat
Install Dependencies

bash
Copy
Edit
npm install
Set up Firebase

Create a Firebase project in Firebase Console.

Enable Authentication (Email/Password).

Create a Firestore Database.

Copy your Firebase config into src/config/firebase.js.

Set up Cloudinary

Create an account on Cloudinary.

Get your Cloud Name, API Key, and API Secret.

Store them in environment variables.

Run the Application

bash
Copy
Edit
npm start
🚀 Future Scope
📎 Media sharing (images, videos, documents).

🎥 Voice and video calling.

👥 Group chat management with admin controls.

🤖 AI-powered chatbot and smart suggestions.

🔒 End-to-end encryption.

🌍 Multilingual chat translation.

📜 License
This project is licensed under the MIT License – you’re free to use, modify, and distribute it with attribution.

🤝 Contributing
Contributions are welcome! Please fork this repository, make changes, and submit a pull request.

👨‍💻 Author
Developed by Satyam Jaiswal during the Hindalco Summer Training Program.


