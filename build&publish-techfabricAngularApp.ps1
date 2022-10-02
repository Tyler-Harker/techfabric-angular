cd projects/techfabric-angular-app
npm install
npm install @techfabric/angular-controls@latest
npm version patch --force
ng build techfabricAngularApp
cd ../../dist/techfabric-angular-app/
npm publish
cd ../../