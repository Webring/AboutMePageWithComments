FROM python:3.12-slim

WORKDIR /backend

COPY . .

RUN pip3 install -r requirements.txt
RUN python3 manage.py migrate

CMD ["gunicorn", "--bind", "0.0.0.0:8000", "backend.wsgi"]