## Reducing size tasks

- Concatenate to reduce HTTP requests
- Minimize to reduce download payload
- Optimize images

One of the crucial things when it comes to improving performance is reducing the number of HTTP requests.

An extra HTTP request adds dozens, or even hundreds of milliseconds when loading a website. The latency between HTTP requests, and also the limitation in web browsers in regards to how many parallel HTTP requests a web browser can make, vastly affects the loading time of a web page.

When it comes to CSS and JavaScript, the general consensus is to concatenate all files of the same type into one file, and then minify them.

HTTP/2 will partially address these problems by leaving an open connection until all the resources have been transferred, so we will be able to keep our files separated without affecting the latency. But the transition will take years, as the web servers need to be updated in order to support it and then be reconfigured.

https://www.youtube.com/watch?v=Z-fZ92FVaf8

That leaves us with images. Without a doubt, both the size and number of images used in a web page definitely poses a threat to having a fast web site.
