# Usian an official Node.js runtime as a parent image
FROM node:10

# Sets the working directory to desired
WORKDIR /vue-boilerplate

# Copy desired files into desired container's directory
# In this case, we will be copying the whole Vue.js application
COPY ./ /vue-boilerplate

# Install any needed packages specified in package.json
# and builds the project
RUN npm install && npm run build