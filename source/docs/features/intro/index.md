---
title: Docs - Introduction guide
---

# Introduction guide

[This video](http://www.youtube.com/watch?v=OUvJamHeMpw) contains a short intro demo and a guide for creating dashboards, editing graphs and creating templated dashboards.

###Editing dashboards
Click the configure dashboard button on the top menu to the right to open the dashboard settings. Here you can set dashboard title, theme, create, delete and move rows, and much more. _(More detail will be added)_
The "Import" and "Metrics" tabs contain features that are not ready yet.

###Editing Rows
In the dashboard view you will have rows and panels. Each panel can have a specified span (1-12). You can configure the row height and panels by hovering over the orange marker to the left of the row and click on the configure button that will appear. This will open the row editor modal. In the row editor you can set the row height and add, delete panels and set column span for panels.

###Adding Graphs
You can add the graphite (i.e. graph) panel by clicking on the plus icon that appears to the right of any row with space left. You can also add it in the Row editor modal. In the _Add Panel_ view you should select graphite in the panel type dropdown, set title and a colspan (all can be easily changed later on).

###Editing Graphs
Now that you have a graph panel you can open its edit mode by clicking on the title and select edit from the dropdown menu. This will open the graph panel in fullscreen edit mode, showing the graph being edited on top and a tabbed edit pane in the bottom.

The edit mode tabs are:
- General : Set title, and panel span (i.e width)
- Targets : Add / Edit graphite target expressions
- Axis Labels : Set any axis labels
- Style : A multitude of styling options that define how the graph should look (line width, bars, stacked, etc)

####Graphite target editor
It is in the _Targets_ tab that you will spend the majority of your time. To add a graphite target click the _Add target_ button. This should add a target row with a "select metric" link followed by a plus icon. Click the select metric link and it should open a dropdown of the top level metric directories, select one to get another select metric link for the next segment (node), continue to you reached the leaf node.

#####Side note
If at any point you find the target editor buggy or not just suitable to what you want to do. Just click the pen icon to the right to edit the target in a normal text box.

To add a function click the plus icon. Once a function has been added you can click on the function to edit parameters. The function editing and the whole clickable metric node segments is no way complete or optimal yet. There are many cases of graphite target expressions and functions that are not supported right now (like functions that take multiple series lists). But this can and will be improved in the future to support more cases. The function editing will also be improved as well as the add function menu (add quick search / autocomplete for example).

You can duplicate any target by clicking the cog icon to the right.

#### Style editor
An important setting in the style editor is the null point mode. This controls similar behavior as the "connected line", "draw null as zero" options have in the standard graphite editor. Another great setting is the Y formats. If your metric represents bytes the bytes format will present a nicer Y-axis. For example (10 KB, 100 MB, 5 GB, etc).

_More details on settings to be added later_

### Legends
Clicking on a legend will hide that series. Clicking on the colored line will open a color selector. In this popup you can change the the series Y-axis to a second Y-axis. This is very useful for showing different related metrics on the same graph that have different scales.

### Drag and drop
By clicking and dragging a graph title you will start a drag drop operation that will show you possible drop zones.

### Templating
Open the dashboard settings. Under the controls tab there is a _Pulldowns_ section. Enable filtering and close the
dashboard settings. You should now see a filtering row below the header. Click the plus icon to add a new filter (i.e. template property). Set the the name and graphite metric query. For example "prod.my_app.servers.*" will generate a filter with all available servers. Now that you have defined your template filter you can open any graph in edit mode and either click on a metric segment and select your filter or if you use the text editor put \[\[filter_name\]\] any where in the target expression. In the dashboard view you can now click the filter link and select any of the available node segments and have all graphs update with that templated segment replaced with the value you selected.


### Tips and shortcuts

* Click the graph title and in the dropdown menu quickly change span or duplicate the panel.
* Ctrl+S Saves the current dashboard
* Ctrl+F Opens the dashboard finder / search
* Ctrl+H Hides all controls (good for tv displays)
* Hit Escape to exit graph when in fullscreen or edit mode
* Click the Save icon in the menu to save the dashboard with a new name
* Click the Save icon in the menu and then advanced to export the dashboard to json file, or set it as your default dashboard.











