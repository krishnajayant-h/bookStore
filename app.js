import express from "express";
import "dotenv/config";
import { connection } from "./database/connection.js";
import {
  createBooks,
  deleteBook,
  findById,
  listBooks,
  updateBooksDetails,
} from "./controllers/books.controller.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  res.send({
    body: "UPpppppppppppp",
  });
});

app.post("/book", (req, res) => {
  return createBooks(req, res);
});
app.get("/books", (req, res) => {
  return listBooks(res);
});
app.put("/book", async (req, res) => {
  const bookDetails = await updateBooksDetails(req, res);
  return bookDetails;
});
app.get("/book", (req, res) => {
  return findById(req, res);
});
app.delete("/book", (req, res) => {
  return deleteBook(req, res);
});

app.listen(process.env.PORT, async () => {
  await connection();
  console.log(`Listening on port ${process.env.PORT}`);
});
