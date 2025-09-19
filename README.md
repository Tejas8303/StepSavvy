# StepSavvy

StepSavvy is a smart web-based platform for tracking daily steps, managing user registrations, and providing personalized insights to promote healthy habits. Built with the MERN stack, it offers a responsive UI and email-based notifications.

## 🚀 Features
- User registration and authentication
- Email confirmation using Nodemailer
- Track daily activities / steps
- Dashboard with insights and analytics
- Responsive UI with TailwindCSS
- REST API backend with Express and MongoDB

## 🛠️ Tech Stack
- **Frontend:** React (Vite), React Hook Form, Axios, TailwindCSS
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Email Service:** Nodemailer

## 📦 Installation

### Clone the repository
```bash
git clone https://github.com/your-username/StepSavvy.git
cd StepSavvy
```

### Install dependencies
```bash
npm install
```

### Setup environment variables
Create a `.env` file in the root directory and add:
```env
MONGO_URI=your_mongo_connection_string
PORT=5000
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
```

### Run the app
Start development server:
```bash
npm run dev
```

Start backend server:
```bash
npm run server
```

## 📧 Email Notifications
The app uses **Nodemailer** to send confirmation emails after successful registration. Configure your email service in `.env` for it to work properly.

## 🤝 Contributing
Contributions are welcome!  
1. Fork the repo  
2. Create a feature branch (`git checkout -b feature-name`)  
3. Commit changes (`git commit -m 'Add feature'`)  
4. Push to branch (`git push origin feature-name`)  
5. Open a Pull Request  

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
