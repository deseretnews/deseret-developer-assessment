Deseret Developer Assessment
===

Synopsis:
In the typical fashion you will be creating a todo list tracker. Part of this has been set up for you to decrease the amount of time spent doing setup tasks and allowing you to focus more on development.

Goals:
- To assess technical skills in full stack development in the frameworks and languages that we use
- Assessment should take less than 2 hours to complete
- When challenge is completed evaluators should be able to run `docker-compose up` on your project and after initial provisioning and set up the all challenges are completed and work as expected.

# Challenges:

### Docker
Assumptions:
- Webserver is exposed on port 443. Host file entries should be made for dev.deseret.com (frontend) and dev-api.deseret.com (api).
- Frontend container exposes port 3000 and should be named `frontend`
- API container exposes port 9000 and should be named `api`
  
Tasks:
- Set up a docker-compose.yml that has 4 services in it. The `Dockerfile`'s for all services are in their respective directories
  - Nginx webserver
  - PHP FPM container running the API code
    - This should mount the volume containing the `api` directory @ `/var/www/html/api`
  - A node container to run the NextJS Frontend
    - This should mount the volume containing the `frontend` directory @ `/app`
  - A postgres database container that loads in the schema data from the files provided

### Database
Tasks:
- Add 2 fields to the database, created_at and completed_at.
- Add an index for each of the new fields

### API

Reference Docs:
Symfony: https://symfony.com/doc/current/index.html
Api Platform: https://api-platform.com/docs/core/

Tasks:
- Update the entity with the 2 new fields
- Add a calculated field that will show task working time (completed_at - created_at)
- When a todo item is created, the created_at time should be automatically updated.
- When a todo item is marked as completed, the completed_at time should be automatically updated.

### Frontend

Reference Docs:
NextJs: https://nextjs.org/docs

Tasks:
- Create a page that houses the todo interface
- The page should:
  - List all current todos when loaded
  - Allow for the creation of new todo items, persisting them to the database
  - Allow for the removal of items
  - Allow items to be marked as completed



