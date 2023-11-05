build:
	npx tailwindcss -i src/app.css -o dist/app.css --minify

watch:
	npx tailwindcss -i src/app.css -o dist/app.css --watch
