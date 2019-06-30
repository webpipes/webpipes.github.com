import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title='Page two' />
    <article class='athelas pa4'>
      <p class='f6 f4-ns lh-copy measure center'>
        The form of our letters, the older handwriting and inscriptions as much
        as the cuttings in use today, reflects a convention that has slowly
        solidified, an agreement hardened in many battles. Even after the
        Renaissance several European countries retained broken, blackletter
        national scripts in opposition to roman, the obligatory type for all
        Latin material; yet even today, I hope, the last word about Fraktur has
        not been spoken.
      </p>
      <blockquote class='ph0 f4 f1-ns measure-narrow center'>
        <p class='fw9 lh-copy lh-title-ns'>
          The punches of Claude Garamond, cut around 1530 in Paris, are simply
          unsurpassed in their clarity, readability and beauty.
        </p>
      </blockquote>
      <p class='f6 f4-ns lh-copy measure center'>
        Apart from that, the roman minuscule has been our way of writing for
        hundreds of years. What followed were merely fashionable variations,
        here and there even deformations, of the noble basic form, but no
        improvement whatever. The punches of Claude Garamond, cut around 1530 in
        Paris, are simply unsurpassed in their clarity, readability and beauty.
        Garamond appeared on the scene at a time when the occidental book, as an
        object, cast off its medieval ponderousness and took up the form which
        today is still the best: the slender and upright rectangular body,
        comprising folded sheets stitched or sewn at the back, in a cover whose
        protruding edges protect the trimmed pages.
      </p>
    </article>

    <Link to='/'>Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
