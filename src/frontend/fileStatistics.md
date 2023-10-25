# The type of user dashboard

The type of user dashboard


---
## findById

> BASIC

**Path:** ${API_VERSION}/docpal/user/dashboard/{id}

**Method:** GET

> REQUEST

**Path Params:**

| name | value | desc |
| ------------ | ------------ | ------------ |
| id |  |  |



> RESPONSE

**Headers:**

| name | value | required | desc |
| ------------ | ------------ | ------------ | ------------ |
| content-type | application/json;charset=UTF-8 | NO |  |

**Body:**

| name | type | desc |
| ------------ | ------------ | ------------ |
| result | boolean |  |
| code | integer |  |
| message | string |  |
| data | object |  |
| &ensp;&ensp;&#124;─id | integer |  |
| &ensp;&ensp;&#124;─name | string |  |
| &ensp;&ensp;&#124;─access | string |  |
| &ensp;&ensp;&#124;─styleJson | string |  |
| &ensp;&ensp;&#124;─status | string | A : Active<br>D : Deactivated<br>R : Removed |
| &ensp;&ensp;&#124;─createdBy | string |  |
| &ensp;&ensp;&#124;─modifiedBy | string |  |
| &ensp;&ensp;&#124;─createdDate | object |  |
| &ensp;&ensp;&ensp;&ensp;&#124;─seconds | integer |  |
| &ensp;&ensp;&ensp;&ensp;&#124;─nanos | integer |  |
| &ensp;&ensp;&#124;─modifiedDate | object |  |
| &ensp;&ensp;&ensp;&ensp;&#124;─seconds | integer |  |
| &ensp;&ensp;&ensp;&ensp;&#124;─nanos | integer |  |

**Response Demo:**

```json
{
  "result": false,
  "code": 0,
  "message": "",
  "data": {
    "id": 0,
    "name": "",
    "access": "",
    "styleJson": "",
    "status": "",
    "createdBy": "",
    "modifiedBy": "",
    "createdDate": {
      "seconds": 0,
      "nanos": 0
    },
    "modifiedDate": {
      "seconds": 0,
      "nanos": 0
    }
  }
}
```




---
## page

> BASIC

**Path:** ${API_VERSION}/docpal/user/dashboard/page

**Method:** POST

> REQUEST

**Headers:**

| name | value | required | desc |
| ------------ | ------------ | ------------ | ------------ |
| Content-Type | application/json | YES |  |

**Request Body:**

| name | type | desc |
| ------------ | ------------ | ------------ |
| pageNum | integer |  |
| pageSize | integer |  |
| orderBy | string |  |
| isDesc | boolean |  |
| name | string |  |
| createdBy | string |  |
| status | string |  |

**Request Demo:**

```json
{
  "pageNum": 0,
  "pageSize": 0,
  "orderBy": "",
  "isDesc": false,
  "name": "",
  "createdBy": "",
  "status": ""
}
```



> RESPONSE

**Headers:**

| name | value | required | desc |
| ------------ | ------------ | ------------ | ------------ |
| content-type | application/json;charset=UTF-8 | NO |  |

**Body:**

| name | type | desc |
| ------------ | ------------ | ------------ |
| result | boolean |  |
| code | integer |  |
| message | string |  |
| data | object |  |
| &ensp;&ensp;&#124;─entryList | array |  |
| &ensp;&ensp;&ensp;&ensp;&#124;─ | object |  |
| &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&#124;─id | integer |  |
| &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&#124;─name | string |  |
| &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&#124;─access | string |  |
| &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&#124;─styleJson | string |  |
| &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&#124;─status | string |  |
| &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&#124;─createdBy | string |  |
| &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&#124;─modifiedBy | string |  |
| &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&#124;─createdDate | object |  |
| &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&#124;─seconds | integer |  |
| &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&#124;─nanos | integer |  |
| &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&#124;─modifiedDate | object |  |
| &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&#124;─seconds | integer |  |
| &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&#124;─nanos | integer |  |
| &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&#124;─accessors | array |  |
| &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&#124;─ | string |  |
| &ensp;&ensp;&#124;─totalSize | integer |  |
| &ensp;&ensp;&#124;─currentPageSize | integer |  |
| &ensp;&ensp;&#124;─pageNum | integer |  |
| &ensp;&ensp;&#124;─pageCount | integer |  |
| &ensp;&ensp;&#124;─isNextPageAvailable | boolean |  |

