const e=JSON.parse('{"key":"v-0d38488f","path":"/notes/ai/Multi-object-tracking-via-deep-feature-fusion-and-association-analysis.html","title":"Multi-object tracking via deep feature fusion and association analysis","lang":"zh-CN","frontmatter":{"title":"Multi-object tracking via deep feature fusion and association analysis","date":"2023-10-13T00:00:00.000Z","category":["Machine Leaning"],"tag":["Machine Leaning","Multi-object Tracking"],"isOriginal":true,"description":"DOI: 10.1016/j.engappai.2023.106527 Abstract We describe a tracking-by-detection framework for multi-object tracking (MOT). It first detects the objects of interest in each frame of the video, followed by identifying association with the object detected in the previous frame. A deep association network is described to perform object feature matching in the arbitrary two frames to infer association degree of objects, and then similarity matrix loss is used to calculate association between each object in different frames to achieve an accurate tracking. The novelty of the work lies in the design of a multi-scale fusion strategy by gradually concatenating sub-networks of low-resolution feature maps in parallel to the main network of high-resolution feature maps, in the construction of a deeper backbone network which can enhance the semantic information of object features, and in the use of a siamese network for training a pair of discontinuous frames. The main advantage of our framework is that it avoids missing detection and partial detection. It is particularly suitable for solving the problem of object ID switch caused by occlusion, entering and leaving of objects. Our method is evaluated and demonstrated on the publicly available MOT15, MOT16, MOT17 and MOT20 benchmark datasets. Compared with the state-of-the-art methods, our method achieves better tracking performance, and is therefore, more suited for MOT tasks.","head":[["meta",{"property":"og:url","content":"https://blog.moorlands.cn/notes/ai/Multi-object-tracking-via-deep-feature-fusion-and-association-analysis.html"}],["meta",{"property":"og:site_name","content":"荒地"}],["meta",{"property":"og:title","content":"Multi-object tracking via deep feature fusion and association analysis"}],["meta",{"property":"og:description","content":"DOI: 10.1016/j.engappai.2023.106527 Abstract We describe a tracking-by-detection framework for multi-object tracking (MOT). It first detects the objects of interest in each frame of the video, followed by identifying association with the object detected in the previous frame. A deep association network is described to perform object feature matching in the arbitrary two frames to infer association degree of objects, and then similarity matrix loss is used to calculate association between each object in different frames to achieve an accurate tracking. The novelty of the work lies in the design of a multi-scale fusion strategy by gradually concatenating sub-networks of low-resolution feature maps in parallel to the main network of high-resolution feature maps, in the construction of a deeper backbone network which can enhance the semantic information of object features, and in the use of a siamese network for training a pair of discontinuous frames. The main advantage of our framework is that it avoids missing detection and partial detection. It is particularly suitable for solving the problem of object ID switch caused by occlusion, entering and leaving of objects. Our method is evaluated and demonstrated on the publicly available MOT15, MOT16, MOT17 and MOT20 benchmark datasets. Compared with the state-of-the-art methods, our method achieves better tracking performance, and is therefore, more suited for MOT tasks."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-06T06:49:46.000Z"}],["meta",{"property":"article:author","content":"游日山"}],["meta",{"property":"article:tag","content":"Machine Leaning"}],["meta",{"property":"article:tag","content":"Multi-object Tracking"}],["meta",{"property":"article:published_time","content":"2023-10-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-06T06:49:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Multi-object tracking via deep feature fusion and association analysis\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-13T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-06T06:49:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"游日山\\",\\"url\\":\\"https://blog.moorlands.cn\\"}]}"]]},"headers":[{"level":2,"title":"Abstract","slug":"abstract","link":"#abstract","children":[]},{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[{"level":3,"title":"Detection-free tracking (DFT)","slug":"detection-free-tracking-dft","link":"#detection-free-tracking-dft","children":[]},{"level":3,"title":"Tracking-by-detection (TBD)","slug":"tracking-by-detection-tbd","link":"#tracking-by-detection-tbd","children":[]},{"level":3,"title":"Challenges","slug":"challenges","link":"#challenges","children":[]},{"level":3,"title":"Purposed Method","slug":"purposed-method","link":"#purposed-method","children":[]},{"level":3,"title":"Conclusion","slug":"conclusion","link":"#conclusion","children":[]}]},{"level":2,"title":"Related work","slug":"related-work","link":"#related-work","children":[{"level":3,"title":"Contributions","slug":"contributions","link":"#contributions","children":[]}]},{"level":2,"title":"Method","slug":"method","link":"#method","children":[{"level":3,"title":"Multi-object detection based on high-resolution multi-scale feature fusion","slug":"multi-object-detection-based-on-high-resolution-multi-scale-feature-fusion","link":"#multi-object-detection-based-on-high-resolution-multi-scale-feature-fusion","children":[]},{"level":3,"title":"Deep feature extraction and enhancement","slug":"deep-feature-extraction-and-enhancement","link":"#deep-feature-extraction-and-enhancement","children":[]},{"level":3,"title":"Association analysis","slug":"association-analysis","link":"#association-analysis","children":[]},{"level":3,"title":"Loss function","slug":"loss-function","link":"#loss-function","children":[]},{"level":3,"title":"Summary","slug":"summary","link":"#summary","children":[]}]}],"git":{"createdTime":1698244887000,"updatedTime":1699253386000,"contributors":[{"name":"Sunhill666","email":"sunhilly@qq.com","commits":3}]},"readingTime":{"minutes":16.36,"words":4907},"filePathRelative":"notes/ai/Multi-object-tracking-via-deep-feature-fusion-and-association-analysis.md","localizedDate":"2023年10月13日","excerpt":"<blockquote>\\n<p>DOI: <a href=\\"https://www.webofscience.com/wos/alldb/full-record/WOS:001028597000001\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">10.1016/j.engappai.2023.106527</a></p>\\n</blockquote>\\n<h2> Abstract</h2>\\n<p>We describe a tracking-by-detection framework for multi-object tracking (MOT). <mark>It first detects the objects of interest in each frame of the video, followed by identifying association with the object detected in the previous frame. A deep association network is described to perform object feature matching in the arbitrary two frames to infer association degree of objects, and then similarity matrix loss is used to calculate association between each object in different frames to achieve an accurate tracking. The novelty of the work lies in the design of a multi-scale fusion strategy by gradually concatenating sub-networks of low-resolution feature maps in parallel to the main network of high-resolution feature maps, in the construction of a deeper backbone network which can enhance the semantic information of object features, and in the use of a <strong>siamese network</strong> for training a pair of discontinuous frames.</mark> The main advantage of our framework is that it avoids missing detection and partial detection. It is particularly suitable for solving the problem of object ID switch caused by occlusion, entering and leaving of objects. Our method is evaluated and demonstrated on the publicly available MOT15, MOT16, MOT17 and MOT20 benchmark datasets. Compared with the state-of-the-art methods, our method achieves better tracking performance, and is therefore, more suited for MOT tasks.</p>","copyright":{"author":"Sunhill666","license":"MIT"},"autoDesc":true}');export{e as data};