---
title: Grafana 3.0 Stable Released
author: Torkel Ödegaard
published_on: May 11, 2016
---

Grafana 3.0 Stable is now available for download! Over the past month we've been polishing features,
fixing bugs and making sure everything is working the way it's supposed to. We've been overwhelmed
by the excitement and response around this release. See the features below to get a more in-depth
look at what 3.0 has to offer, and check out what else we've been up to.

<div class="text-center">
<a class="button secondary radius" href="/download">Download Grafana 3.0</a>.
<a class="button primary radius" href="http://play.grafana.org" target="_blank">Live Demo</a>.
</div>

## Release Highlights

- **Big UI** improvements and polish
- **Redesigned** plugin architecture and SDK
- **Grafana-cli** command line tool shipped with grafana, installs plugins
- **Persisted** dashboard playlists
- **Preferences** like home dashboard, timezone and theme on org and user level
- **New** plugin types, Apps, and Panels.
- **New** platform site built around Grafana at [Grafana.net](https://grafana.net)
  - Plugin repository
  - Dashboard repository (coming soon)
  - Hosted Grafana and Hosted metrics (coming soon)
  - Monitoring and backups of on-prem Grafana (coming soon)
- **Annotation** popovers can contain clickable links
- **Templated data source** Easily reuse the same dashboard for multiple data source instances
- **OSX Homebrew support** [Homebrew installation instructions](http://docs.grafana.org/installation/mac/)
- **Support** for InfluxDB 0.11+ (and new functions)
- [Full changelog](https://github.com/grafana/grafana/blob/master/CHANGELOG.md)

## Whats new in 3.0 Screencast

I have recorded a 19 minute long screencast that demos all the major new features in the release. But If you
prefer to read then check out the [What's new in Grafana 3.0](http://docs.grafana.org/guides/whats-new-in-v3/) article.

<iframe style="width: 100%;" height="415" src="https://www.youtube.com/embed/1kJyQKgk_oY" frameborder="0" allowfullscreen></iframe>

## Commercial Support

We are here to help you succeed with your Grafana projects. [Commercial support subscriptions](https://grafana.net/support/plans) for Grafana are now available. 

- Get escalated access to core members of the Grafana development team; we’ll work with you to help you solve any Grafana issue quickly.
- Three tiers of production-level support, with increasing levels of response times and communication channels; pick the one that’s best for you.
- Unlimited incidents are available on every tier.

We are committed to a 100% open-source strategy for Grafana. If your organization finds Grafana valuable, please consider purchasing a subscription. Get direct support, bug fixes, and training from the core Grafana team.

## Grafana.net

<img src="/assets/img/blog/v3.0/grafana_net_tour.png">

[Grafana.net](https://grafana.net) offers a central repository where the community can come together to discover, create and
share plugins (data sources, panels, apps) and dashboards.

We are also working on a hosted Graphite-compatible data source that will be optimized for use with Grafana.
It’ll be easy to combine your existing data source(s) with this OpenSaaS option. Finally, Grafana.net can
also be a hub to manage all your Grafana instances. You’ll be able to monitor their health and availability,
perform dashboard backups, and more.

## Plugin showcase

Discovering and installing plugins is very quick and easy with Grafana 3.0 and [Grafana.net](https://grafana.net). Here
are a couple that I encourage you try!

#### [Clock Panel](https://grafana.net/plugins/grafana-clock-panel)
Support's both current time and count down mode.
<img src="/assets/img/blog/v3.0/clock_panel.png">

#### [Worldmap Panel](https://grafana.net/plugins/grafana-worldmap-panel)
Worldmap panel that can work with both regular time series (if you have country code in series name) and GeoHash codes
that you can use with Elasticsearch's GeoHash aggregation.

<img src="/assets/img/blog/v3.0/worldmap-world.png">

#### [Pie Chart Panel](https://grafana.net/plugins/grafana-piechart-panel)
A simple pie chart panel is now available as an external plugin.
<img src="/assets/img/blog/v3.0/pie_chart_panel.png">

#### [WorldPing App](https://grafana.net/plugins/raintank-worldping-app)
This is full blown Grafana App that adds new panels, data sources and pages to give
feature rich global performance monitoring directly from your on-prem Grafana.

<img src="/assets/img/blog/v3.0/wP-Screenshot-dash-web.png">

#### [Zabbix App](https://grafana.net/plugins/alexanderzobnin-zabbix-app)
This app contains the already very pouplar Zabbix data source plugin, 2 dashboards and a triggers panel. It is
created and maintained by [Alexander Zobnin](https://github.com/alexanderzobnin/grafana-zabbix).

<img src="/assets/img/blog/v3.0/zabbix_app.png">

Checkout the full list of plugins on [Grafana.net](https://grafana.net/plugins)

## Upcoming webinars

<h4 class="null"><span style="font-size:14px"><span class="mc-toc-title">Wednesday, May 18 - 1:00pm EDT</span></span></h4>
<h4><a href="https://attendee.gotowebinar.com/register/3674548443167506178">Deconstructing the New Plugin Architecture in Grafana.</a></h4>
Matt Toback will take a deep dive into the new plugin architecture in Grafana 3.0 and how to use Grafana.net to extend your panels, data sources and even introduce new applications.
<h5><a href="https://attendee.gotowebinar.com/register/3674548443167506178">Register Now</a></h5>

<h4 class="null"><span style="font-size:14px"><span class="mc-toc-title">Wednesday, May 25 - 1:00pm EDT</span></span></h4>
<h4><a href="https://attendee.gotowebinar.com/register/1168326036993997827">Deconstructing the New Plugin Architecture in Grafana.</a></h4>
Matt Toback will take a deep dive into the new plugin architecture in Grafana 3.0 and how to use Grafana.net to extend your panels, data sources and even introduce new applications.
<h5><a href="https://attendee.gotowebinar.com/register/1168326036993997827">Register Now</a></h5>

## Thanks
A big thank you to everyone who helped test and report issues with the beta release.

<div class="">
<a class="button secondary radius" href="/download">Download Grafana 3.0</a>.
<a class="button primary radius" href="http://play.grafana.org" target="_blank">Live Demo</a>.
</div>

#### Subscribe to project updates
<section class="newsletter">
  <form action="http://grafana.us8.list-manage.com/subscribe/post?u=2aeb5711db2aececc990be536&amp;id=5585d37ecc" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
    <row class="collapse">
      <div class="medium-10 columns">
        <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address">
      </div>
      <div class="medium-2 columns">
        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button postfix">
      </div>
    </row>
  </form>
</section>
