## httplog

httplog is a lightweight HTTP logger designed for testing and debugging webhooks. It logs the headers and body of all incoming HTTP requests to any path, making it easy to inspect and verify payloads from external services during development or integration testing.

### Usage
- Deploy with Docker:
```sh
  docker run -d --name httplog -p 80:8000 angsanley/httplog:latest
  docker logs -f httplog
```
- Or run locally:
```sh
  deno task start
```
