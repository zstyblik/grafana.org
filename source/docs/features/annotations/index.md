---
title: Grafana Docs - Annotations
---

# Annotations

To enable annotations open dashboard settings and the controls tab.
Under feature toggles you will find the checkbox for annotations.

When enabled they will appear in the sub menu controls area.
![](annotations_submenu1.png)

Click the cog wheel to open the dialog where you can add & edit annotations.
![](annotations_dialog1.png)

Currently only two types of annotations are available. Graphite metrics (standard graphite targets) and graphite events. Select the type you want and enter either a graphite target expression or tags if you use graphite events. To control how annotations are displayed you can select the icon color, size, vertical line (like drawAsInfinite) and line color.

Annotations by default look like this:
![](annotated_graph1.png)

When you hover over a annotation you get info about the event and the time. For graphite events you get description (i.e. what) and tags. In the sub menu row you can click any annotation to hide / show it.

Annotations are saved per dashboard. Support for Elasticsearch and other event data sources will be added in the future. You can hide the annotations and the whole sub menu row with Ctrl+h or toggle the option in dashboard settings named hide controls. When ever you want to show annotations just hit ctrl+h again and click the annotation you want to show in the graphs.

