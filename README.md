# eHomework-server

# start
    npm install

# run
    npm run dev
    node app.js

# endpoint URL
    https://ehomework-server.herokuapp.com

# Register Student/Teacher

return data student/teacher with encrypted password

- **URL**

    `/register/student`   (for student)

    OR

    `/register/teacher`   (for teacher)

- **Method**
    
    `POST`

- **URL Params**

    **Required**
    
    `none`

- **Data Params**

    `email=[string], password=[string], role=[string]`

- **Success Response**

    - Code :
        201
    
    - Content:

    ```
    {
        "message": "Teacher has been sign up successfully",
        "result": {
            "_id": "5ec30931e2d9e66f36bd0afa",
            "email": "guru@gmail.com",
            "password": "$2a$10$j6hiia8O2GAeFYvpMtwNJ.Bn.Gg8e27/IZNEvGlAVGCuNzDm9itKi",
            "role": "teacher",
            "__v": 0
        }
    }
    ```

- **Error Response**

    - Code :

        400
    
    - Content: 

    ```
    {
        "message": "Invalid input"
    }
    ```

    OR

    - Code:

        500
    
    - Sample Call:

        none

# Login Student/Teacher

return access token, and data student/teacher

- **URL**

    `/login/student`   (for student)

    OR

    `/login/teacher`   (for teacher)

- **Method**
    
    `POST`

- **URL Params**

    **Required**
    
    `none`

- **Data Params**

    `email=[string], password=[string], role=[string]`

- **Success Response**

    - Code :
        200
    
    - Content:

    ```
    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imd1cnVAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAka0poMXBOMm1wWmt2bjJnUFVXYktaLklHcW01Z3JyRi41Qmg3Mzc3YWZOUkh3ZGgxelpDQ20iLCJyb2xlIjoidGVhY2hlciIsImlhdCI6MTU4OTg0MDM1OH0.wZgdtVQB8BW7tGw5-L6tGnMPyCc5E3mTpBCNVPzgk7w",
        "email": "guru@gmail.com",
        "role": "teacher"
    }
    ```

- **Error Response**

    - Code :

        400
    
    - Content: 

    ```
    {
        "message": "Invalid input"
    }
    ```

    OR

    - Code:

        500
    
    - Sample Call:
    
        none

# GET User

return all data users

- **URL**

    `/`

- **Method**

    `GET`

- **URL Params**

    **Required**

    `none`

- **Data Params**

    `none`

- **Success Response**

    - Code :

        200

    - Content :

        ```
        {
            "message": "FETCH ALL USER SUCCESS",
            "result": [
                        {
                            "_id": "5ec2b58b5fd8a00298d3bf1d",
                            "email": "test@gmail.com",
                            "password": "$2a$10$Rg8YuXZGIxV2CpNSmSkeQ.A3D0YgVrgXgzS/YkLcGlUM735TV00Oq",
                            "role": "student",
                            "__v": 0
                        },
                        {
                            "_id": "5ec2b5be5fd8a00298d3bf1e",
                            "email": "test12@gmail.com",
                            "password": "$2a$10$AAWMMjFnqyl4BfDHn2iAk./t4PYNtVMIyPAebImIytIbkTltlxVA2",
                            "role": "student",
                            "__v": 0
                        },
                        {
                            "_id": "5ec2bf5a927f490cff8cee9a",
                            "email": "guru@gmail.com",
                            "password": "$2a$10$kJh1pN2mpZkvn2gPUWbKZ.IGqm5grrF.5Bh7377afNRHwdh1zZCCm",
                            "role": "teacher",
                            "__v": 0
                        },
                        {
                            "_id": "5ec30931e2d9e66f36bd0afa",
                            "email": "guru@gmail.com",
                            "password": "$2a$10$j6hiia8O2GAeFYvpMtwNJ.Bn.Gg8e27/IZNEvGlAVGCuNzDm9itKi",
                            "role": "teacher",
                            "__v": 0
                        }
                    ]
        }
        ```

- **Error Response**

    - Code :

        404

    - Content :

        `none`

    OR

    - Code :

        500

    - Sample Call :

        `none`

# GET Task

return all tasks

- **URL**

    `/task`

- **Method**

    `GET`

- **URL Params**

    **Required**

    `none`

- **Data Params**

    `none`

- **Success Response**

    - Code :

        200

    - Content :

        ```
        {
            "message": "Fetch data success",
            "result": [
                {
                    "_id": "5ec2b3d673ca6d7f5a72f518",
                    "emailStudent": "test1212@gmail.com",
                    "emailTeacher": "test1qe2@gmail.com",
                    "score": 100,
                    "url": "asdkjahkjd",
                    "status": true,
                    "description": "yasdhkajh",
                    "taskName": "oke",
                    "__v": 0
                },
                {
                    "_id": "5ec2b3f773ca6d7f5a72f51a",
                    "emailStudent": "test1212@gmail.com",
                    "emailTeacher": "test1qe2@gmail.com",
                    "score": 80,
                    "url": "asdkjahkjd",
                    "status": true,
                    "description": "yasdhkajh",
                    "taskName": "math",
                    "__v": 0
                },
                {
                    "_id": "5ec2b93af75335075c96bd22",
                    "emailStudent": "test@gmail.com",
                    "emailTeacher": "test1qe2@gmail.com",
                    "score": 80,
                    "url": "asdkjahkjd",
                    "status": true,
                    "description": "yasdhkajh",
                    "taskName": "math",
                    "__v": 0
                },
                {
                    "_id": "5ec2b93af75335075c96bd23",
                    "emailStudent": "test12@gmail.com",
                    "emailTeacher": "test1qe2@gmail.com",
                    "score": 80,
                    "url": "asdkjahkjd",
                    "status": true,
                    "description": "yasdhkajh",
                    "taskName": "math",
                    "__v": 0
                }
            ]
        }
        ```

