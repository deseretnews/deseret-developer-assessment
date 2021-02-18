FROM postgres:12

ENV POSTGRES_USER=root
ENV POSTGRES_PASSWORD=password
ENV POSTGRES_DB=api

COPY initial.sql /docker-entrypoint-initdb.d/initial.sql