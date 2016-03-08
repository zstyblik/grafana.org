---
title: Grafana 3.0.0-beta1 Released
author: Torkel Ödegaard
published_on: March 9, 2016
---

We are proud to announce the release of Grafana v3.0.0-beta1. It's a major release that includes a more polished UX,
persisted playlists, a revamped plugin system and many small improvements.

<div class="text-center">
  <a class="button secondary radius" href="/download">Download Grafana 3.0</a>

  <br>
  <span>
    Check out the <a href="http://play.grafana.org" target="_blank">Play Site</a> to try Grafana 3.0 right now.
  </span>
</div>

<hr>

## Release Highlights
Make no mistake: this is a big release and a significant milestone for the Grafana project. The last release (v2.6) was
released over 3 months ago and since then we have been very busy (>1300 commits). Most of the work that has been done
in this release are non visible architectural changes and refactorings (more on that later).

Grafana's popularity is continuing to grow exponentially as are the number of feature requests and requests for new
data sources and visualizations. Every software project, especially open source, risks getting bogged down in feature creep.
It's hard to say no to pull requests and feature requests. There is always someone you disappoint by closing pull a request or issue.
But it's very important to say no and keep the core of Grafana focused on maintainable.

One way to solve this problem is by having good extensibility and plugin support. This way users can extend Grafana with custom plugins instead
of having all features maintained and included in the core.

### Plugins
Grafana 3.0 comes with an improved plugin SDK / API that is much cleaner and easier to use than in previous version. Beside **Data Source**
plugins, Grafana 3.0 also adds two new plugin types. **Panel** plugins allow you to add new panel types for your
dashboards. The new plugin type **App** are bundles of **Panels** and **Data Sources** plugins as well as **Dashboards** and new Grafana **Pages**.
App plugins will enable new types integrations and we are very excited to announce some of the Apps you will be able to add to your Grafana.

#### grafana-cli
You can install plugins easily with the grafana-cli tool that ships with Grafana.

```
grafana-cli install pie-chart
```

Plugins can now be installed to a directory outside the main Grafana install location. By default to `/var/lib/grafana/plugins`. You
can also install plugins from any directory if you specify them in grafana.ini like this:

```ini
[plugin.kairosdb]
path = /home/torkel/dev/plugins/datasource-plugin-kairosdb
```

### Grafana.net
TODO

### Persisted Playlists
In Grafana 3.0 you can save dashboard playlists. You can start a playlist by using the playlist url (or clicking start from the list view).
If you change a playlist while it is running it will automatically update after it has cycled through all its dashboards.
This is incredibly powerful as it allows you to remote control Grafana. If you have a big TV display showing Grafana in
your company Lobby, create a playlist named Lobby and start it on the computer connected to the Lobby TV. You can now
change the Lobby playlist and have the dashboards shown in the Lobby update accordingly. The playlist does not even
have to contain multiple dashboards, you can use this feature to reload the whole dashboard (and Grafana) periodically.

Another enhancement is that you can now make dynamic playlists by adding dashboard **tags** to the play list.

<img src="/assets/img/v3/playlists.png">

### UI Improvements
Grafana's success stems a lot from its focus a on good looking and usable UI. Polishing and improving the user
experience requires hard and continuous work. There is always something
that can be improved or tweaked. Grafana 3.0 has a polished and updated UI that not only looks better
but also has a number of usability improvements. The side menu now works as
a dropdown that you can pin to the side. The Org / Profile / Sign out side menu links have been combined into
an on hover slide out menu. It also comes with improved forms and page layout and about a hundred other UI refinements.

<img src="/assets/img/v3/menu.gif">

New look for settings views in dashboard:
<img src="/assets/img/v3/dashboard_settings.png">

Check out the <a href="http://play.grafana.org" target="_blank">Play Site</a> to get a feel for some of the UI changes.

### Annotation improvements
Grafana 3.0 includes annotation support for Prometheus and an updated annotation popover that now makes
it possible to hover onto the annotation and click links in the annotation text.

<img src="/assets/img/v3/annotation_links.gif">

### InfluxDB Policy Selection
You can now select the InfluxDB policy from the query editor.
<img src="/assets/img/v3/influxdb_policy.png">

### Technical Updates & Code Clean Up
A lot of the work that has gone into Grafana 3.0 are architectural changes to the plugin system to make it more future proof and less brittle.
The new system is using a cleaner method of Panel inheritance and more robust Angular practices (Isolated scopes). A lot of the code base
has also been migrated to ES6 and Typescript and in the process gotten some cleanup and refactoring. The styling system has seen a
massive update and cleanup. Grafana 1.x and 2.x were built on a very shaky and old style foundation based on Bootstrap 2.3 followed by a Bootswatch dark
theme followed by many custom overrides. All off that has been removed and consolidated, and migrated to a custom sass based style foundation.

#### Alerting
Thanks to the focus on improving extensibility and addressing technical debt in Grafana 3.0 the alerting feature has been pushed to a future release.
If this was the main feature you were waiting for I can understand your disappointment. We felt that, long term wise, it was more
important to make sure that Grafana's code base remains modern and of high quality, and supports good extensibility so as not to suffer
too much feature creep. We have not forgotten about Alerting and hope to start working on it again soon.

### Breaking changes

Dashboards from v2.6 are compatible, no manual updates should be necessary.

* Plugin API: The plugin api has changed so if you are using a custom data source (or panel) they need to be updated as well.
* InfluxDB 0.8: This data source is no longer included in releases, you can still install manually: [github.com/grafana/datasource-plugin-influxdb-08](https://github.com/grafana/datasource-plugin-influxdb-08)
* KairosDB: This data source has also no longer shipped with Grafana, you can install it manually: [github.com/grafana/datasource-plugin-kairosdb](https://github.com/grafana/datasource-plugin-kairosdb)

<hr>

Check out the [Demo Site](http://play.grafana.org) to try Grafana 3.0 right now.

<div class="text-center">
  <a class="button secondary radius" href="/download">Download Grafana 3.0 now</a>
</div>

### Changelog
For a detailed list and link to github issues for everything included in the 3.0 release please
view the [CHANGELOG.md](https://github.com/grafana/grafana/blob/master/CHANGELOG.md) file.

