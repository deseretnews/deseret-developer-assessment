FROM node:12-slim

WORKDIR /app

# Node modules
COPY package*.json ./
RUN npm ci --only=production

# Timezone
ENV TIMEZONE "America/Denver"
RUN ln -snf /usr/share/zoneinfo/$TIMEZONE /etc/localtime && echo $TIMEZONE > /etc/timezone

EXPOSE 3000
CMD ["npm", "run", "dev"]