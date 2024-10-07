#!/bin/bash

# start backend 
cd backend
npm install
npm run dev

# start frontend
cd ..
cd client
npm install
npm start &

