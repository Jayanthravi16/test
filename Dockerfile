FROM node:20-alpine

WORKDIR /app

# Copy dependency manifests first for layer caching
COPY package*.json ./
RUN npm ci --omit=dev

# Copy application source code
COPY math.js ./

CMD ["node", "math.js"]