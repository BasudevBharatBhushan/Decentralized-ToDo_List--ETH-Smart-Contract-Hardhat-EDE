# Decentralized-ToDo_List--ETH-Smart-Contract-Hardhat-EDE
- Commit 1: App deployed in Hardhat local test network
- Commit 2: App deployed in Robsten Test Network Using Moralis  

### Reference - https://youtu.be/0X30BftznSE | Youtube- [EatTheBlocks](https://www.youtube.com/c/EatTheBlocks) 

## App Demo - Using Hardhat Local Test Network



https://user-images.githubusercontent.com/64151314/198526350-ffc7036a-3968-4397-af26-3400a88ef7d9.mp4

### Steps to Run in Local Enviorment
Step 1 - npm start (Start the frontend)  
Step 2 - npx hardhat node (Activate the hardhat local blockchain)  
Step 3 - npx hardhat run --network localhost scripts/deploy.js , deploy the contract  
Step 4 - Reset the Metamask Account --> Setting - Advanced - Reset Account


        
# Steps to setup a devlopment Environment for Dapp using Hardhat 
## Create Hardhat Project
>- Step 1:
 Create a directory  
```mkdir Dapp_TodoList```
>- Step 2: Initialize a new npm project  
```npm init -y```
>- Step 3: Install Hardhat  
```npm i --save-dev hardhat```
>- Step 4: Local Installation of Hardhat  
```npx hardhat```   
>  
> ![image](https://user-images.githubusercontent.com/64151314/188880178-2e5d4958-4192-4abb-9e6d-c4d5ba3972c7.png)   
> Select what you want to create
  
  ## Create React Frontend
>- Step 1: Inside the project directory run the following command to create a react frontend  
```npx create-react-app frontend```  
