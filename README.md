## Frontend Challenge Task

[Demo Link][1]
[1]: https://sdly-task.web.app/ "Demo link"
Click above to see a demo application hosted on firebase.

### Steps to run

```bash
npm install
npm start
```

To deploy the frontend to firebase, please run:
**note: please setup the firebase cli on your development machine before running
**

```bash
npm run deploy
```

### Mock API

I have used firebase cloud functions to create a mock endpoint, which is hosted at:
https://asia-east2-sdly-task.cloudfunctions.net/
These are the two endpoints which are used in this web application:

1. https://asia-east2-sdly-task.cloudfunctions.net/questions
1. https://asia-east2-sdly-task.cloudfunctions.net/topics

The data models are present at -
/functions/data.js in the repository

To run in development mode

```bash
cd functions
npm run serve
```

To deploy (deploys to asia-east-2 region)

```bash
cd functions
npm run deploy
```
