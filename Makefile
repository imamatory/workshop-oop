all: install build

install:
	yarn install

build:
	rm -rf dist
	yarn build

test:
	yarn test

lint:
	npx eslint ./src

.PHONY: test
