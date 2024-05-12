# Angular-Node-Odoo-Postgres Docker Container

Este repositorio contiene un entorno Dockerizado para desarrollar una aplicación web utilizando Angular, Node.js, Odoo y PostgreSQL. Con esta configuración, puedes tener un entorno de desarrollo consistente y fácilmente replicable.

## Requisitos previos
- Docker instalado en tu máquina.

## Instrucciones de uso

### Paso 1: Configurar el fichero .yml con Odoo y Postgres
- docker-compose.yml
```bash
version: '3.1'
services:
  web:
    container_name: odoo17
    image: odoo:17.0
    depends_on:
      - mydb
    ports:
      - "8069:8069"
    volumes:
      - ./config:/etc/odoo
      - ./addons:/mnt/extra-addons  
    environment:
      - HOST=mydb
      - USER=odoo
      - PASSWORD=myodoo
    networks:
      - mi_red_odoo
  mydb:
    container_name: postgres16
    image: postgres:16
    ports:
      - "5432:5432"
    environment:
      - POSTGRES_DB=postgres
      - POSTGRES_PASSWORD=myodoo
      - POSTGRES_USER=odoo
    networks:
      - mi_red_odoo
networks:
  mi_red_odoo:
```
### Paso 2: Configurar el contenedor de Docker
```bash
docker run -it --name nodejs -p 3000:3000 --network=odoo_mi_red_odoo node:21
```

#### Dentro del contenedor de Node.js, instala Angular CLI y verifica las versiones de Node.js y npm
```bash
node -v
npm -v
npm install -g @angular/cli
```

### Paso 3: Clonar el repositorio dentro del contenedor de Node
```bash
git clone https://github.com/Gfg92/angular-node-odoo-postgres-docker-container.git
cd angular-node-odoo-postgres-docker-container
```

### Paso 4: Ejecutar la aplicación

#### En el directorio `/server`, ejecuta el servidor Node.js
```bash
cd server
node server.js
```

#### En el directorio `/client`, inicia el servidor de desarrollo de Angular
```bash
cd ../client
ng serve
```

La aplicación estará disponible en [http://localhost:4200](http://localhost:4200).

## Creación del primer módulo
#### Dentro del contenedor de Odoo ejecuta el siguiente comando:
```bash
/bin/odoo scaffold nombre-modulo /mnt/extra-addons/
```
##### La lista de módulos se encuentran en: /usr/lib/python3/dist-packages/odoo/addons

¡Disfruta desarrollando tu aplicación web con Angular, Node.js, Odoo y PostgreSQL en un entorno Dockerizado y bien estructurado!
