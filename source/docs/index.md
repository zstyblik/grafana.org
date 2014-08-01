---
title: Docs - Installation
---

# Installation

Grafana is a frontend for [Graphite](http://graphite.readthedocs.org/en/latest/), [InfluxDB](http://influxdb.org)
and [OpenTSDB](http://opentsdb.net) with powerfull visualization features for time series data.
You will need either a Graphite, InfluxDB or OpenTSDB server for Grafana to be of any use.

## Download

[Download](/download) the latest release. The release package contain a subfolder, for example **grafana-1.7.0**. The
contents of this folder should be hosted by a web server, for example nginx, apache, IIS. The standard release
packages does not contain a web server to host Grafana.

### Dependencies
There are no dependencies, Grafana is a client side application that runs in your browser. It only needs a time series store
where it can fetch metrics. If you use InfluxDB Grafana can use it to store dashboards.
If you use Graphite or OpenTSDB you can use Elasticsearch to store dashboards or just use json files stored on disk.

## Configuration
In your chosen Grafana install location, locate the file **config.sample.js** and copy or rename it to **config.js**.
This files contains global settings for your Grafana installation.


### Datasources
The datasources property defines your metric, annotation and dashboard storage backends.

- You can specify multiple datasources.
- default: true    marks it as the default metric source (if you have multiple)
- grafanaDB: true  marks it for use as dashboard storage (applicable for InfluxDB & Elasticsearch)

### InfluxDB example setup
```javascript
datasources: {
  'eu-metrics': {
    type: 'influxdb',
    url: 'http://my_influxdb_server:8086/db/<db_name>',
    username: 'test',
    password: 'test',
  },
  'grafana': {
    type: 'influxdb',
    url: 'http://my_influxdb_server:8086/db/grafana',
    username: 'test',
    password: 'test',
    grafanaDB: true
  },
},
```
In the above example you see two InfluxDB datasources, one for metrics and a seperate used for dashboard storage. You can use the same InfluxDB
database for both. But it is probably a good idea to keep them seperate. The InfluxDB databases need to exist, grafana does not create
them.

### Graphite & Elasticsearch setup example

```javascript
datasources: {
  graphite: {
    type: 'graphite',
    url: "http://my.graphite.server.com:8080",
  },
  elasticsearch: {
    type: 'elasticsearch',
    url: "http://my.elastic.server.com:9200",
    index: 'grafana-dash',
    grafanaDB: true,
  }
},
```
If you use Graphite you need Elasticsearch if you want to store & search dashboards. You can also use json and scripted dashboards if
you really do not want to setup Elasticsearch.

### OpenTSDB & Elasticsearch setup example

```javascript
datasources: {
  opentsdb: {
    type: 'opentsdb',
    url: "http://my.opentsdb.server.com:4242",
  },
  elasticsearch: {
    type: 'elasticsearch',
    url: "http://my.elastic.server.com:9200",
    index: 'grafana-dash',
    grafanaDB: true,
  }
},
```
#

### Basic authentication
If your Graphite or Elasticsearch server has basic authentication you can specify the username and password in the url.
For example `"http://admin:secret@my.graphite.com"`

## Global configuration options

```javascript
// specify the limit for dashboard search results
search: {
  max_results: 20
},

// default start dashboard
default_route: '/dashboard/file/default.json',

// set to false to disable unsaved changes warning
unsaved_changes_warning: true,

// set the default timespan for the playlist feature
// Example: "1m", "1h"
playlist_timespan: "1m",

// If you want to specify password before saving, please specify it bellow
// The purpose of this password is not security, but to stop some users from accidentally changing dashboards
admin: {
  password: ''
},

// Add your own custom pannels
plugins: {
  panels: []
}
```

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
using `"http://my.grafana.com"` in place of `"*"`

If your Graphite web is proteced by basic authentication, you have to enable the HTTP verb OPTIONS. Take note that
when using basic auth **Access-Control-Allow-Origin** must not be set to a wildcard, also the header
**Access-Control-Allow-Credentials** must be specified. This looks like the following for Apache:

```html
Header set Access-Control-Allow-Origin    "http://mygrafana.com:5656"
Header set Access-Control-Allow-Methods   "GET, OPTIONS"
Header set Access-Control-Allow-Headers   "origin, authorization, accept"
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
