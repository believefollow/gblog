module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-graphql`,
            options: {
                typeName: `GraphCMS`,
                fieldName: `gcms`,
                url: `https://api-ap-northeast-1.graphcms.com/v2/cktr00qt128pt01z5edgh2y58/master`
            }
        }
    ]
}