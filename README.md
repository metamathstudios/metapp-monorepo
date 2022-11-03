<!-- INTRODUCTION -->
<br>
<p align="center">
  <a href="https://github.com/metamathstudios" target="_blank" rel="noopener noreferrer">
    <img width="100" src="https://user-images.githubusercontent.com/78161484/199638033-b386cdf3-cb78-4e12-accd-e6c23010a881.png" alt="MetAPP Logo">
  </a>
  
  <!-- Title Placeholder -->
  <h3 align="center">MetAPP</h3>
  <p align="center">
    MetAPP is an air-gapped service to securely authorize the use of NFTs without acting on a web3 wallet. MetAPP has a front-end to create ownership proofs and a public API that anyone can use to integrate into their projects and check these ownership proofs.
  </p>
</p>

<div align="center">

[![License](https://img.shields.io/github/license/menezesphill/metapp_monorepo)](#license)
<a href="https://gitpod.io/#https://github.com/menezesphill/metapp_monorepo" target="_blank">
<img src="https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod" alt="Gitpod">
</a>
</div>

<p align="center">
    MetAPP is a solution created with ❤️ and:
    <br><br>
    <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg" alt="TS" width="40" height="40" style="margin-right: 1rem;"/>
    </a>
    <a href="https://docs.soliditylang.org/en/v0.8.14/" target="_blank" rel="noreferrer">
     <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/solidity/solidity-plain.svg" alt="Solidity" width="40" height="40" style="margin-right: 1rem;"/>
     </a>
     <a href="https://trufflesuite.com/" target="_blank" rel="noreferrer">
     <img src="https://raw.githubusercontent.com/trufflesuite/ganache/develop/docs/assets/img/truffle-logo-dark.svg" alt="Truffle" width="40" height="40" style="margin-right: 1rem;"/>
     </a>
     <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
     <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" style="margin-right: 1rem;"/>
     </a>
     <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
     <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" alt="Next.JS" width="40" height="40" style="margin-right: 1rem;"/>
     </a>
     <a href="https://postman.com" target="_blank" rel="noreferrer">
     <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40" style="margin-right: 1rem;"/>
     </a>
     <br>
     <a href="https://www.docker.com/" target="_blank" rel="noreferrer">
     <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" alt="Docker" width="40" height="40" style="margin-right: 1rem;"/>
     </a>
     <a href="https://nestjs.com/" target="_blank" rel="noreferrer">
     <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-plain.svg" alt="NestJS" width="40" height="40" style="margin-right: 1rem;"/>
     </a>
     <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">
     <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="SASS" width="40" height="40" style="margin-right: 1rem;"/>
     </a>
     <a href="https://www.prisma.io/" target="_blank" rel="noreferrer">
     <img src="https://user-images.githubusercontent.com/78161484/199641340-d7b3f519-e30d-4f35-a870-8232d2f7ffeb.svg" alt="Prisma" width="40" height="40" style="margin-right: 1rem;"/>
     </a>
     <a href="https://gitpod.io/" target="_blank" rel="noreferrer">
     <img src="https://gitpod.io/static/media/gitpod.a7ab6752.svg" alt="Gitpod" width="40" height="40" style="margin-right: 1rem;"/>
     </a>
     <a href="https://www.postgresql.org/" target="_blank" rel="noreferrer">
     <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-plain.svg" alt="PostgreSQL" width="40" height="40" style="margin-right: 1rem;"/>
     </a>
  </p>

## 🧭 Table of Contents

- [🧭 Table of Contents](#-table-of-contents)
- [🚀 Getting Started](#-getting-started)
  - [📰 Frontend - Using MetAPP to validate ownership](#-frontend---using-metapp-to-validate-ownership)
  - [📰 Backend - Managing database with Adminer](#-backend---managing-database-with-adminer)
  - [📰 API - Getting ownership proofs from database using NestJS API](#-api---getting-ownership-proofs-from-database-using-nestjs-api)
  - [📰 API - Code Examples](#-api---code-examples)

## 🚀 Getting Started

The **MetAPP** Monorepo is a ready-to-code repository fully integrated to `Gitpod`. You can start coding now by visiting the Gitpod Workspace below:

<p align="center">
<a href="https://gitpod.io/#https://github.com/menezesphill/metapp_monorepo" target="_blank" rel="noreferrer">
     <img src="https://gitpod.io/static/media/gitpod.a7ab6752.svg" alt="Gitpod" width="40" height="40" style="margin-right: 1rem;"/>
</a>
<br>
<code>Gitpod Workspace Ready-to-Code</code>
</p>

Once you open the gitpod, it will launch the services listed below, it takes ~2 minutes if it is your first time running it:

 - PostgreSQL Database at `Port 5432`
 - Adminer Database Visualizer at `Port 8080`
 - NestJS API Server at `Port 3001`
 - MetAPP Front-End at `Port 3000` **


** _The Front-End will open in a new tab once it is ready, however your browser may block it from opening._


Once all services have started, you can see the list of available ports going to the `PORTS` tab next to the terminal window. It is important to note that The Gitpod instance will close automatically after `30 minutes of inactivity`.

<p align="center">
  <img src="https://user-images.githubusercontent.com/78161484/199644030-72ce2d70-24e9-4fc1-a5f0-f447ce4b750d.png" alt="Gitpod 01"/>
</p>

## 📰 Frontend - Using MetAPP to validate ownership

If after you run `Gitpod` for the first time, the front-end of MetAPP doesn't open in a new tab, you can go ahead and click on the link available in the `PORTS` tab on Gitpod, as the figure above shows. You should be able to see the following dApp:

<p align="center">
  <img src="https://user-images.githubusercontent.com/78161484/199645037-ab07ff21-24ac-422c-9a9d-52c194e7f658.png" alt="MetAPP front"/>
</p>

You can either `LOGIN` or `SIGN UP` in the Dapp:

<p align="center">
  <img width=40% src="https://user-images.githubusercontent.com/78161484/199645305-3dc0d87a-0e46-4276-9e4c-e9ecd63e4b6b.png" alt="Login"/>
  <img width=40% src="https://user-images.githubusercontent.com/78161484/199645318-e0f7fc80-64f9-407f-b5f5-462477233c8b.png" alt="Signup"/>
</p>

After successfully logging in, the next step will ask the user to connect to a Metamask Wallet holding the NFTs that will be verified.

<p align="center">
  <img src="https://user-images.githubusercontent.com/78161484/199645505-83d4e6cd-2326-4ac3-9285-c36b091066e7.png" alt="MetAPP front"/>
</p>

https://user-images.githubusercontent.com/78161484/199645915-bd39c60e-1fbf-46a6-a1b8-26ae0db13d1c.mp4

The DApp is currently compatible with:

 - Ethereum Goerli Testnet
 - Polygon Mumbai Testnet
 
The `AuthBank` Smart contracts that manage the validation of ownership are deployed at:

 - [AuthBank Deployment on Goerli](https://goerli.etherscan.io/address/0xe51c583679426c8a04a33ad4e6e67f6b3cad6727#code)
 - [AuthBank Deployment on Mumbai](https://mumbai.polygonscan.com/address/0x19d54025ea9c600c93559f7035f12dd2c3398ac7#code)
 
For that reason, in order to proceed with the next steps, you need to hold a ERC721 compatible token on either `GOERLI TESTNET` or `MUMBAI TESTNET`. By clicking in the activation button of any of the NFTs you currently hold. A Metamask confirmation window pops-up:

<p align="center">
  <img src="https://user-images.githubusercontent.com/78161484/199646850-15f963a0-3042-46e5-a266-5af41e53565b.png" alt="MetAPP front"/>
</p>

Once the transaction is confirmed on the blockchain. Two things will happen:

  1) The Validation is written to the Database;
  2) The Validation is written to the Blockchain;
  
Validations expire within 7 days and lose validity once the NFT change hands to prevent abuse. These validations will be made available through API and the user don't have to use his web3 wallet to access the validation proof, only his account `name` and `password`. 

## 📰 Backend - Managing database with Adminer

To better visualize and manage what is happening in the backend of our application, we also serve a lightweight database management tool called `Adminer`, adminer is available on port 8080 and you can find a link to the service on the `PORTS` tab in the `Gitpod` terminal window.

<p align="center">
  <img src="https://user-images.githubusercontent.com/78161484/199648413-06fc0c5f-0ff8-4b0c-b3c7-c65e32239740.png" alt="Adminer Front"/>
</p>

Once you click on the service, a the following window should show up:

<p align="center">
  <img src="https://user-images.githubusercontent.com/78161484/199648570-3ec1813b-ab00-48c3-863b-88636511fce4.png" alt="Adminer"/>
</p>

To loging to the database, we can use the information described in the `./backend/docker-compose.yml` for our PostgreSQL container:

```sh
System: PostgreSQL
Server: pgsql
Username: pguser
Password: pgpassword
```

We want to see the info we are writting in the `postgres_auth` database:

<p align="center">
  <img src="https://user-images.githubusercontent.com/78161484/199649025-a5228367-2f48-479d-a4a7-f187adfd5b9b.png" alt="Adminer"/>
</p>

Once we click in `postgres_auth` we have access to two tables: `Users` and `Assets`. Clicking in either `select Asset` or `select User` should show the user and the asset we created in the [📰 Frontend - Using MetAPP to validate ownership](#-frontend---using-metapp-to-validate-ownership) section:

<p align="center">
  <img src="https://user-images.githubusercontent.com/78161484/199649341-18abb74d-d6c8-4a76-94a3-d2c3be00b055.png" alt="Adminer 01"/>
</p>

<p align="center">
  <img src="https://user-images.githubusercontent.com/78161484/199649362-02f847a9-b8d7-4a07-9c27-5b9c4056bee3.png" alt="Adminer 02"/>
</p>

## 📰 API - Getting ownership proofs from database using NestJS API

An API is served at `PORT 3001` so we can fetch the data from NFTs validated with the front-end served @ `PORT 3000`. This API is public and any user can use it given it has a valid account that can be created in the dapp or in the API itself. The following routes are available:

```sh
POST {API_URL}/login             # Route used for logging in, it returns a JWT token that must be used to access the other routes
GET  {API_URL}/info              # Route used to get user info such as email, name, role and associated wallets
POST {API_URL}/users/register    # Public route used to register a new user
GET  {API_URL}/getall            # Protected route (Admin only) to get all users data
POST {API_URL}/wallet            # Link a new wallet to user
GET  {API_URL}/wallet            # Get all wallets from user
DEL  {API_URL}/wallet            # Delete all wallets from user
POST {API_URL}/assets            # Create a new ownership proof on the database
GET  {API_URL}/assets            # Get all ownership proofs for a given JWT bearer
DEL  {API_URL}/assets            # Delete a ownership proof for a given NFT
```

These endpoints and the correct configuration to use them are available as a Postman Collection. To import it and start using it, take the following steps:

  1) With Postman Open, in your Workspace, click in Import:
  
<p align="center">
  <img src="https://user-images.githubusercontent.com/78161484/199651005-c4013d71-ae8f-47a8-ac79-37e911ad6f49.png" alt="Postman 1"/>
</p>

  2) Select `Link`, paste the link below, and click in `Continue`:
  
  ```sh
  https://www.getpostman.com/collections/e59d40ab627af9bfad88
  ```
  
<p align="center">
  <img src="https://user-images.githubusercontent.com/78161484/199651329-c03b56a5-97c6-48d2-b57b-26566942335d.png" alt="Postman 2"/>
</p>

 3) In the `Import Elements` tab, go ahead and click in `Import`

<p align="center">
  <img src="https://user-images.githubusercontent.com/78161484/199651562-0c14b4f0-78a0-450a-ad31-42d461fc633a.png" alt="Postman 3"/>
</p>

If you are using `Gitpod`, remember to change the default `http://localhost:3001/` URL for the URL provided in the `PORTS` tab.

### 📰 API - Code Examples

 - Creating a new User using NodeJs:
 
 ```jsx
 var axios = require('axios');
var data = JSON.stringify({
  "name": "admin",
  "email": "admin@mail.com",
  "password": "admin"
});

var config = {
  method: 'post',
  url: 'http://localhost:3001/users/register', // Remember to change the URL if using Gitpod
  headers: { 
    'Accept': 'application/json', 
    'Content-Type': 'application/json'
  },
  maxRedirects: 0,
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
 ```

- Logging In using NodeJs:

``` jsx
var axios = require('axios');
var data = JSON.stringify({
  "email": "admin@mail.com",
  "password": "admin"
});

var config = {
  method: 'post',
  url: 'http://localhost:3001/login', // Remember to change the URL if using Gitpod
  headers: { 
    'Accept': 'application/json', 
    'Content-Type': 'application/json'
  },
  maxRedirects: 0,
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```

- Accessing protected routes using NodeJs ( wallet, assets, info ):

```jsx
var axios = require('axios');
var AuthToken = 'YOUR_JWT_TOKEN'; // A JWT token generated from Login API 
var data = '';

var config = {
  method: 'get',
  url: 'http://localhost:3001/info',
  headers: { 
    'Accept': 'application/json', 
    'Authorization': `Bearer ${AuthToken}`,
  },
  maxRedirects: 0,
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```















 












