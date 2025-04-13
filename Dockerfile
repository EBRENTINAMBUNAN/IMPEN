# Gunakan image Python sebagai base
FROM python:3.11

# Set working directory
WORKDIR /app

# Copy semua file ke container
COPY . /app

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Buka port default Django
EXPOSE 8000

# Jalankan server Django
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
