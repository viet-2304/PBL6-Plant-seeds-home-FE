const AntdScssThemePlugin = require('antd-scss-theme-plugin');

module.exports = {
    rules: [
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'style-loader',
                    options: {
                        sourceMap: process.env.NODE_ENV !== 'production',
                    },
                },
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        sourceMap: process.env.NODE_ENV !== 'production',
                        modules: true,
                        camelCase: true,
                        localIdentName: '[name]-[local]-[hash:base64:5]',
                    },
                },
                AntdScssThemePlugin.themify({
                    loader: 'sass-loader',
                    options: {
                        sourceMap: process.env.NODE_ENV !== 'production',
                    },
                }),
            ],
        },
        {
            test: /\.less$/,
            include: [/src/],
            use: [
                require.resolve('style-loader'),
                {
                    loader: require.resolve('css-loader'),
                    options: {
                        modules: {
                            localIdentName: '[name]__[local]___[hash:base64:5]',
                        },
                        sourceMap: true,
                    },
                },
                {
                    loader: require.resolve('less-loader'), // compiles Less to CSS
                    options: { lessOptions: { javascriptEnabled: true } },
                },
            ],
        },
        {
            test: /\.css$/,
            exclude: /node_modules|antd\.css/,
            use: [
                require.resolve('style-loader'),
                {
                    loader: require.resolve('css-loader'),
                    options: {
                        importLoaders: 1,
                        // change
                        modules: {
                            localIdentName: '[name]__[local]___[hash:base64:5]',
                        },
                    },
                },
                {
                    loader: require.resolve('postcss-loader'),
                    options: {
                        ident: 'postcss',
                        plugins: () => [require('postcss-flexbugs-fixes')],
                    },
                },
            ],
        },
        {
            test: /\.css$/,
            include: /node_modules|antd\.css/,
            use: [
                require.resolve('style-loader'),
                {
                    loader: require.resolve('css-loader'),
                    options: {
                        importLoaders: 1,
                        // change
                        // modules: true, // new support for css modules
                        // localIndetName: '[name]__[local]__[hash:base64:5]', //
                    },
                },
                {
                    loader: require.resolve('postcss-loader'),
                    options: {
                        ident: 'postcss',
                        plugins: () => [require('postcss-flexbugs-fixes')],
                    },
                },
            ],
        },
    ],
    // ...other config
};
