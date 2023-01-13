import { siteConfig } from './lib/site-config'

export default siteConfig({
	// the site's root Notion page (required)
	rootNotionPageId: '88f87f6af58e4f86a9860e7a623de694',

	// if you want to restrict pages to a single notion workspace (optional)
	// (this should be a Notion ID; see the docs for how to extract this)
	rootNotionSpaceId: null,

	// basic site info (required)
	name: 'Just some Notes',
	domain: 'notes.alphaspiderman.dev',
	author: 'Alphaspiderman',

	// open graph metadata (optional)
	description: 'Most of my Notes',

	// social usernames (optional)
	twitter: '_Alphaspiderman',
	github: 'Alphaspiderman',
	linkedin: '',
	// mastodon: '#', // optional mastodon profile URL, provides link verification
	// newsletter: '#', // optional newsletter URL
	// youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

	// default notion icon and cover images for site-wide consistency (optional)
	// page-specific values will override these site-wide defaults
	defaultPageIcon: null,
	defaultPageCover: null,
	defaultPageCoverPosition: 0.5,

	// whether or not to enable support for LQIP preview images (optional)
	isPreviewImageSupportEnabled: true,

	// whether or not redis is enabled for caching generated preview images (optional)
	// NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
	// environment variables. see the readme for more info
	isRedisEnabled: false,

	// map of notion page IDs to URL paths (optional)
	// any pages defined here will override their default URL paths
	// example:
	//
	// pageUrlOverrides: {
	//   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
	//   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
	// }
	pageUrlOverrides: {
		'/about': '100ec857155347049feef001b0cfc53b',
		'/contact': '9355ae735b9d46d9a481e32e409305f1'
	},

	// whether to use the default notion navigation style or a custom one with links to
	// important pages
	navigationStyle: 'custom',
	navigationLinks: [
		{
			title: 'About',
			pageId: '100ec857155347049feef001b0cfc53b'
		},
		{
			title: 'Contact',
			pageId: '9355ae735b9d46d9a481e32e409305f1'
		}
	]
})