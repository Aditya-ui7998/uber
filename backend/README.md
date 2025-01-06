# User Registration Endpoint

## Endpoint: `/users/register`

### Method: POST

### Description
This endpoint is used to register a new user. It validates the input data, hashes the password, creates a new user in the database, and returns a JSON Web Token (JWT) for authentication.

### Request Body
The request body should be a JSON object with the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required)
  - `lastname`: A string with a minimum length of 3 characters (optional)
- `email`: A valid email address (required)
- `password`: A string with a minimum length of 6 characters (required)

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Error Response
If the input data is invalid, the endpoint will return a JSON object with an array of error messages.

Example:
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be at least 3 characters",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters",
      "param": "password",
      "location": "body"
    }
  ]
}
```

### Success Response
If the user is successfully registered, the endpoint will return a JSON object with the following fields:

Example:
```json
{
  "token": "JWT_TOKEN_HERE",
  "user": {
    "_id": "USER_ID",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```