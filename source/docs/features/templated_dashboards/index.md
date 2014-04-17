---
title: Grafana Docs - Templated dashboards
---

# Templated Dashboards

Open the dashboard settings. Under the controls tab there is a `Feature toggles` section.
Enable `Filtering` and close the dashboard settings. You should now see a filtering row below the header.
Click the plus icon to add a new filter (i.e. template property). Set the the name and graphite metric query.

For example `"prod.my___app.servers.*"` will generate a filter with all available servers.
Now that you have defined your template filter you can open any graph in edit mode and either
click on a metric segment and select your filter or if you use the text editor put `[[filter_name]]`
any where in the target expression. In the dashboard view you can now click the filter link and select
any of the available node segments and have all graphs update with that templated segment replaced with
the value you selected.