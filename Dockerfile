# Base image
FROM node:18-alpine as builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies with legacy-peer-deps
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Use a smaller image for the final stage
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy built assets from the builder stage
COPY --from=builder /app ./

# Expose the port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]
