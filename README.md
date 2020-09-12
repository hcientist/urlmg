# urlmg
URL→`img`(URLs)
Turn a URL into some (urls of) images.

Perhaps you'd like to display a list of sites, but you'd like to show an image along with the title/URL or whatever other info you have for them.

## Example

```
import urlImg from './index.js';
(async () => {
  try {
    const imgUrls = await urlImg('https://github.com/hcientist/urlmg')
    // console.log(imgUrls)
    [og, touch, fav, screenshot] = imgUrls
    console.log(og, touch, fav) //screenshot is just too much
  } catch (err) {
    console.error('got error from urlImg')
  }
})()
```

## what images?
Try to get the images from these places:
* [Open Graph image](https://ogp.me/)
* [touch icon](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#Adding_custom_icons_to_your_site)
* [favicon](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#Adding_custom_icons_to_your_site)
* [screenshot of the page](https://github.com/puppeteer/puppeteer/blob/v5.3.0/docs/api.md#pagescreenshotoptions)

