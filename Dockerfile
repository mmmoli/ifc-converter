FROM node:19.3.0-buster

COPY . .
RUN npm install
RUN npm link

ENTRYPOINT ["ifc-converter"]
CMD ["-h"]