**Response Demo:**

```json
{
  "result": false,
  "code": 0,
  "message": "",
  "data": {
    "entryList": [
      {
        "id": 0,
        "name": "",
        "access": "",
        "styleJson": "",
        "status": "",
        "createdBy": "",
        "modifiedBy": "",
        "createdDate": {
          "seconds": 0,
          "nanos": 0
        },
        "modifiedDate": {
          "seconds": 0,
          "nanos": 0
        },
        "accessors": [
          ""
        ]
      }
    ],
    "totalSize": 0,
    "currentPageSize": 0,
    "pageNum": 0,
    "pageCount": 0,
    "isNextPageAvailable": false
  }
}
```




---
## create

> BASIC

**Path:** ${API_VERSION}/docpal/user/dashboard

**Method:** POST

> REQUEST

**Headers:**

| name | value | required | desc |
| ------------ | ------------ | ------------ | ------------ |
| Content-Type | application/json | YES |  |

**Request Body:**

| name | type | desc |
| ------------ | ------------ | ------------ |
| id | integer |  |
| name | string |  |
| access | string |  |
| styleJson | string |  |
| status | string | A : Active<br>D : Deactivated<br>R : Removed |
| createdBy | string |  |
| modifiedBy | string |  |
| createdDate | object |  |
| &ensp;&ensp;&#124;─seconds | integer |  |
| &ensp;&ensp;&#124;─nanos | integer |  |
| modifiedDate | object |  |
| &ensp;&ensp;&#124;─seconds | integer |  |
| &ensp;&ensp;&#124;─nanos | integer |  |

**Request Demo:**

```json
{
  "id": 0,
  "name": "",
  "access": "",
  "styleJson": "",
  "status": "",
  "createdBy": "",
  "modifiedBy": "",
  "createdDate": {
    "seconds": 0,
    "nanos": 0
  },
  "modifiedDate": {
    "seconds": 0,
    "nanos": 0
  }
}
```



> RESPONSE

**Headers:**

| name | value | required | desc |
| ------------ | ------------ | ------------ | ------------ |
| content-type | application/json;charset=UTF-8 | NO |  |

**Body:**

| name | type | desc |
| ------------ | ------------ | ------------ |
| result | boolean |  |
| code | integer |  |
| message | string |  |
| data | object |  |
| &ensp;&ensp;&#124;─id | integer |  |
| &ensp;&ensp;&#124;─name | string |  |
| &ensp;&ensp;&#124;─access | string |  |
| &ensp;&ensp;&#124;─styleJson | string |  |
| &ensp;&ensp;&#124;─status | string | A : Active<br>D : Deactivated<br>R : Removed |
| &ensp;&ensp;&#124;─createdBy | string |  |
| &ensp;&ensp;&#124;─modifiedBy | string |  |
| &ensp;&ensp;&#124;─createdDate | object |  |
| &ensp;&ensp;&ensp;&ensp;&#124;─seconds | integer |  |
| &ensp;&ensp;&ensp;&ensp;&#124;─nanos | integer |  |
| &ensp;&ensp;&#124;─modifiedDate | object |  |
| &ensp;&ensp;&ensp;&ensp;&#124;─seconds | integer |  |
| &ensp;&ensp;&ensp;&ensp;&#124;─nanos | integer |  |

**Response Demo:**

```json
{
  "result": false,
  "code": 0,
  "message": "",
  "data": {
    "id": 0,
    "name": "",
    "access": "",
    "styleJson": "",
    "status": "",
    "createdBy": "",
    "modifiedBy": "",
    "createdDate": {
      "seconds": 0,
      "nanos": 0
    },
    "modifiedDate": {
      "seconds": 0,
      "nanos": 0
    }
  }
}
```




---
## Update user dashboard

> BASIC

**Path:** ${API_VERSION}/docpal/user/dashboard

**Method:** PUT

> REQUEST

**Headers:**

| name | value | required | desc |
| ------------ | ------------ | ------------ | ------------ |
| Content-Type | application/json | YES |  |

**Request Body:**

