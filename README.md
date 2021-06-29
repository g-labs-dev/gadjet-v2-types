`npm i https://github.com/g-labs-dev/gadjet-v2-types.git`

```
  import { Branches } from 'gadjet-v2-types/models'
  import { ImageCategory } from 'gadjet-v2-types/type'
  
  or
  
  import * as Models from 'gadjet-v2-types/models'
  import * as Type from 'gadjet-v2-types/type'
  
  const branch: Models.Branches = ...
  
  const category: ImageCategory = 'branch'
  const Image: Models.Images = {
    ...,
    category
  }
  
```
