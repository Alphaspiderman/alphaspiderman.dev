import { siteConfig } from './lib/site-config'

export default siteConfig({
	// the site's root Notion page (required)
	rootNotionPageId: '8303c68ae96f428f8e66c486706a78e9',

	// if you want to restrict pages to a single notion workspace (optional)
	// (this should be a Notion ID; see the docs for how to extract this)
	rootNotionSpaceId: null,

	// basic site info (required)
	name: 'Home - Alphaspiderman',
	domain: 'alphaspiderman.dev',
	author: 'Alphaspiderman',

	// open graph metadata (optional)
	description: '',

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
		'/about': '6923667bf68c48cfaf7ee5affbc2f162',
		'/contact': 'ff7a1c669ee04178a3b913e5e113d114'
	},

	// whether to use the default notion navigation style or a custom one with links to
	// important pages
	navigationStyle: 'custom',
	navigationLinks: [
		{
			title: 'About',
			pageId: '6923667bf68c48cfaf7ee5affbc2f162'
		},
		{
			title: 'Contact',
			pageId: 'ff7a1c669ee04178a3b913e5e113d114'
		}
	]
})
