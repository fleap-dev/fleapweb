# Builds the site with Astro, then serves the static output with nginx.
# Deployed by the fleap-fleet repo (services/baobab/fleapweb/deploy.sh).

# The build stage runs on the builder's own platform: its output is plain files,
# so building an amd64 image on an arm64 machine needs no emulation here.
FROM --platform=$BUILDPLATFORM docker.io/library/node:22.23.4-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY . .
RUN npm run build

FROM docker.io/library/nginx:1.30.6-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Its own folder, so the default pages in /usr/share/nginx/html (e.g. 50x.html) are not served.
COPY --from=build /app/dist /srv/www
