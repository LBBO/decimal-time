import { ScullyConfig, setPluginConfig } from '@scullyio/scully'
import { baseHrefRewrite } from '@scullyio/scully-plugin-base-href-rewrite'
import { homepage } from './package.json'

const defaultPostRenderers = ['seoHrefOptimise', baseHrefRewrite]
const homepageUrl = new URL(homepage)
setPluginConfig(baseHrefRewrite, {
  href: `${homepageUrl.pathname + process.env.LOCALE}/`,
})

export const config: ScullyConfig = {
  defaultPostRenderers,
  projectRoot: './src',
  projectName: 'decimal-time',
  distFolder: `dist/decimal-time/${process.env.LOCALE}`,
  outDir: `./dist/static/${process.env.LOCALE}`,
  routes: {},
}
