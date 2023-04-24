import express from "express";

const app = express();
const port = 3500;

app.get("/", (req, res) => {
  res.status(200).json({
    data: {
      products: [
        {
          sku: "item0001",
          name: "Widget",
          price: 9.99,
        },
        {
          sku: "item0002",
          name: "Premium Widget",
          price: 19.99,
        },
        {
          sku: "item0003",
          name: "Deluxe Widget",
          price: 29.99,
        },
      ],
    },
  });
});

app.listen(port, () => {
  console.log(`app is listening on port: ${port}`);
});
