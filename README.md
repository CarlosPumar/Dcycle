# REACT BOILEPLATE

This boilerplate provides a proficient react structure with a ci/cd workflow.

- Linter (airbnb rules) configured with prettier and husky
- Dockerized with development and production stages
- Jest for testing
- src folder structure:
  - commonComponents: Reusable components
  - components: Non reusable components
  - pagesComponents: Entrypoint for pages
  - routers: React routers
  - services: Access to resources like APIs
  - tests: Jest testing
  - utils: Others like constants

## How to use

First clone the project on your local machine

```shell
git clone https://github.com/CarlosPumar/React_Boilerplate
```

Then run the following command to remove the version tracking

```shell
rm -rf .git
```

In your github repository set the following secret keys:

- DOCKER_HUB_USERNAME
- DOCKER_HUB_ACCESS_TOKEN
- GIT_TOKEN

And Voilà! Happy Hacking!

## How to run

### Download Docker

Download docker and docker-compose if you haven't already

### Development stage

```shell
docker compose -f docker-compose.dev.yml up -d --build
```

localhost:3000

### Production stage

```shell
docker compose -f docker-compose.prod.yml up -d
```

localhost
