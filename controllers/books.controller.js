import { booksModel } from "../database/schema/books.schema.js";

export const createBooks = async (req, res) => {
  try {
    const { title, author, summary } = req.body;
    const createdBook = await booksModel.create({
      title,
      author,
      summary,
    });
    return res.status(201).send(createdBook);
  } catch (err) {
    throw `Error in creating books ${err}`;
  }
};

export const listBooks = async (res) => {
  try {
    console.log("===========");
    const allBooks = await booksModel.find();
    return res.status(200).send(allBooks);
  } catch (err) {
    throw `Error in Listing books ${err}`;
  }
};

export const findById = async (req, res) => {
  try {
    const id = req.query.id;
    if (!id) {
      return res.status(400).send({
        msg: "Id is required",
      });
    }
    const book = await booksModel.findById(id);
    return res.status(200).send(book);
  } catch (err) {
    throw `Error in booksFindById ${err}`;
  }
};

export const updateBooksDetails = async (req, res) => {
  try {
    //Check exists or not
    const { id, title, author, summary } = req.body;
    const checkBook = await booksModel.findById(id);
    if (!checkBook) {
      return res.status(400).send({
        msg: "No Book Found",
      });
    }
    const updatedBookDetails = await booksModel.findOneAndUpdate(
      { _id: id },
      {
        title: title ? title : checkBook.title,
        author: author ? author : checkBook.author,
        summary: summary ? summary : checkBook.summary,
      }
    );
    const updatedBook = await booksModel.findById(id);
    return res.status(200).send(updatedBook);
  } catch (err) {
    console.log(err);
  }
};

export const deleteBook = async (req, res) => {
  try {
    const id = req.query.id;
    const checkBook = await booksModel.findById(id);
    if (!checkBook) {
      return res.status(400).send({
        msg: "No Book Found",
      });
    }
    const deletedBook = await booksModel.findOneAndDelete({ _id: id });
    return res.status(200).send({ msg: "Deleted Successfully" });
  } catch (err) {
    throw `Error in Deletion Of Book ${err}`;
  }
};
