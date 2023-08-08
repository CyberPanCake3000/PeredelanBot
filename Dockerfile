# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source code
COPY . .

COPY dist/.env .env

# Build TypeScript code
RUN npm run build

# Expose a port (if your app uses a specific port)
EXPOSE 3000

# Command to run your app
CMD ["node", "./dist/index.js"]