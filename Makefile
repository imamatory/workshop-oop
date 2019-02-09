all: install build

install:
	yarn install

run:
	npx babel-node ./src/bin/index.js

build:
	rm -rf dist
	yarn build

test:
	yarn test

lint:
	npx eslint ./src

.PHONY: test