- **Error Response**

    - Code :

        404

    - Content :

        ```
        {
            "message": "Error fetching task"
        }
        ```

    OR

    - Code :

        500

    - Sample Call :

        `none`

# GET TaskByEmail

return task with parameter email

- **URL**

    `/task/:email`

- **Method**

    `GET`

- **URL Params**

    **Required**

    `email`

- **Data Params**

    `none`

- **Success Response**

    - Code :

        200

    - Content :

        ```
        {
            "message": "Fetch data success",
            "result": [
                {
                    "_id": "5ec2b93af75335075c96bd22",
                    "emailStudent": "test@gmail.com",
                    "emailTeacher": "test1qe2@gmail.com",
                    "score": 80,
                    "url": "asdkjahkjd",
                    "status": true,
                    "description": "yasdhkajh",
                    "taskName": "math",
                    "__v": 0
                }
            ]
        }
        ```

- **Error Response**

    - Code :

        404

    - Content :

        ```
        {
            "message": "Error fetching task"
        }
        ```

    OR

    - Code :

        500

    - Sample Call :

        `none`

# GET TaskById

return task with parameter id

- **URL**

    `/task/:id`

- **Method**

    `GET`

- **URL Params**

    **Required**

    `id`

- **Data Params**

    `none`

- **Success Response**

    - Code :

        200

    - Content :

        ```
        {
            "message": "Fetch data success",
            "result": [
                {
                    "_id": "5ec2b93af75335075c96bd22",
                    "emailStudent": "test@gmail.com",
                    "emailTeacher": "test1qe2@gmail.com",
                    "score": 80,
                    "url": "asdkjahkjd",
                    "status": true,
                    "description": "yasdhkajh",
                    "taskName": "math",
                    "__v": 0
                }
            ]
        }
        ```

- **Error Response**

    - Code :

        404

    - Content :

        ```
        {
            "message": "Error fetching task"
        }
        ```

    OR

    - Code :

        500

    - Sample Call :

        `none`

# POST Task

return array tasks, based on quantity student on data user

- **URL**

    `/task`

- **Method**

    `POST`

- **URL Params**

    **Required**

    `none`

- **Data Params**

    `emailTeacher=[string], password=[string], score=[number], url=[string], status=[boolean], description=[string], taskName=[string]`

- **Success Response**

    - Code :

        201

    - Content :

        ```
        [
            {
                "_id": "5ec30eeb16be3371879007b6",
                "emailStudent": "test@gmail.com",
                "emailTeacher": "test12@gmail.com",
                "score": 90,
                "url": "asdkjahkjd",
                "status": true,
                "description": "yasdhkajh",
                "taskName": "contoh",
                "__v": 0
            },
            {
                "_id": "5ec30eeb16be3371879007b7",
                "emailStudent": "test12@gmail.com",
                "emailTeacher": "test12@gmail.com",
                "score": 90,
                "url": "asdkjahkjd",
                "status": true,
                "description": "yasdhkajh",
                "taskName": "contoh",
                "__v": 0
            }
        ]
        ```

- **Error Response**

    - Code :

        400

    - Content :

        ```
        {
            "message": "Invalid input task"
        }
        ```

    OR

    - Code :

        500

    - Sample Call :

        `none`

# PUT Task

return new object task, with parameter input id

- **URL**

    `/task/edit/:id`

- **Method**

    `PUT`

- **URL Params**

    **Required**

    `id`

- **Data Params**

    `emailTeacher=[string], password=[string], score=[number], url=[string], status=[boolean], description=[string], taskName=[string]`

- **Success Response**

    - Code :

        200

    - Content :

        ```
        {
            "_id": "5ec30eeb16be3371879007b6",
            "emailStudent": "test@gmail.com",
            "emailTeacher": "test12@gmail.com",
            "score": 100,
            "url": "asdkjahkjd",
            "status": true,
            "description": "yasdhkajh",
            "taskName": "contoh",
            "__v": 0
        }
        ```

- **Error Response**

    - Code :

        400

    - Content :

        ```
        {
            "message": "Invalid input task"
        }
        ```

    OR

    - Code :

        500

    - Sample Call :

        `none`

# DELETE Task

return success delete message, with parameter input id

- **URL**

    `/task/delete/:id`

- **Method**

    `DELETE`

- **URL Params**

    **Required**

    `id`

- **Data Params**

    `none`

- **Success Response**

    - Code :

        200

    - Content :

        ```
        {
            "message": "successfully delete task"
        }
        ```

- **Error Response**

    - Code :

        400

    - Content :

        ```
        {
            "message": "Forbidden delete task"
        }
        ```

    OR

    - Code :

        500

    - Sample Call :

        `none`