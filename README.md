# SecureMsg Web Application

SecureMsg is a web-based platform designed to provide state-of-the-art encryption for secure communication. It enables users to securely register, log in, encrypt, and decrypt messages, ensuring privacy and ease of use. This application is built with strong security practices, including password hashing (PBKDF2) and AES-256 encryption.

## Access the Web App
You can access the live web application by visiting the following link: [SecureMsg Web App](https://secure-msg.netlify.app/)

## Features:
- **Secure User Authentication:** Passwords are securely hashed using PBKDF2.
- **AES-256 Encryption:** Protect your messages with military-grade encryption.
- **Easy Account Sharing:** Share your username and password with trusted individuals for secure communication.
- **Token-Based Session Management:** Manage user sessions with tokens for added security.
- **Responsive Design:** Enjoy a seamless experience across devices with a clean and intuitive interface.
- **Account Management:** Support for login, logout, and account deletion.

## Privacy and Security:
- **Data Encryption:** All messages are encrypted using AES-256 and securely stored.
- **Secure Transmission:** All data is transmitted securely over HTTPS.
- **Enhanced Security Measures:** Salts and IVs (Initialization Vectors) are implemented for improved encryption security.
- **Zero Knowledge:** Decrypted messages and encryption keys are never stored, ensuring complete privacy.

## How It Works:
1. **Message Encryption:** Enter your message and password to encrypt it using AES-256. The encryption key is derived securely from your password using PBKDF2.
2. **Message Decryption:** Use the same password to decrypt your encrypted message. Only users with access to the correct password can view the original message.
3. **Account Sharing for Communication:** Share your username and password with someone you want to communicate with, allowing them access to your encrypted messages securely.

## GitHub Repository
Explore the source code and contribute to the project: [SecureMsg GitHub Repository](https://github.com/Y518221/SecureMsg.git)

## Future Enhancements:
- Support for group messaging.
- Secure file sharing.
- Advanced reporting and logging features.

## Feedback and Contributions
We welcome feedback and contributions! If you have suggestions or encounter any issues, please reach out or submit a pull request via GitHub.
