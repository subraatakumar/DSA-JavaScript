# What is Optional Chaining ?

The optional chaining `?.` is a safe way to access nested object properties, even if an intermediate property doesn’t exist. The optional chaining works only for declared variables.

- obj?.prop : returns obj.prop if obj exist, otherwise undefined
- obj?.[key] : returns obb[key] if obj exists, otherwise undefined
- obj.method?.() : calls obj.method() if obj.method exists, otherwise returns undefined.



