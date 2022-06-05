// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tags");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});
// Products belongToMany Tags (through ProductTag)
Product.belongsTo(Tag, {
  through: {
    model: ProductTag,
    unique: false,
  },
  foreignKey: "product_id",
  as: "tagIds",
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsTo(Product, {
  through: {
    model: ProductTag,
    unique: false,
  },
  foreignKey: "tag-id",
  as: "taggedProducts",
}),
  (module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
  });
