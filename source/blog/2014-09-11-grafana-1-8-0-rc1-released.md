---
title: Grafana 1.8.0-rc1 Released!
author: Torkel Ödegaard
published_on: September 11, 2014
---

New release today! v1.8.0-rc1 is now available for [download](/download).

This is probably the biggest release since the first version was released. So many new features, enhancements and general UI improvements
that this will likely be a very long blog post.

### Release highlights

#### 1) Mixed graph styling

You can override any display setting for a specific series using the series name or a regex pattern. Mix bars with lines, or disable
stacking for the right y-axis series, or any combination you can think of!

![](blog/mixed_styles.png)

You find these options under display styles.

![](blog/series_override_options.png)

#### 2) Improved templating system

The templating system has been completly rewritten. This feature was previously called filtering. From 1.8 it is renamed to templating.
Templating allows you to create variables to you can use in metric queries, annotation queries and panel titles to create generic reusable
dashboards. The new templating system uses a $variable syntax, but the old [[variable]] still works.

***New templating editor***

![](blog/template_variable_list.png)

The new templating system now has full support for InfluxDB. You can extract parts of a metric name using a regex.
You also have control can how the "All" option should be formated.

![](blog/template_editor_influxdb.png)

InfluxDB users should use ``regex wildcard`` or ``regex values`` for the ``All`` option format. Graphite users should use ``glob`` or ``whildcard``.

**Variables in Graphite function parameters**

You can now use template variables for function parameters. There is a special template variable type called ``interval`` that includes
and auto value, where the interval is calculated based on the time range.

![](blog/graphite_func_variables.png)

**Template variable selection**

When selecting template variables you now get text box and and auto complete dropdown. Useful when you have many posible values for
a variable.


### Documentation
The documentation has also seen an overhaul with many improvements and additions. A new [Getting started](/docs/features/intro) guide
and a new [Troubleshooting](/docs/troubleshooting) guide for example.

### Fixes and small additions
There are also a number of small improvements and fixes in this release. It also has a number of architectural improvements
that will make future features and additions easier to implement and manage. Check the changelog on the [download page](/download)
for a complete list.

## Grafana & full time development

The future for Grafana looks very bright. I am, since last week, working on it full time. I currently have no sponsor
or income besides my company (Coding Instinct AB) savings. So any company that wants to sponsor development, can get
their logo on the start page, mentions in release notes and emails. Please email me at [torkel@grafana.org](mailto:contact@grafana.org)

Another avenue that I am going to explore, if sponsoring does not pan out,
is working on a paid premium version and a hosted version. There is so much more that can
be done with Grafana in turns of future features, improvements and polish. There is also a a lot of time consuming
maintainaince (library upgrades), support and documentation that needs to be done. So full time development is
really needed. The question is how to finance it.

## Meetups, Conferences & Company talks/coaching

If you want me to come talk about Grafana, application metrics, build measure learn or Graphite.
Please email me at [torkel@grafana.org](mailto:contact@grafana.org). I live in Stockholm Sweden so
travel could be an issue, but I am flexible and available :)

Cheers & keep on graphing!<br>
Torkel

