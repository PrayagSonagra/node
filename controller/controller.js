const Customer = require("../models/customerModel");

exports.createCustomer = async (req, res) => {
  try {
    const customer = await Customer.create(req.body);
    res
      .status(200)
      //   .json({ message: "customer created succesfully", data: customer })
      .json(req.body)
      .redirect("/homepage");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

exports.getAllCustomers = async (req, res) => {
  try {
    const Customers = await Customer.find({});
    res.status(200).json(Customers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findById(id);
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.updateCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findByIdAndUpdate(id, req.body);
    if (!customer) {
      res
        .status(404)
        .json({ message: ` cannot find a customer with id ${id}` });
    }
    const updatedCustomer = await Customer.findById(id);
    res.status(200).json(updatedCustomer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findByIdAndDelete(id);
    if (!customer) {
      res
        .status(404)
        .json({ message: `Cannot find customer with th id ${id}` });
    }
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.homepage = (req, res) => {
  res.render("homepage");
};
