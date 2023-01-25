#!/usr/bin/env node
const { program } = require("commander");

program
  .name("IFC-Converter")
  .description("CLI to convert IFC to other formats")
  .version("0.1.0");

program.parse(process.argv);

console.log(program.args);
