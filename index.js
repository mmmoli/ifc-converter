#!/usr/bin/env node
const { program } = require("commander");
const ifcConvert = require("./lib");
const { dirname, basename, extname, join } = require("path");

program
  .name("IFC-Converter")
  .description("CLI to convert IFC to other formats")
  .version("0.1.0")
  .argument("<inputIfc>", "input file in ifc format")
  .argument("[output]", "out file")
  .action((inputPath, output) => {
    const name = basename(inputPath, extname(inputPath));
    const defaultOutput = join(dirname(inputPath), `${name}.glb`);
    const outputPath = output ?? defaultOutput;
    

    ifcConvert(inputPath, outputPath)
      .then(function () {
        // the file is converted to glb
        console.log("Done");
      })
      .catch((error) => {
        // instance of a Error containing the
        // message extracted from ifcConvert binary
        console.error(error);
      });
  });

program.parse();
