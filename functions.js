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
