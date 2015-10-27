---
title: Grafana 2.5 Released
author: Torkel Ödegaard
published_on: October 28, 2015
---

We are pleased to announce that Grafana 2.5 is now released!

<a href="http://grafana.org/download/" target="_blank">Download Grafana 2.5 now</a>

## Release highlights
We're excited about this release, and want to share some of the highlights. This release includes many
fixes and enhancements to all areas of Grafana, like new Data Sources, new and improved time picker, user invites, panel
resize handles and improved InfluxDB and OpenTSDB support.

### New time picker
<img src="/assets/img/features/timepicker.png" alt="New Time picker">

A new time picker with room for more quick ranges as well as new types of relative ranges, like `Today`,
`The day so far` and `This day last week`. Also an improved time & calendar that now works
correctly in UTC mode.

### Elasticsearch

<img src="/assets/img/features/elasticsearch_metrics_ex1.png" alt="Elasticsearch example">
<br>

This release brings fully featured query editor for Elasticsearch. You will now be able to vizualize
logs or any kind of data stored in Elasticserarch. The elasticsearch query editor
allows you to build both simple and complex queries for logs or metrics.

- Extract many types of metrics from documents like
  - Count, Avg, Min, Max, Sum
  - Percentiles, Std Dev, etc.
- Group by multiple terms or filters
  - Specify group by options like Top 5 based on Avg @value
- Query only relevant indicies based on time pattern
- Alias patterns for short readable series names

Try the new Elasticsearch query editor on the [play.grafana.org](http://play.grafana.org/dashboard/db/elasticsearch-metrics) site.

### CloudWatch

<img src="/assets/img/features/cloudwatch.png" alt="Cloudwatch editor">

Grafana 2.5 ships with a new CloudWatch datasource that will allow you to query and visualize CloudWatch
metrics directly from Grafana.

- Rich editor with auto completion for metric names, namespaces and dimensions
- Templating queries for generic dashboards
- Alias patterns for short readable series names

### Prometheus

<img src="/assets/img/features/prometheus_editor.png" alt="Prometheus editor">

Grafana 2.5 ships with a new Prometheus datasource that will allow you to query and visualize data
stored in Prometheus.


### Mix different data sources
<img src="/assets/img/features/mixed_data.png" alt="Mix data sources in the same dashboard or in the same graph!">

In previous releases you have been able to mix different data sources on the same dashboard. In v2.5 you
will be able to mix then on the same graph! You can enable this by selecting the built in `-- Mixed --` data source.
When selected this will allow you to specify data source on a per query basis. This will allow you
to plot metrics from different Graphite servers on the same Graph or plot data from Elasticsearch alongside
data from Prometheus.

### Panel Resize handles
<img src="/assets/img/features/panel_resize.gif" alt="">

This release adds resize handles to the the bottom right corners of panels making is easy to resize both width and height.

### User invites
<img src="/assets/img/features/org_invite.png" alt="">

This version also brings some new features for user management.

- Organization admins can now invite new users (via email or manually via invite link)
- Users can signup using invite and get automatically added to invited organization
- User signup can (if enabled) contain contian an email verification step.
- Check out [#2353](https://github.com/grafana/grafana/issues/2353) for more info.

### Miscellaneous improvements

- InfluxDB query editor now supports math and AS expressions
- InfluxDB query editor now supports custom group by interval
- Panel drilldown link is easier to reach
- LDAP improvements (can now search for group membership if your LDAP server does not support memberOf attribute)
- More units for graph and singlestat panel (Length, Volume, Temperature, Pressure, Currency)
- Admin page for all organizations (remove / edit)

### Breaking changes
There has been some changes to the data source plugin API. If you are using a custom plugin check that there is an update for it before you upgrade. Also
the new time picker does not currenty support custom quick ranges like the last one did. This will likey be added in a 2.6 release.

