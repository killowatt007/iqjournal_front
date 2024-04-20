const PUBLIC_ROOT = '/'
const PRIVATE_ROOT = '/acc'

export enum PAGES_PUBLIC {
  HOME = PUBLIC_ROOT,
	AUTH = `${PUBLIC_ROOT} auth`,
  CATEGORY = `${PUBLIC_ROOT} category`
}

export enum PAGES_PRIVATE {
  DASHBOARD = `${PRIVATE_ROOT} dashboard`,
  ARTICLES = `${PRIVATE_ROOT} articles`
}
