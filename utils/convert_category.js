const film_categories = require("../data/film_categories");

module.exports = function convert_category(category_name) {
  const code_category = film_categories.find(
    (category_object) => category_object.category.toLowerCase() === category_name.toLowerCase()
  );
  if (code_category) {
    return code_category.code;
  } else {
    return "Category not funded";
  }
};
