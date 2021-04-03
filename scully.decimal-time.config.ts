import { ScullyConfig, setPluginConfig } from '@scullyio/scully'
import { baseHrefRewrite } from '@scullyio/scully-plugin-base-href-rewrite'
import { homepage } from './package.json'

const defaultPostRenderers = ['seoHrefOptimise', baseHrefRewrite]
const homepageUrl = new URL(homepage)
setPluginConfig(baseHrefRewrite, {
  href: homepageUrl.pathname,
})

export const config: ScullyConfig = {
  defaultPostRenderers,
  projectRoot: './src',
  projectName: 'decimal-time',
  outDir: './dist/static',
  routes: {},
}
