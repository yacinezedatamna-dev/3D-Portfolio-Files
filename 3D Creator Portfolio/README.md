# Yassine — 3D Creator Portfolio

Front-end portfolio for a 3D creator featuring an interactive living portrait.

## Run locally

Because the project uses ES Modules and `fetch`-free imports, it needs to be
served over HTTP (opening `index.html` directly will fail on `import`).

### Option A — Python
```bash
cd project
python3 -m http.server 8080
