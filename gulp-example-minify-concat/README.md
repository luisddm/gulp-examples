## Reducing size tasks

- Concatenate files to reduce HTTP requests
- Minimize files to reduce download payload
- Optimize images

One of the crucial things when it comes to improving performance is reducing the number of HTTP requests.

An extra HTTP request adds dozens, or even hundreds of milliseconds when loading a website. The latency between HTTP requests, and also the limitation in web browsers in regards to how many parallel HTTP requests a web browser can make, vastly affects the loading time of a web page.

A new HTTP request also adds a protocol header, which leads to a bigger payload in HTTP as well as in the lower layers, therefore increasing the bandwidth.

HTTP/2 will partially address these problems by leaving an open connection until all the resources have been transferred, so we will be able to keep our files separated without affecting the latency. But the transition will take years, as the web servers need to be updated in order to support it and then be reconfigured. However, the main browsers already support it.

There is a great [talk](https://www.youtube.com/watch?v=Z-fZ92FVaf8) (in Spanish) to understand HTTP/2.

Meanwhile, when it comes to CSS and JavaScript, the general consensus is to concatenate all files of the same type into one file, and then minify them.

That leaves us with images. Both the size and number of images used in a web page definitely poses a threat to having a fast web site, so it is a good practice to keep them as small as possible keeping an acceptable quality.
