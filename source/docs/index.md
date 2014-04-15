---
title: Grafana Documentation
---

# Installation

Grafana is a frontend for Graphite and InfluxDB with powerfull visualization features for time series data.
You will need either a Graphite or InfluxDB server for Grafana to be of any use.

It is very easy to install and configure Grafana as it is a client side application that runs in your browser.
Besides Graphite or InfluxDB, it only has one optional external dependency and that is [Elasticsearch](http://www.elasticsearch.org/).
Elasticsearch is used to store, load and search for dashboards. But you can use Grafana without it.

## Download

[Download](/download) the latest release. The release package contain a subfolder, for example **grafana-1.5.3**. The
contents of this folder should be hosted by a web server, for example nginx, apache, IIS. The standard release
packages does not contain a web server to host Grafana.

## Configuration
In your chosen Grafana install location, locate the file **config.sample.js** and copy or rename it to **config.js**.
This files contains global settings for your Grafana installation.

`graphiteUrl`			Graphite url, needs to be accessable from your browser.

`elasticsearch`  	Elasticsearch url, needs to be accessable from your browser.

`grafana_index`		Elasticsearch index name where dashboards are stored (optional / leave default).

### Multiple servers
If you have multiple Graphite or InfluxDB servers you need to specify them in **config.js**.

Example:

### Timezone
The graphite-web application has a `TIME_ZONE` setting defined in `local_settings.py`. If this time zone differs from
your users local browser time then absolute time ranges and hence zoom will not work correctly. Use Grafana's
`timezoneOffset` settings to correct this issue.

Example. If your graphite-web `TIME_ZONE` is set to _America/New___York_ then set `timezoneOffset` to **"-0500"**
for UTC-5 hours.

`timezoneOffset` should be set to the UTC offset of your graphite-web time zone. If your
graphite-web timezone is configured for **UTC** then specify **"0000"** as the value for timezoneOffset.

If set correctly Grafana will use the timezoneOffset setting to translate your local time zone to the correct local
time for your graphite-web installation.

## Graphite server config
If you haven't used an alternative dashboard for graphite before you need to enable CORS (Cross Origin Resource Sharing).
This is only required if Grafana is hosted on a different web domain from your graphite-web.

For Apache 2.x:

```javascript
Header set Access-Control-Allow-Origin "*"
Header set Access-Control-Allow-Methods "GET, OPTIONS"
Header set Access-Control-Allow-Headers "origin, authorization, accept"
```

Note that using `"*"` leaves your graphite instance quite open so you might want to consider
using `"http://my.graphite.com"` in place of `"*"`

If your Graphite web is proteced by basic authentication, you have to enable the HTTP verb OPTIONS. Take note that
when using basic auth **Access-Control-Allow-Origin** must not be set to a wildcard, also the header
**Access-Control-Allow-Credentials** must be specified. This looks like the following for Apache:

```html
Header set Access-Control-Allow-Origin "http://mygrafana.com:5656"
Header set Access-Control-Allow-Credentials true

<Location />
    AuthName "graphs restricted"
    AuthType Basic
    AuthUserFile /etc/apache2/htpasswd
    <LimitExcept OPTIONS>
      require valid-user
    </LimitExcept>
</Location>
```
