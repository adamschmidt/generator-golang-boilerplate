'use strict';
var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('domain', { type: String, required: true });
    this.argument('appname', { type: String, required: true });
  }

  dotfiles() {
    var params = { appname: this.options.appname, domain: this.options.domain };
    this.fs.copyTpl(this.templatePath('_dockerignore'), this.destinationPath('.dockerignore'), params);
    this.fs.copyTpl(this.templatePath('_gitignore'), this.destinationPath('.gitignore'), params);

    [
      'container/files/etc/confd/conf.d/.gitkeep',
      'container/files/etc/confd/templates/.gitkeep'
    ].forEach((item) => {
      this.fs.copyTpl(this.templatePath('_gitkeep'), this.destinationPath(item), params);
    });
  }
  makefile() {
    var params = { appname: this.options.appname, domain: this.options.domain };
    this.fs.copyTpl(this.templatePath('_Makefile'), this.destinationPath('Makefile'), params);
  }
  readme() {
    var params = { appname: this.options.appname, domain: this.options.domain };
    this.fs.copyTpl(this.templatePath('_README.md'), this.destinationPath('README.md'), params);
  }
  dockerfile() {
    var params = { appname: this.options.appname, domain: this.options.domain };
    this.fs.copyTpl(this.templatePath('_Dockerfile'), this.destinationPath('Dockerfile'), params);
    this.fs.copyTpl(this.templatePath('_docker-compose.yml'), this.destinationPath('docker-compose.yml'), params);
  }
  startScript() {
    var params = { appname: this.options.appname, domain: this.options.domain };
    this.fs.copyTpl(this.templatePath('_start.sh'), this.destinationPath('container/files/opt/app/start.sh'), params);
  }
  code() {
    var params = { appname: this.options.appname, domain: this.options.domain };
    this.fs.copyTpl(this.templatePath('_main.go'), this.destinationPath(`src/${this.options.domain}/${this.options.appname}/main.go`), params);
  }
  ideSettings() {
    var params = { appname: this.options.appname, domain: this.options.domain };
    this.fs.copyTpl(this.templatePath('_settings.json'), this.destinationPath('.vscode/settings.json'), params);
    this.fs.copyTpl(this.templatePath('_launch.json'), this.destinationPath('.vscode/launch.json'), params);
  }
}
