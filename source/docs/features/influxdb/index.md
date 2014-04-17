---
title: Docs - InfluxDB
---

# InfluxDB

With version 1.5 Grafana now supports InfluxDB. The support is pretty basic with this first version. So feedback on possible improvements is much needed.

To enable InfluxDB as datasource:
Comment out graphiteUrl setting, and add this to config.js:

```js
   datasources: {
      influx: {
        default: true,
        type: 'influxdb',
        url: 'http://<your_influx_db_server>:8086/db/<db_name>',
        username: 'test',
        password: 'test',
      }
    },
```

![](influxdb_editor.png)

When you add a InfluxDB query you can specify series name (can be regex), value column and a function. Group by time can be specified or if left blank will be automatically set depending on how long the current time span is. It will translate to a InfluxDB query that looks like this:

```sql
select [[func]]([[column]]) from [[series]] where [[timeFilter]] group by time([[interval]]) order asc
```

