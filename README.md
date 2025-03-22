# TripMate - Peer-to-Peer Travel Accessories Rental Platform
## Full Detailed Report : [TripMate Detailed Report](https://docs.google.com/document/d/1sUlGkzISdr1ZI2f-gISLRIZr59YxfY2h2vutZMDtVcQ/edit?usp=sharing) 
## Overview
TripMate is a rental-based platform designed to help travelers rent and lend travel accessories with ease. Instead of purchasing expensive travel gear, users can borrow items from others nearby, making trips more affordable and sustainable. By fostering a community-driven marketplace, TripMate promotes resource-sharing, cost savings, and environmental sustainability.

## Purpose
TripMate aims to:

- **Reduce unnecessary purchases** by offering a rental alternative.
- **Make travel more affordable** by providing access to essential gear at lower costs.
- **Encourage sustainability** by promoting the reuse of travel accessories.
- **Foster a community-driven marketplace** where travelers can share resources.

## Features

- **User Registration & Authentication**: Secure sign-up and login using email or third-party authentication.
- **Item Listing**: Users can list travel accessories they wish to rent out.
- **Search & Filters**: Find the right accessories based on location, category, and price.
- **Booking System**: Seamless reservation and rental management.
- **Payments & Transactions**: Secure payments with multiple payment gateways.
- **Reviews & Ratings**: Trust-building system to rate and review lenders and renters.
- **Messaging System**: Direct chat between users for inquiries and arrangements.

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Firebase/Auth0
- **Payment Integration**: RazorPay
- **UI/UX Design**: [Figma Prototype](https://www.figma.com/design/wZuAy8QAyxWdHOHRWvVUPL/TripMate?node-id=0-1&p=f)

# All the Documentations and Reports : 
All User Flow Diagrams, System Architecture, and Project Reports are available in the documentation/ folder.
## Installation & Setup

### Prerequisites
Ensure you have the following installed:

- Node.js (v14+)
- MongoDB (Local or Cloud Instance)
- Git
- npm


### Steps to Run Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/tripmate.git
   cd tripmate
   ```
2. **Install dependencies**:
   ```bash
   npm install -i  
   ```
3. **Set up environment variables**:
   - Create a `.env` file in the root directory.
   - Add necessary API keys and database configurations.
4. **Start the backend server**:
   ```bash
   cd backend
   npm start 
   ```
5. **Start the frontend**:
   ```bash
   cd frontend
   npm start  # or yarn start
   ```
6. **Visit the application**: Open `http://localhost:3000` in your browser.

## Folder Structure

```
tripmate/
│-- backend/  # Backend code (Node.js, Express)
│-- frontend/  # Frontend code (React.js)
│-- documentation/  # Reports, User Flows, System Architecture
│-- database/  # Database schema & configuration
│-- public/  # Static assets
│-- .env  # Environment variables
│-- README.md  # Project documentation
│-- package.json  # Dependencies & scripts
```

## License

This project is licensed under the MIT License.

