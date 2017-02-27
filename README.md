#hump
####converter for strings in JavaScript
#Usage
-----

### Converting strings
        hump('hello_world') // 'helloWorld'
        hump('hello-world') // 'helloWorld'
        hump('hello world') // 'helloWorld'
        hump('helloWorld1') // 'hello_world1'
        hump('helloWorld1', {
                pattern: /(?=[A-Z0-9])/
        })                  //hello_world_1 
        hump('helloWorld', {
            retrofit: '-'
        }                   //hello-world
