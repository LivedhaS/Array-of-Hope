# Array-of-Hope



# Team Members Management App

This is a web application to manage team member details. It allows users to add, view, and display team members, including their profile image and other details like their **name**, **registration number**, **year**, **degree**, **about the project**, **certificate**, and **aim**.

## **Features**

- **Add New Member**: Users can add a new member with all relevant details and a profile image.
- **View Members**: Users can view the list of all team members with their details.
- **View Member Details**: Users can click on a member's name to view more detailed information about the member.
- **Back to Home**: There is a "Back to Home" button to return to the home page from different sections.

## **Technologies Used**

- **Frontend**: 
  - React.js
  - React Router
  - Axios for making HTTP requests
  - CSS for styling
- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (with Mongoose)
  - Multer for image uploading
- **Database**: MongoDB for storing member details and images.

## **Setup Instructions**

### **Prerequisites**

Make sure you have the following installed on your local machine:
- **Node.js** (v14 or higher)
- **MongoDB** (local or remote instance)

### **Clone the Repository**

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/team-members-management-app.git
   ```

### **Backend Setup**

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` folder to store your environment variables (like MongoDB URI):
   ```
   MONGODB_URI=mongodb://localhost:27017/teamDB
   ```

4. Start the backend server:
   ```bash
   node server.js
   ```

The backend will run on `http://localhost:5000`.

### **Frontend Setup**

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm start
   ```

The frontend will run on `http://localhost:3000`.

### **Database Setup**

Make sure MongoDB is running on your local machine or a remote server. If you're using a local instance, you can start MongoDB by running:

```bash
mongod
```



## **Endpoints**

### **1. POST /api/members**

- Adds a new team member with their details (name, regno, year, degree, about, aim, certificate, and image).
- **Body**: 
  ```json
  {
    "name": "Member Name",
    "regno": "Registration Number",
    "year": "Year",
    "degree": "Degree",
    "about": "About Project",
    "aim": "Aim",
    "certificate": "Certificate",
    "image": "Image file"
  }
  ```

### **2. GET /api/members**

- Fetches a list of all members.
- **Response**: 
  ```json
  [
    {
      "_id": "123456",
      "name": "Member Name",
      "regno": "Registration Number",
      "year": "Year",
      "degree": "Degree",
      "about": "About Project",
      "aim": "Aim",
      "certificate": "Certificate",
      "image": "image.jpg"
    },
    ...
  ]
  ```

### **3. GET /api/members/:id**

- Fetches details of a single member by their `ID`.
- **Response**:
  ```json
  {
    "_id": "123456",
    "name": "Member Name",
    "regno": "Registration Number",
    "year": "Year",
    "degree": "Degree",
    "about": "About Project",
    "aim": "Aim",
    "certificate": "Certificate",
    "image": "image.jpg"
  }
  ```
### **4. Results **

![image](https://github.com/user-attachments/assets/a3c35bd6-813f-4365-9e2f-65bc99d41c77
![image](https://github.com/user-attachments/assets/6902c46f-51e0-4766-831c-4d297fcab9ba)
![image](https://github.com/user-attachments/assets/8b53d308-4c77-460a-a55d-e363269b047d)
![image](https://github.com/user-attachments/assets/32c99b19-7f43-48fb-ad5f-a2719e83f9fb)
![image](https://github.com/user-attachments/assets/666875af-d5de-472a-99d1-51098ffe18fe)




## **Conclusion**

This is a simple **team members management application** built using **React.js** for the frontend and **Node.js/Express.js** for the backend. It uses **MongoDB** for storing member data and **Multer** for handling file uploads.

