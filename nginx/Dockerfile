FROM nginx:latest

RUN rm -rf /etc/nginx/conf.d/default.conf
RUN apt-get update && apt-get install --no-install-recommends --no-install-suggests -y openssl libssl-dev

RUN echo '[req]\n\
    distinguished_name = req_distinguished_name\n\
    x509_extensions = v3_req\n\
    prompt = no\n\
    \n\
    [req_distinguished_name]\n\
    C=US\n\
    ST=Utah\n\
    L=Utah\n\
    O=DeseretNews\n\
    OU=Development\n\
    CN = *.deseret.com\n\
    \n\
    [v3_req]\n\
    keyUsage = keyEncipherment, dataEncipherment\n\
    extendedKeyUsage = serverAuth\n\
    subjectAltName = @alt_names\n\
    \n\
    [alt_names]\n\
    DNS.1 = dev.deseret.com\n\
    DNS.2 = dev-api.deseret.com'\
 > deseret.com.cnf

RUN openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/deseret.key -out /etc/ssl/certs/deseret.pem -config deseret.com.cnf -extensions 'v3_req'

COPY conf.d/api.conf /etc/nginx/conf.d/api.conf
COPY conf.d/frontend.conf /etc/nginx/conf.d/frontend.conf

