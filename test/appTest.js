'use strict';
let path = require('path');
let assert = require('yeoman-assert');
let helpers = require('yeoman-test');

const generatorBase = path.join(__dirname, '../app');

let generator;

const beforeLoad = (prompts) => {
  return helpers.run(generatorBase)
    .inTmpDir()
    .withArguments(['testing.org', 'test'])
    .withOptions({})
    .withPrompts(prompts)
    .on('ready', (instance) => {generator = instance})
    .toPromise();
};

before(() => {
  return beforeLoad({});
});

describe('golang-boilerplate:app', () => {
  describe("#createFiles", () => {
    it("should create dotfiles", () => {
      assert.file([
        '.gitignore',
        '.dockerignore'
      ]);
    });
    it("should create a Makefile", () => {
      assert.file([
        'Makefile'
      ]);
    });
    it("should create a README", () => {
      assert.file([
        'README.md'
      ]);
    });
    it("should create Docker files", () => {
      assert.file([
        'Dockerfile',
        'docker-compose.yml'
      ]);
    });
    it("should create container files", () => {
      assert.file([
        'container/files/etc/confd/conf.d/.gitkeep',
        'container/files/etc/confd/templates/.gitkeep',
        'container/files/opt/app/start.sh'
      ]);
    });
    it("should create a Golang main code file", () => {
      assert.file([
        'src/testing.org/test/main.go'
      ]);
    });
    it("should create VSCode IDE files", () => {
      assert.file([
        '.vscode/settings.json',
        '.vscode/launch.json'
      ]);
    });
  });
});
