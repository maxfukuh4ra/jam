#!/bin/bash

cd backend
npm install
npm run dev &

cd ../client
npm install
npm start