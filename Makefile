

build: components index.js slide.css test/style.css
	@component build --dev

%.css: %.mcss
	@myth $^ $@

components: component.json
	@component install --dev

test: build
	@open test/index.html

clean:
	rm -fr build components


.PHONY: clean test

