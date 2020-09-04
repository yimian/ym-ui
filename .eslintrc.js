module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "extends": [
    "plugin:vue/essential",
    "@vue/airbnb"
  ],
  "parserOptions": {
    "parser": "babel-eslint"
  },
  "rules": {
    "no-console": 0,
    "no-debugger": "off",
    "no-shadow": 0,
    "operator-linebreak": [
      2,
      "before"
    ],
    "max-len": [
      "error",
      {
        "ignoreStrings": true,
        "ignoreUrls": true,
        "ignoreRegExpLiterals": true,
        "ignoreTemplateLiterals": true,
        "code": 120
      }
    ],
    "no-param-reassign": [
      "error",
      {
        "props": true,
        "ignorePropertyModificationsFor": [
          "state",
          "acc",
          "e"
        ]
      }
    ]
  }
}