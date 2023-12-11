#!/bin/bash

# Run the npm dev command in the background
npm run dev &

# Run the uvicorn command
uvicorn server.main:app --reload
