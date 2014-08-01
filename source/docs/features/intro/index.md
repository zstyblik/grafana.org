---
title: Docs - Getting started
---

# Getting started
This guide will help you get started and acquainted with the Grafana user interface.

## Interface overview
![](docs/interface_guide1.png)

## New dashboard
![](animated_gifs/new_dashboard.gif)

## Edit graphs
Click on a panel's title and then ``Edit`` to open a panel in edit mode.
![](docs/edit_graph_ui_guide.png)

### Editing Rows
To the right of each row you have two colored rectangles, hover over these to get access to quick row controls.
![](animated_gifs/row_edit_menu.gif)

### Drag drop panels
Click and drag the panel title to start a drag and drop action.
![](animated_gifs/drag_drop.gif)


### Style editor
An important setting in the style editor is the null point mode. This controls similar behavior as the "connected line", "draw null as zero" options have in the standard graphite editor. Another great setting is the Y formats. If your metric represents bytes the bytes format will present a nicer Y-axis. For example (10 KB, 100 MB, 5 GB, etc).

### Legends
Clicking on a legend will hide that series. Clicking on the colored line will open a color selector. In this popup you can change the the series Y-axis to a second Y-axis. This is very useful for showing different related metrics on the same graph that have different scales.

### Tips and shortcuts

* Click the graph title and in the dropdown menu quickly change span or duplicate the panel.
* Ctrl+S Saves the current dashboard
* Ctrl+F Opens the dashboard finder / search
* Ctrl+H Hides all controls (good for tv displays)
* Hit Escape to exit graph when in fullscreen or edit mode
* Click the Save icon in the menu to save the dashboard with a new name
* Click the Save icon in the menu and then advanced to export the dashboard to json file, or set it as your default dashboard.











