FROM node:11.3.0

VOLUME /usr/local/share/.cache/yarn/v4
VOLUME /app/src

COPY ./* /app/

WORKDIR /app
CMD yarn install --silent && yarn develop
