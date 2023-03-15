// Egy objektum bejárásához:

function objectAllKeys(obj) {
  let keys = [];
    for(let key in obj) {
        if(typeof obj[key] === "object" && !Array.isArray(obj[key])) {
            let subkeys = objectAllKeys(obj[key]);
            keys = keys.concat(subkeys.map(function(subkey) {
              console.log("key+subkey: "+key + "." + subkey)
                return key + "." + subkey;
            }));
        } else if(Array.isArray(obj[key])) {
            for(let i=0;i<obj[key].length;i++){
               let subkeys = objectAllKeys(obj[key][i]);
               keys = keys.concat(subkeys.map(function(subkey) {
                console.log("key[i]+subkey: "+key + "." + subkey)
                return key + "[" + i + "]" + "." + subkey;
               }));
            }
        } else {
          console.log("key: "+key)
          //ha a value is kell akkor itt így:
          //console.log("obj[key]: "+obj[key])
          keys.push(key);
        }
    }
    return keys;
  
}
objectAllKeys(kdbxObject)

// e-mail cím ellenőrzés

function validateEmail(email) {
    console.log("e-mail checking...")
    const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     let pass=res.test(String(email).toLowerCase());
     if (!pass) {
        textOk=false
     }
  }
