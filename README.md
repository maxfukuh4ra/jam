# 🎶 **Jam**  
A full-stack web app for Spotify users to follow their friends' live listening activity and view weekly listening stats for their own account.

---

## 🚀 **Getting Started**

1. **Clone this repository** to your local machine.
   
2. **Spotify API Setup:**
   - To use the Spotify API, create an app on the [Spotify Developer Dashboard](https://developer.spotify.com/).
   - Since our app is in development mode, access is invite-only.
   - After creating your app, copy the **client ID** and **client secret** into the `.env` file located in the backend folder.

3. **Database Setup (MongoDB Atlas):**
   - Create a MongoDB database using [MongoDB Atlas](https://www.mongodb.com/atlas/database).
   - Copy the connection string and paste it into the `MONGO_URI` field in the `.env` file.
   
   ⚠️ *Note*: Ensure the `.env` file is included in your `.gitignore` file to avoid exposing sensitive information in production.

4. **Install Dependencies:**
   - Navigate to both the `client` and `backend` folders and run:
     ```bash
     npm i
     ```
     
5. **Run the App:**
   - In two separate terminal sessions, navigate to the `client` and `backend` folders:
     - In the **backend** folder, run:
       ```bash
       npm run dev
       ```
     - In the **client** folder, run:
       ```bash
       npm start
       ```
     
6. **Access the App:**
   - Open your browser and go to [http://localhost:3000/](http://localhost:3000/).
   
---

## 🎯 **Note for TAs:**
If you'd like to run our app yourself, please request Spotify Developer access by emailing us at [kay1inchung@g.ucla.edu](mailto:kay1inchung@g.ucla.edu?subject=[jam]%20Spotify%20Developers%20Access).
