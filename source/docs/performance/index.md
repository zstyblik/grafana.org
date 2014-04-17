---
title: Docs - Performance
---

# Performance

If you are using graphite 0.9.12 or bellow and are experiencing slow loading times, especially for long time range range queries
there is a fix. The reason for slow performance is that graphites json render returns all data points for the time range. Even
if you have a graph width of 500 pixels graphite could return 50 000 data points or even more.

There was feature in graphite web (https://github.com/graphite-project/graphite-web/pull/334) that added maxDataPoints
that makes json queries a lot faster for large time spans. It did not get merged into 0.9.12 branch before release.

If you are using large time spans and experience bad performance. Update graphite web to latest from this branch (https://github.com/graphite-project/graphite-web/tree/0.9.x)

Alternative if you use 0.9.12 you can update just render/views.py with this https://github.com/graphite-project/graphite-web/blob/0.9.x/webapp/graphite/render/views.py, and render/attime.py with https://github.com/graphite-project/graphite-web/blob/0.9.x/webapp/graphite/render/attime.py

With this fix you can switch from short 5 hour time spans to months with very quick loading times!