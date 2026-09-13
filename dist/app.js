import express from 'express';
import router from './route.js';
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/apis", router);
app.listen(4000, () => {
    console.log("server started on the port 4000");
});
//# sourceMappingURL=app.js.map