| name | type | desc |
| ------------ | ------------ | ------------ |
| id | integer |  |
| name | string |  |
| access | string |  |
| styleJson | string |  |
| status | string | A : Active<br>D : Deactivated<br>R : Removed |
| createdBy | string |  |
| modifiedBy | string |  |
| createdDate | object |  |
| &ensp;&ensp;&#124;─seconds | integer |  |
| &ensp;&ensp;&#124;─nanos | integer |  |
| modifiedDate | object |  |
| &ensp;&ensp;&#124;─seconds | integer |  |
| &ensp;&ensp;&#124;─nanos | integer |  |

**Request Demo:**

```json
{
  "id": 0,
  "name": "",
  "access": "",
  "styleJson": "",
  "status": "",
  "createdBy": "",
  "modifiedBy": "",
  "createdDate": {
    "seconds": 0,
    "nanos": 0
  },
  "modifiedDate": {
    "seconds": 0,
    "nanos": 0
  }
}
```



> RESPONSE

**Headers:**

| name | value | required | desc |
| ------------ | ------------ | ------------ | ------------ |
| content-type | application/json;charset=UTF-8 | NO |  |

**Body:**

| name | type | desc |
| ------------ | ------------ | ------------ |
| result | boolean |  |
| code | integer |  |
| message | string |  |
| data | object |  |
| &ensp;&ensp;&#124;─id | integer |  |
| &ensp;&ensp;&#124;─name | string |  |
| &ensp;&ensp;&#124;─access | string |  |
| &ensp;&ensp;&#124;─styleJson | string |  |
| &ensp;&ensp;&#124;─status | string | A : Active<br>D : Deactivated<br>R : Removed |
| &ensp;&ensp;&#124;─createdBy | string |  |
| &ensp;&ensp;&#124;─modifiedBy | string |  |
| &ensp;&ensp;&#124;─createdDate | object |  |
| &ensp;&ensp;&ensp;&ensp;&#124;─seconds | integer |  |
| &ensp;&ensp;&ensp;&ensp;&#124;─nanos | integer |  |
| &ensp;&ensp;&#124;─modifiedDate | object |  |
| &ensp;&ensp;&ensp;&ensp;&#124;─seconds | integer |  |
| &ensp;&ensp;&ensp;&ensp;&#124;─nanos | integer |  |

**Response Demo:**

```json
{
  "result": false,
  "code": 0,
  "message": "",
  "data": {
    "id": 0,
    "name": "",
    "access": "",
    "styleJson": "",
    "status": "",
    "createdBy": "",
    "modifiedBy": "",
    "createdDate": {
      "seconds": 0,
      "nanos": 0
    },
    "modifiedDate": {
      "seconds": 0,
      "nanos": 0
    }
  }
}
```




---
## Update id and status

> BASIC

**Path:** ${API_VERSION}/docpal/user/dashboard/{id}/status/{status}

**Method:** PATCH

> REQUEST

**Path Params:**

| name | value | desc |
| ------------ | ------------ | ------------ |
| id |  | the id of user dashboard |
| status |  | the status of user dashboard |

**Headers:**

| name | value | required | desc |
| ------------ | ------------ | ------------ | ------------ |
| Content-Type | application/x-www-form-urlencoded | YES |  |



> RESPONSE

**Headers:**

| name | value | required | desc |
| ------------ | ------------ | ------------ | ------------ |
| content-type | application/json;charset=UTF-8 | NO |  |

**Body:**

| name | type | desc |
| ------------ | ------------ | ------------ |
| result | boolean |  |
| code | integer |  |
| message | string |  |
| data | boolean |  |

**Response Demo:**

```json
{
  "result": false,
  "code": 0,
  "message": "",
  "data": false
}
```




---
## deleteById

> BASIC

**Path:** ${API_VERSION}/docpal/user/dashboard/{id}

**Method:** DELETE

> REQUEST

**Path Params:**

| name | value | desc |
| ------------ | ------------ | ------------ |
| id |  |  |

**Headers:**

| name | value | required | desc |
| ------------ | ------------ | ------------ | ------------ |
| Content-Type | application/x-www-form-urlencoded | YES |  |



> RESPONSE

**Headers:**

| name | value | required | desc |
| ------------ | ------------ | ------------ | ------------ |
| content-type | application/json;charset=UTF-8 | NO |  |

**Body:**

| name | type | desc |
| ------------ | ------------ | ------------ |
| result | boolean |  |
| code | integer |  |
| message | string |  |
| data | boolean |  |

**Response Demo:**

```json
{
  "result": false,
  "code": 0,
  "message": "",
  "data": false
}
```



