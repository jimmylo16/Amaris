## Live App description!

This is an app where you can add you favourites movies to your accountm, some test where added

## Technologies Stack Used

- [Next.js](https://nextjs.org/): A React framework for building server-side rendered and statically exported applications.
- [NestJS](https://nestjs.com/): A progressive Node.js framework for building efficient and scalable server-side applications.
- [Turbo]: Run the app and cache for buid
- [TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript that compiles to plain JavaScript.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for quickly building custom designs.
- [Docker](https://www.docker.com/): A platform for developing, shipping, and running applications inside containers.
- [Docker Compose](https://docs.docker.com/compose/): A tool for defining and running multi-container Docker applications.

## Postgress

1. Clone the repository and navigate to the back folder

```bash
$ cd .\Back\
```

2. Set up the database with docker

```bash
$ docker-compose up -d
```

## Backend Setup

3. Install Back Dependencies

```bash
$ npm install
```

Ensure that you are in the back folder and the node_modules folder is inside

## FrontEnd Setup

4. Navigate to front folder

```bash
$ cd ..
$ cd .\front\
```

5. Install Front Dependencies

```bash
$ npm install
```

Ensure that you are in the front folder and the node_modules folder is inside

4. Navigate to amaris

```bash
$ cd ..
$ cd ..

```

6. Run the project in dev Mode, with turbo you execute the back and the front, by default the front in http://localhost:3001 and the backend http://localhost:3000/api

```bash
$ npm run dev
```
