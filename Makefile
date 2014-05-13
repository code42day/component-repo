SRC=index.js lib/registry.js bin/component-repo

lint:
	@./node_modules/.bin/jshint $(SRC)

.PHONY: lint
