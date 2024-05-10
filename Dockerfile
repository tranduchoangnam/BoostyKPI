# Use official Node.js image as base
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the Vite app
RUN yarn build

# Expose port 
EXPOSE 3030

# Command to start the Vite server
CMD ["yarn", "dev"]