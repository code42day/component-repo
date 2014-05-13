[![Dependency Status](https://img.shields.io/gemnasium/code42day/component-repo.svg)](https://gemnasium.com/code42day/component-repo)
[![NPM version](https://img.shields.io/npm/v/component-repo.svg)](https://www.npmjs.org/package/component-repo)
# component-repo

Copies installed components to a repo directory conforming to component [registry] spec.
Useful when trying to roll out you own component registry.

## Install

    npm install -g component component-repo

## Usage

To save component-repo.json file

    component install # install all the components that you need
    component repo --dir /path/to/my/registry


Files are copied to create the following structure


  /path-to-repo/:user/:project/:version


You can use /path-to-repo as a root directory of a web server to host your own registry.

## License

MIT

[registry]: https://github.com/component/component/wiki/Spec#registry
