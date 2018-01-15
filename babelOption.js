const option = {
    babelrc: false,
    presets: [
        ["env", {
            "targets": {
                "android": 30,
                "chrome": 56,
                "edge": 14,
                "explorer": 9,
                "firefox": 52,
                "safari": 8
            },
            "modules": false
        }],
        "react"
    ],
    plugins: [
        "transform-es3-member-expression-literals",
        "transform-es3-property-literals",
        "transform-object-rest-spread",
        "transform-class-properties"
    ]
}

module.exports = option;