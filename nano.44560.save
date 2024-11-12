# Gunakan base image Node.js versi LTS
FROM node:lts

# Tentukan working directory
WORKDIR /app

# Copy file package.json dan package-lock.json ke container untuk menginstal dependensi
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy seluruh kode aplikasi ke dalam container
COPY . .

# Expose port aplikasi (3000 untuk Next.js)
EXPOSE 3000

# Perintah default untuk menjalankan Next.js di mode development
CMD ["npm", "run", "dev"]
