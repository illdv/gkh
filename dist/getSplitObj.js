"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (prop) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (!value) {
    return Object.keys(prop);
  }
  return Object.values(prop);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9nZXRTcGxpdE9iai5qcyJdLCJuYW1lcyI6WyJwcm9wIiwidmFsdWUiLCJPYmplY3QiLCJrZXlzIiwidmFsdWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBQWUsVUFBQ0EsSUFBRCxFQUF3QjtBQUFBLE1BQWpCQyxLQUFpQix1RUFBVCxJQUFTOztBQUNyQyxNQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNWLFdBQU9DLE9BQU9DLElBQVAsQ0FBWUgsSUFBWixDQUFQO0FBQ0Q7QUFDRCxTQUFPRSxPQUFPRSxNQUFQLENBQWNKLElBQWQsQ0FBUDtBQUNELEMiLCJmaWxlIjoiZ2V0U3BsaXRPYmouanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAocHJvcCwgdmFsdWUgPSB0cnVlKSA9PiB7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMocHJvcCk7XG4gIH1cbiAgcmV0dXJuIE9iamVjdC52YWx1ZXMocHJvcCk7XG59O1xuIl19