FROM node:19.3.0-buster

COPY . .
ENTRYPOINT ["bin/IfcConvert"]
CMD ["-h"]