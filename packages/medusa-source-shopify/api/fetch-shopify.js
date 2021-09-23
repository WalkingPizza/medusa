"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true,
})
exports.fetchShopify = fetchShopify

var _medusaCoreUtils = require("medusa-core-utils")

var _axios = _interopRequireDefault(require("axios"))

var _buildQuery = require("../utils/build-query")

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg)
    var value = info.value
  } catch (error) {
    reject(error)
    return
  }
  if (info.done) {
    resolve(value)
  } else {
    Promise.resolve(value).then(_next, _throw)
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args)
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value)
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err)
      }
      _next(undefined)
    })
  }
}

function getHeaders(password) {
  return {
    "Content-Type": "application/json",
    "X-Shopify-Access-Token": password,
    "X-Shopify-Api-Features": "include-presentment-prices",
  }
}

function fetchShopify(_x) {
  return _fetchShopify.apply(this, arguments)
}

function _fetchShopify() {
  _fetchShopify = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee(options) {
      var password,
        domain,
        productsQuery,
        customCollectionsQuery,
        smartCollectionsQuery,
        collectsQuery,
        headers,
        shopify
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              ;(password = options.password),
                (domain = options.domain),
                (productsQuery = options.productsQuery),
                (customCollectionsQuery = options.customCollectionsQuery),
                (smartCollectionsQuery = options.smartCollectionsQuery),
                (collectsQuery = options.collectsQuery)
              console.log(password)
              headers = getHeaders(password)
              shopify = {}
              _context.next = 6
              return fetchAllProducts(productsQuery, domain, headers)

            case 6:
              shopify.products = _context.sent
              _context.next = 9
              return fetchCustomCollections(
                customCollectionsQuery,
                domain,
                headers
              )

            case 9:
              shopify.customCollections = _context.sent
              _context.next = 12
              return fetchSmartCollections(
                smartCollectionsQuery,
                domain,
                headers
              )

            case 12:
              shopify.smartCollections = _context.sent
              _context.next = 15
              return fetchCollects(collectsQuery, domain, headers)

            case 15:
              shopify.collects = _context.sent
              return _context.abrupt("return", shopify)

            case 17:
            case "end":
              return _context.stop()
          }
        }
      }, _callee)
    })
  )
  return _fetchShopify.apply(this, arguments)
}

function fetchAllProducts(_x2, _x3, _x4) {
  return _fetchAllProducts.apply(this, arguments)
}

function _fetchAllProducts() {
  _fetchAllProducts = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee2(
      query,
      domain,
      headers
    ) {
      var path
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch ((_context2.prev = _context2.next)) {
            case 0:
              path = (0, _buildQuery.buildQuery)(query)
              _context2.next = 3
              return _axios["default"]
                .get(
                  "https://"
                    .concat(
                      domain,
                      ".myshopify.com/admin/api/2021-07/products.json"
                    )
                    .concat(path),
                  {
                    headers: headers,
                  }
                )
                .then(function (res) {
                  return res.data.products
                })
                ["catch"](function (error) {
                  console.log(error)
                  throw new _medusaCoreUtils.MedusaError(
                    _medusaCoreUtils.MedusaError.Types.INVALID_DATA,
                    {
                      message: "Shopify: ".concat(error.message),
                    }
                  )
                })

            case 3:
              return _context2.abrupt("return", _context2.sent)

            case 4:
            case "end":
              return _context2.stop()
          }
        }
      }, _callee2)
    })
  )
  return _fetchAllProducts.apply(this, arguments)
}

function fetchSmartCollections(_x5, _x6, _x7) {
  return _fetchSmartCollections.apply(this, arguments)
}

function _fetchSmartCollections() {
  _fetchSmartCollections = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee3(
      query,
      domain,
      headers
    ) {
      var path
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch ((_context3.prev = _context3.next)) {
            case 0:
              path = (0, _buildQuery.buildQuery)(query)
              _context3.next = 3
              return _axios["default"]
                .get(
                  "https://"
                    .concat(
                      domain,
                      ".myshopify.com/admin/api/2021-07/smart_collections.json"
                    )
                    .concat(path),
                  {
                    headers: headers,
                  }
                )
                .then(function (res) {
                  return res.data.smart_collections
                })
                ["catch"](function (error) {
                  throw new _medusaCoreUtils.MedusaError(
                    _medusaCoreUtils.MedusaError.Types.INVALID_DATA,
                    {
                      message: "Shopify: ".concat(error.message),
                    }
                  )
                })

            case 3:
              return _context3.abrupt("return", _context3.sent)

            case 4:
            case "end":
              return _context3.stop()
          }
        }
      }, _callee3)
    })
  )
  return _fetchSmartCollections.apply(this, arguments)
}

function fetchCustomCollections(_x8, _x9, _x10) {
  return _fetchCustomCollections.apply(this, arguments)
}

function _fetchCustomCollections() {
  _fetchCustomCollections = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee4(
      query,
      domain,
      headers
    ) {
      var path
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch ((_context4.prev = _context4.next)) {
            case 0:
              path = (0, _buildQuery.buildQuery)(query)
              _context4.next = 3
              return _axios["default"]
                .get(
                  "https://"
                    .concat(
                      domain,
                      ".myshopify.com/admin/api/2021-07/custom_collections.json"
                    )
                    .concat(path),
                  {
                    headers: headers,
                  }
                )
                .then(function (response) {
                  return response.data.custom_collections
                })
                ["catch"](function (error) {
                  throw new _medusaCoreUtils.MedusaError(
                    _medusaCoreUtils.MedusaError.Types.INVALID_DATA,
                    {
                      message: "Shopify: ".concat(error.message),
                    }
                  )
                })

            case 3:
              return _context4.abrupt("return", _context4.sent)

            case 4:
            case "end":
              return _context4.stop()
          }
        }
      }, _callee4)
    })
  )
  return _fetchCustomCollections.apply(this, arguments)
}

function fetchCollects(_x11, _x12, _x13) {
  return _fetchCollects.apply(this, arguments)
}

function _fetchCollects() {
  _fetchCollects = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee5(
      query,
      domain,
      headers
    ) {
      var path
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch ((_context5.prev = _context5.next)) {
            case 0:
              path = (0, _buildQuery.buildQuery)(query)
              _context5.next = 3
              return _axios["default"]
                .get(
                  "https://"
                    .concat(
                      domain,
                      ".myshopify.com/admin/api/2021-07/collects.json"
                    )
                    .concat(path),
                  {
                    headers: headers,
                  }
                )
                .then(function (response) {
                  return response.data.collects
                })
                ["catch"](function (error) {
                  throw new _medusaCoreUtils.MedusaError(
                    _medusaCoreUtils.MedusaError.Types.INVALID_DATA,
                    {
                      message: "Shopify: ".concat(error.message),
                    }
                  )
                })

            case 3:
              return _context5.abrupt("return", _context5.sent)

            case 4:
            case "end":
              return _context5.stop()
          }
        }
      }, _callee5)
    })
  )
  return _fetchCollects.apply(this, arguments)
}