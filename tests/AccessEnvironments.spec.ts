import {test} from "@playwright/test";

//import dotenv from "dotenv";

//dotenv.config({path: 'TestData/.env'});

test("Access Read Dot Env", ({page}) => {
    const url = process.env.url as string;
   // console.log(`Selected environment: ${process.env.ENV ?? "QA"}`);
    console.log(`Selected URL: ${url}`);
});
