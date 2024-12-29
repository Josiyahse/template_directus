FROM tractr/directus-sync:11.3.5

WORKDIR /directus

COPY directus-sync.config.cjs /directus
