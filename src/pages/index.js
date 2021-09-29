import React from "react";
import {graphql, useStaticQuery, Link } from "gatsby"

const pageQuery = graphql`
    {
        gcms {
            products {
                name
                slug
                price
            }
        }
    }
`

const IndexPage = () => {
    const {gcms: {products}} = useStaticQuery(pageQuery)
    return (
        <div>
            {products.map(({slug, ...product}) => (
                <Link key={slug} to={`/products/${slug}`}>
                    {product.name}
                </Link>
            ))}
        </div>
    )
}

export default IndexPage;